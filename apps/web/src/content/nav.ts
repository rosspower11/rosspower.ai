export type NavLink = { label: string; href: string };

/** Header + footer links. Point these at real pages as they ship. */
export const mainNav: NavLink[] = [
  { label: "about", href: "/#about" },
  { label: "speaking", href: "/#speaking" },
  { label: "talks", href: "/#talks" },
  { label: "events", href: "/#events" },
];

/** Every "Book Ross" button opens the enquiry form, which goes to Mary. */
export const bookLink: NavLink = { label: "book ross", href: "/contact" };

/** Shared with every app in the monorepo (packages/ui/src/content/brand.ts). */
export { contact, socials, type SocialLabel } from "@rosspower/ui/content/brand";
