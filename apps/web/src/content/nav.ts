export type NavLink = { label: string; href: string };

/** The nav (left of the header) and the footer: Ross's three roles, to his story and the two landing pages. */
export const mainNav: NavLink[] = [
  { label: "Founder", href: "/#about" },
  { label: "Speaker", href: "/speaking" },
  { label: "Educator", href: "/workshops" },
];

/** The phone menu adds the rest of the homepage and the bio ("Speaker" already covers the keynotes). */
export const menuNav: NavLink[] = [
  ...mainNav,
  { label: "Podcast", href: "/#podcast" },
  { label: "Past speeches", href: "/#events" },
  { label: "About", href: "/about" },
];

/** Every "book ross" button opens the enquiry form, which goes to Ross. */
export const bookLink: NavLink = { label: "Book Ross", href: "/contact" };

/** Shared with every app in the monorepo (packages/ui/src/content/brand.ts). */
export { contact, socials, type SocialLabel } from "@rosspower/ui/content/brand";
