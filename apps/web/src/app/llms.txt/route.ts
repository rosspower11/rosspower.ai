import { events, podcast, talks, work } from "@/content/home";
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
    "> Ross Power is an AI speaker, educator and the founder of AI Powered. He makes AI simple for founders, teams and leaders through keynotes and podcast appearances, from Bali to London. Book him at " +
      url("/contact") +
      ".",
    "",
    "## About Ross",
    "",
    ...bio.paragraphs.flatMap((p) => [p, ""]),
    "## Book Ross",
    "",
    `- [Booking enquiry form](${url("/contact")}): for keynotes and podcasts. Share the event, the audience and what they should leave with; the team replies within two working days.`,
    "",
    "## Keynotes",
    "",
    ...talks.map((t) => `- **${t.title}** (${t.kind}): ${t.body}`),
    "",
    "## Podcasts",
    "",
    `${podcast.line} ${podcast.body} Topics:`,
    ...podcast.topics.map((t) => `- ${t}`),
    "",
    "## Past speeches",
    "",
    ...events.map((e) => `- ${e.title}: ${e.meta}`),
    "",
    "## AI Powered, Ross's company",
    "",
    `AI Powered helps people and organisations adapt to the changing world of work, at the intersection of AI, work and human connection. ${work.line} More at [aipowered.xyz](${work.cta.href}).`,
    "",
    "## Pages",
    "",
    `- [Home](${url("/")}): keynotes, podcasts, past speeches and success stories`,
    `- [About Ross Power](${url("/about")}): full bio, his story in five chapters, plus 25 and 50 word bios and a portrait for event organisers`,
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
