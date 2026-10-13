import { contact, discoveryBooking, socials } from "@rosspower/ui/content/brand";
import { asset } from "@rosspower/ui/lib/asset";

/**
 * Everything on links.rosspower.ai. Subtitles are one short line, condensed from aipowered.xyz's
 * own copy (aipowered-website src/lib/page-content/hubs.ts, seo.ts, public/llms.txt).
 * Photos come from aipowered-website/public/images, pre-sized, and live in the R2 assets bucket.
 */

type Photo = { src: string; alt: string };

/**
 * A link's URL, or null while it's still to be added (a "[link]" in the brief).
 * Links without a URL stay hidden, and so does a section with none left.
 */
type Href = string | null;

/** Full-width image card. */
export type FeatureLink = { kind: "feature"; label: string; title: string; desc: string; href: Href; image: Photo };
/** Half-width image card, two to a row. */
export type TileLink = { kind: "tile"; title: string; href: Href; image: Photo };
/** Plain card: thumbnail, title, one line, domain. */
export type RowLink = { kind: "row"; title: string; desc: string; href: Href; image: Photo };

export type LinkItem = FeatureLink | TileLink | RowLink;
export type LinkSection = { title: string; items: LinkItem[] };

/** Keep only the links that have a URL. */
export const live = <T extends { href: Href }>(links: T[]) => links.filter((l): l is T & { href: string } => !!l.href);

const AIP = contact.aiPowered;

export const profile = {
  handle: "rosspower.ai",
  name: { first: "Ross", last: "Power" },
  bio: ["Founder of AI Powered · Speaker · Educator", "Making AI simple, practical and human."],
  cover: { src: asset("images/profile/cover.jpg"), alt: "Ross on the mic to a packed room" },
  avatar: { src: asset("images/profile/ross.jpg"), alt: "Ross Power" },
  actions: {
    book: { label: "Book a call", href: discoveryBooking.url },
  },
};

/**
 * The main list, top to bottom.
 * New lead magnets (free tools, quizzes, guides) go at the very top, as the first item of
 * "Work with Ross", newest first.
 */
export const sections: LinkSection[] = [
  {
    title: "Work with Ross",
    items: [
      {
        kind: "feature",
        label: "20 min · With Ross",
        title: "Book a discovery call",
        desc: "Find the right next step for you or your team.",
        href: discoveryBooking.url,
        image: { src: asset("images/links/discovery.jpg"), alt: "Ross helping a workshop participant at their laptop" },
      },
      {
        kind: "tile",
        title: "Book to speak",
        href: "https://rosspower.ai/#book",
        image: { src: asset("images/links/speaking.jpg"), alt: "Ross on stage pointing to the room" },
      },
      {
        kind: "tile",
        title: "AI Game Plan",
        href: `${AIP}/game-plan`,
        image: { src: asset("images/links/game-plan.jpg"), alt: "Ross explaining a prompt on a big screen" },
      },
    ],
  },
  {
    title: "For founders",
    items: [
      {
        kind: "row",
        title: "AI Audit & Strategy",
        desc: "Audit and written AI strategy",
        href: `${AIP}/founders/ai-audit`,
        image: { src: asset("images/links/ai-audit.jpg"), alt: "Ross presenting beside a projector screen" },
      },
      {
        kind: "row",
        title: "The AI-Powered Business",
        desc: "Website, CRM, automations",
        href: `${AIP}/founders/ai-powered-business`,
        image: { src: asset("images/links/ai-powered-business.jpg"), alt: "Ross presenting to a workshop" },
      },
      {
        kind: "row",
        title: "Claude Programme",
        desc: "Waitlist for the next cohort",
        href: `${AIP}/founders/claude-programme`,
        image: { src: asset("images/links/claude-programme.jpg"), alt: "A live Claude Programme session on video call" },
      },
    ],
  },
  {
    title: "For organisations",
    items: [
      {
        kind: "row",
        title: "TeamOS",
        desc: "Claude, ClickUp, Granola",
        href: `${AIP}/organisations/teamos`,
        image: { src: asset("images/links/teamos.jpg"), alt: "A full room of laptops at an AI Powered workshop" },
      },
      {
        kind: "row",
        title: "AI Future Leaders",
        desc: "Turn AI talent into leaders",
        href: `${AIP}/organisations/ai-future-leaders`,
        image: { src: asset("images/links/ai-future-leaders.jpg"), alt: "A packed evening event at a garden venue" },
      },
    ],
  },
  {
    title: "AI Powered",
    items: [
      {
        kind: "feature",
        label: "Ross's company",
        title: "AI Powered",
        desc: "AI Powered, not AI replaced.",
        href: AIP,
        image: { src: asset("images/links/ai-powered.jpg"), alt: "Ross speaking at an AI Powered event in a bamboo hall" },
      },
      {
        kind: "row",
        title: "Events",
        desc: "Live AI workshops",
        href: `${AIP}/events`,
        image: { src: asset("images/links/events.jpg"), alt: "Ross smiling during a session in a bamboo hall" },
      },
    ],
  },
];

/** "tools i use": partner links. Each shows the disclosure line directly under its button. */
export const partners = {
  title: "tools i use",
  disclosure: "Heads up, I may earn a commission if you sign up through my link.",
  links: [
    // Always "HighLevel": one word, capital H and L.
    // TODO(ross): swap this dummy link (HighLevel's homepage) for the HighLevel affiliate link.
    { title: "HighLevel", href: "https://www.gohighlevel.com/" as Href },
  ],
};

/** "Follow along": one card per profile, with its follower count. */
const socialOrder = ["YouTube", "Instagram", "LinkedIn", "X"] as const;

export const follow = socialOrder.map((label) => socials.find((s) => s.label === label)!);
