import { contact, discoveryBooking, socials } from "@rosspower/ui/content/brand";
import { asset } from "@rosspower/ui/lib/asset";

/**
 * Everything on links.rosspower.ai. Offer descriptions are aipowered.xyz's own copy
 * (aipowered-website src/lib/page-content/hubs.ts, seo.ts, public/llms.txt), in the third person.
 * Photos come from aipowered-website/public/images, pre-sized, and live in the R2 assets bucket.
 */

type Photo = { src: string; alt: string };

/** Full-width image card. */
export type FeatureLink = { kind: "feature"; label: string; title: string; desc: string; href: string; image: Photo };
/** Half-width image card, two to a row. */
export type TileLink = { kind: "tile"; title: string; href: string; image: Photo };
/** Plain card: thumbnail, title, one line, domain. */
export type RowLink = { kind: "row"; title: string; desc: string; href: string; image: Photo };

export type LinkItem = FeatureLink | TileLink | RowLink;
export type LinkSection = { title: string; items: LinkItem[] };

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

export const sections: LinkSection[] = [
  {
    title: "Work with Ross",
    items: [
      {
        kind: "feature",
        label: "20 min · With Ross",
        title: "Book a discovery call",
        desc: "Tell Ross where you are with AI, and find the right next step for you or your team.",
        href: discoveryBooking.url,
        image: { src: asset("images/links/discovery.jpg"), alt: "Ross helping a workshop participant at their laptop" },
      },
      {
        kind: "tile",
        title: "Book Ross to speak",
        href: "https://rosspower.ai/#book",
        image: { src: asset("images/links/speaking.jpg"), alt: "Ross on stage pointing to the room" },
      },
      {
        kind: "tile",
        title: "Get your AI Game Plan",
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
        desc: "A 90-minute audit with Ross, then a written strategy you can run or build out.",
        href: `${AIP}/founders/ai-audit`,
        image: { src: asset("images/links/ai-audit.jpg"), alt: "Ross presenting beside a projector screen" },
      },
      {
        kind: "row",
        title: "The AI-Powered Business",
        desc: "Your website, marketing, CRM and automations, built by Ross's team. All yours.",
        href: `${AIP}/founders/ai-powered-business`,
        image: { src: asset("images/links/ai-powered-business.jpg"), alt: "Ross presenting to a workshop" },
      },
      {
        kind: "row",
        title: "Claude Programme",
        desc: "Cohort 4.0 is underway. Join the waitlist to hear first about what comes next.",
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
        desc: "90 days to upgrade your leaders and team, on one system: Claude, ClickUp and Granola.",
        href: `${AIP}/organisations/teamos`,
        image: { src: asset("images/links/teamos.jpg"), alt: "A full room of laptops at an AI Powered workshop" },
      },
      {
        kind: "row",
        title: "AI Future Leaders",
        desc: "Find your rising AI talent and train them into the leaders who bring everyone along.",
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
        desc: "AI Powered, not AI replaced. Programmes, solutions and events for founders and organisations.",
        href: AIP,
        image: { src: asset("images/links/ai-powered.jpg"), alt: "Ross speaking at an AI Powered event in a bamboo hall" },
      },
      {
        kind: "row",
        title: "Events",
        desc: "Come learn AI in the room: live workshops, founder sessions and community events.",
        href: `${AIP}/events`,
        image: { src: asset("images/links/events.jpg"), alt: "Ross smiling during a session in a bamboo hall" },
      },
    ],
  },
];

/** "Follow along": one card per profile, with its follower count. */
const socialOrder = ["YouTube", "Instagram", "LinkedIn", "X"] as const;

export const follow = socialOrder.map((label) => socials.find((s) => s.label === label)!);

export const footer = {
  site: { label: "rosspower.ai", href: "https://rosspower.ai" },
  email: contact.email,
};
