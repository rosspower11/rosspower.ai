export type NavLink = { label: string; href: string };

/** Header + footer links. Point these at real pages as they ship. */
export const mainNav: NavLink[] = [
  { label: "Speaking", href: "/#speaking" },
  { label: "Talks", href: "/#talks" },
  { label: "Events", href: "/#events" },
  { label: "Bio", href: "/bio" },
];

export const bookLink: NavLink = { label: "Book Ross", href: "/#book" };

/** Shared with every app in the monorepo (packages/ui/src/content/brand.ts). */
export { contact, socials, type SocialLabel } from "@rosspower/ui/content/brand";
