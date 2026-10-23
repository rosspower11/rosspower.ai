import { aiPowered, events, formats, talks } from "@/content/home";
import { bio } from "@/content/bio";
import { url } from "@/lib/site";
import { socials } from "@rosspower/ui/content/brand";

/** Built once at build time from the site's own copy, so it never drifts from the pages. */
export const dynamic = "force-static";

/**
 * /llms.txt (llmstxt.org): a plain summary of who Ross is, what he offers and how to book him,
 * for AI assistants and AI search (ChatGPT, Claude, Perplexity, Gemini).
 */
export function GET() {
  const body = [
    "# Ross Power",
    "",
    "> Ross Power is an AI speaker, educator and the founder of AI Powered. He makes AI simple for founders, teams and leaders through keynotes, workshops, executive briefings, panels and podcast appearances, from Bali to London. Book him at " +
      url("/contact") +
      ".",
    "",
    "## About Ross",
    "",
    ...bio.paragraphs.flatMap((p) => [p, ""]),
    "## Book Ross",
    "",
    `- [Booking enquiry form](${url("/contact")}): for keynotes, workshops, executive briefings, panels and podcasts. Share the event, the audience and what they should leave with; the team replies within two working days.`,
    ...formats.map((f) => `- ${f.title} (${f.length}): ${f.body}`),
    "",
    "## Talks",
    "",
    ...talks.map((t) => `- **${t.title}** (${t.kind}): ${t.body}`),
    "",
    "## Past events",
    "",
    ...events.map((e) => `- ${e.title}, ${e.meta}: ${e.role}`),
    "",
    "## AI Powered, Ross's company",
    "",
    aiPowered.body,
    "",
    ...aiPowered.pillars.map((p) => `- [${p.title}](${p.href}): ${p.desc}`),
    "",
    "## Pages",
    "",
    `- [Home](${url("/")}): talks, past events, AI Powered and success stories`,
    `- [About Ross Power](${url("/bio")}): full bio, plus 25 and 50 word bios and a portrait for event organisers`,
    `- [Book Ross](${url("/contact")}): the booking enquiry form`,
    "- [Links](https://links.rosspower.ai): Ross's link page, with free tools, programmes and the tools he uses",
    "",
    "## Profiles",
    "",
    ...socials.map((s) => `- [${s.label}](${s.href}): ${s.handle}`),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
