import { NextResponse } from "next/server";
import { enquiryTypes, limits } from "@/content/contact";

/**
 * Booking enquiries from /contact.
 * Each one is emailed to Mary (Resend) and, when a webhook is set, posted to Slack.
 *
 * Env (Vercel project rosspower-ai):
 * - RESEND_API_KEY   Resend API key. Required for the email.
 * - CONTACT_FROM     Sender on a domain verified in Resend, e.g. "Ross Power <hello@rosspower.ai>".
 * - CONTACT_TO       Optional, defaults to Mary.
 * - SLACK_WEBHOOK_URL Optional Slack incoming webhook for a lead alert.
 */
const TO = process.env.CONTACT_TO ?? "mary@aipowered.xyz";
const FROM = process.env.CONTACT_FROM ?? "Ross Power website <onboarding@resend.dev>";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Enquiry = {
  name: string;
  email: string;
  organisation: string;
  type: string;
  date: string;
  location: string;
  audience: string;
  message: string;
};

const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Label and value for every field, in form order. Empty optional fields show as "Not given". */
const rows = (e: Enquiry): [string, string][] => [
  ["Name", e.name],
  ["Email", e.email],
  ["Organisation", e.organisation],
  ["Enquiry", e.type],
  ["Event date", e.date || "Not given"],
  ["Location", e.location || "Not given"],
  ["Audience size", e.audience || "Not given"],
];

async function sendEmail(e: Enquiry) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");

  const table = rows(e)
    .map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0">${escape(v)}</td></tr>`)
    .join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: e.email,
      subject: `New booking enquiry: ${e.type}, ${e.organisation}`,
      text: [...rows(e).map(([k, v]) => `${k}: ${v}`), "", e.message].join("\n"),
      html: `<p>New booking enquiry from rosspower.ai/contact. Reply to this email to answer ${escape(e.name)} directly.</p><table>${table}</table><p style="white-space:pre-wrap">${escape(e.message)}</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

async function sendSlack(e: Enquiry) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return false;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `New booking enquiry: ${e.type}, ${e.organisation}`,
      blocks: [
        { type: "header", text: { type: "plain_text", text: `New booking enquiry: ${e.type}` } },
        {
          type: "section",
          fields: rows(e).map(([k, v]) => ({ type: "mrkdwn", text: `*${k}*\n${v}` })),
        },
        { type: "section", text: { type: "plain_text", text: e.message.slice(0, 2900) } },
      ],
    }),
  });
  if (!res.ok) throw new Error(`Slack ${res.status}: ${await res.text()}`);
  return true;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden field only bots fill in: pretend it worked so they move on.
  if (text(body.website, 200)) return NextResponse.json({ ok: true });

  const e: Enquiry = {
    name: text(body.name, limits.short),
    email: text(body.email, limits.short),
    organisation: text(body.organisation, limits.short),
    type: text(body.type, limits.short),
    date: text(body.date, limits.short),
    location: text(body.location, limits.short),
    audience: text(body.audience, limits.short),
    message: text(body.message, limits.message),
  };

  if (!e.name || !e.organisation || !e.message || !EMAIL.test(e.email)) {
    return NextResponse.json({ error: "Please fill in every required field." }, { status: 400 });
  }
  if (!(enquiryTypes as readonly string[]).includes(e.type)) {
    return NextResponse.json({ error: "Please choose what the enquiry is for." }, { status: 400 });
  }

  const [email, slack] = await Promise.allSettled([sendEmail(e), sendSlack(e)]);
  if (email.status === "rejected") console.error("[contact] email failed", email.reason);
  if (slack.status === "rejected") console.error("[contact] slack failed", slack.reason);

  // A lead counts as delivered if it reached Mary's inbox or Slack.
  const delivered = email.status === "fulfilled" || (slack.status === "fulfilled" && slack.value);
  if (!delivered) {
    return NextResponse.json({ error: "We couldn't send your enquiry just now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
