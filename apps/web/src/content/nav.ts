export type NavLink = { label: string; href: string };

/** The nav (centre of the header) and the footer: Ross's three roles, each to its section. */
export const mainNav: NavLink[] = [
  { label: "Founder", href: "/#about" },
  { label: "Speaker", href: "/#keynotes" },
  { label: "Educator", href: "/#work" },
];

/** The phone menu adds the rest of the homepage and the bio ("Speaker" already goes to the keynotes). */
export const menuNav: NavLink[] = [
  ...mainNav,
  { label: "Podcast", href: "/#podcast" },
  { label: "Past speeches", href: "/#events" },
  { label: "Bio", href: "/bio" },
];

/** Every "book ross" button opens the enquiry form, which goes to Mary. */
export const bookLink: NavLink = { label: "Book Ross", href: "/contact" };

/** Shared with every app in the monorepo (packages/ui/src/content/brand.ts). */
export { contact, socials, type SocialLabel } from "@rosspower/ui/content/brand";
