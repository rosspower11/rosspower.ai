import { bio } from "@/content/bio";
import { chats, pastSpeeches, talkLength, talks, work } from "@/content/home";
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
    `- [Book a keynote](${url("/contact")}): share the event, the audience and what they should leave with; the team replies within two working days.`,
    `- [Book Ross for your podcast](${url("/contact?type=podcast")}): ${chats.body}`,
    "",
    `## Keynotes (${talkLength})`,
    "",
    ...talks.map((t) => `- **${t.title}** (${t.tag}): ${t.intro}`),
    "",
    "## Podcast topics",
    "",
    ...chats.topics.map((topic) => `- ${topic}`),
    "",
    chats.clips,
    "",
    "## Past speeches",
    "",
    ...pastSpeeches.events.map((e) => `- ${e.title}, ${e.meta}: ${e.role}`),
    "",
    "## AI Powered, Ross's company",
    "",
    `AI Powered (${work.cta.href}) is where Ross's programmes and AI education for teams live: ${work.heading.plain} ${work.heading.accent} ${work.line}`,
    "",
    "## Pages",
    "",
    `- [Home](${url("/")}): keynotes, podcast topics, past speeches and what founders say`,
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
