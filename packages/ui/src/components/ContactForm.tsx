"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { enquiryTypes, limits, type ContactSource } from "../content/contact";
import { cn } from "../lib/cn";
import { ArrowUpRight } from "./Icon";

type Status = "idle" | "sending" | "sent" | "error";

/** Chevron for the select, drawn in the look's text colour. */
const chevron = (hex: string) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23${hex}' stroke-width='1.5'/%3E%3C/svg%3E")`;

/**
 * Two looks. "classic" is links.rosspower.ai/book (unchanged). "v2" is rosspower.ai/contact (Andi's build guide,
 * step 15): a sand panel, cream inputs with forest borders, lowercase labels and a pill button.
 */
const looks = {
  classic: {
    panel: "flex flex-col gap-5 rounded-xl bg-card p-5 @lg/contact:rounded-2xl @lg/contact:p-7",
    thanks: "flex flex-col gap-4 rounded-xl bg-card p-5 @lg/contact:rounded-2xl @lg/contact:p-7",
    control:
      "w-full rounded-lg border border-ink/15 bg-cream px-4 text-[16px] text-ink transition-colors placeholder:text-ink/40 hover:border-ink/30 focus:border-ink focus:outline-none",
    label: "type-label tracking-[0.12em] text-ink/70 uppercase",
    optional: "text-ink/40 normal-case tracking-normal",
    chevron: chevron("101317"),
    submit:
      "inline-flex min-h-12 items-center justify-center gap-2.5 self-start rounded-lg border border-ink bg-ink px-6 py-3.5 text-[14px] font-semibold tracking-[0.08em] text-cream uppercase transition-colors hover:bg-ink/85 disabled:opacity-60 @max-lg/contact:w-full",
    words: (s: string) => s,
    arrow: true,
  },
  v2: {
    panel: "flex flex-col gap-5 rounded-[32px] bg-sand p-6 @lg/contact:p-10",
    thanks: "flex flex-col gap-4 rounded-[32px] bg-sand p-6 @lg/contact:p-10",
    control:
      "w-full rounded-[14px] border-[1.5px] border-ink bg-cream px-4 text-[16px] text-ink placeholder:text-ink/55 focus:outline-2 focus:outline-offset-2 focus:outline-mid",
    label: "text-[14px] font-semibold",
    optional: "font-normal text-ink/70",
    chevron: chevron("17332a"),
    submit:
      "inline-flex min-h-12 items-center justify-center self-start rounded-full border-[1.5px] border-ink bg-ink px-7 py-3.5 text-[17px] font-semibold text-cream transition-colors hover:bg-pine disabled:opacity-60 @max-lg/contact:w-full",
    words: (s: string) => s.toLowerCase(),
    arrow: false,
  },
} as const;

type Look = keyof typeof looks;

function Field({ look, label, optional, children }: { look: Look; label: string; optional?: boolean; children: ReactNode }) {
  const l = looks[look];
  return (
    <label className="flex flex-col gap-2">
      <span className={l.label}>
        {l.words(label)}
        {optional ? <span className={l.optional}> (optional)</span> : null}
      </span>
      {children}
    </label>
  );
}

type ContactFormProps = {
  /** Which site the enquiry comes from; shown as the "From" line in Slack and the email, and sets the options. */
  source: ContactSource;
  /** Shown in place of the form once it's sent. */
  thanks: { title: string; body: string };
  /** "classic" (default, links) or "v2" (rosspower.ai). */
  look?: Look;
  /** Talks that ?talk=<slug> can name: it picks Keynote and starts the message with "Talk: <title>". */
  talks?: readonly { slug: string; title: string }[];
};

/**
 * The booking enquiry form, on rosspower.ai/contact and links.rosspower.ai/book.
 * Posts to /api/contact (served by the web app on both domains), which emails Mary and posts to Slack.
 * Sized by its own width, not the screen (container queries): in a narrow column (phones, the links page)
 * it keeps one field per row; from 512px wide it gets more padding and two fields across.
 * ?type=podcast picks Podcast, and ?talk=<slug> picks Keynote with the talk in the message.
 */
export function ContactForm({ source, thanks, look = "classic", talks }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const l = looks[look];
  const options: readonly string[] = enquiryTypes[source];

  // Preselect from the link that brought the visitor here. Writes to the fields directly, once.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const query = new URLSearchParams(window.location.search);
    const select = form.elements.namedItem("type") as HTMLSelectElement | null;
    const message = form.elements.namedItem("message") as HTMLTextAreaElement | null;
    const type = options.find((o) => o.toLowerCase() === query.get("type")?.toLowerCase());
    if (type && select) select.value = type;
    const talk = talks?.find((t) => t.slug === query.get("talk"));
    if (talk) {
      if (select && options.includes("Keynote")) select.value = "Keynote";
      if (message && !message.value) message.value = `Talk: ${talk.title}\n\n`;
    }
  }, [options, talks]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(e.currentTarget)), source }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "We couldn't send your enquiry just now.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send your enquiry just now.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="@container/contact">
        <div role="status" className={l.thanks}>
          <h2 className="type-h3">{thanks.title}</h2>
          <p className="type-p-lg text-ink/80">{thanks.body}</p>
        </div>
      </div>
    );
  }

  const control = l.control;
  return (
    <div className="@container/contact">
      <form ref={formRef} onSubmit={submit} className={l.panel}>
        <div className="grid gap-5 @lg/contact:grid-cols-2">
          <Field look={look} label="Name">
            <input name="name" required autoComplete="name" maxLength={limits.short} className={cn(control, "min-h-12")} />
          </Field>
          <Field look={look} label="Email">
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={limits.short}
              className={cn(control, "min-h-12")}
            />
          </Field>
          <Field look={look} label="Organisation">
            <input
              name="organisation"
              required
              autoComplete="organization"
              maxLength={limits.short}
              className={cn(control, "min-h-12")}
            />
          </Field>
          <Field look={look} label="Enquiry">
            <select name="type" required defaultValue="" className={cn(control, "min-h-12 appearance-none bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10")} style={{ backgroundImage: l.chevron }}>
              <option value="" disabled>
                {l.words("Choose one")}
              </option>
              {options.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field look={look} label="Event date" optional>
            <input name="date" placeholder="e.g. March 2027" maxLength={limits.short} className={cn(control, "min-h-12")} />
          </Field>
          <Field look={look} label="Location" optional>
            <input name="location" placeholder="City, or online" maxLength={limits.short} className={cn(control, "min-h-12")} />
          </Field>
          <Field look={look} label="Audience size" optional>
            <input name="audience" placeholder="e.g. 200 people" maxLength={limits.short} className={cn(control, "min-h-12")} />
          </Field>
        </div>
        <Field look={look} label="Tell us about your event">
          <textarea
            name="message"
            required
            rows={6}
            maxLength={limits.message}
            placeholder="Who is in the room, and what should they leave with?"
            className={cn(control, "resize-y py-3")}
          />
        </Field>

        {/* Hidden from people; bots fill it in and get dropped. */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

        {status === "error" ? (
          <p role="alert" className="type-p-sm text-ink">
            {error} Please try again.
          </p>
        ) : null}

        <button type="submit" disabled={status === "sending"} className={l.submit}>
          {l.words(status === "sending" ? "Sending" : "Send enquiry")}
          {l.arrow ? <ArrowUpRight /> : null}
        </button>
      </form>
    </div>
  );
}
