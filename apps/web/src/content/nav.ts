export type NavLink = { label: string; href: string };

/** The three nav links (step 02), also in the footer: Ross's three roles, each to its section. */
export const mainNav: NavLink[] = [
  { label: "founder", href: "/#about" },
  { label: "speaker", href: "/#speaker" },
  { label: "educator", href: "/#work" },
];

/** The menu adds the rest of the homepage and the bio. */
export const menuNav: NavLink[] = [
  ...mainNav,
  { label: "talks", href: "/#talks" },
  { label: "chats", href: "/#chats" },
  { label: "past speeches", href: "/#events" },
  { label: "bio", href: "/bio" },
];

/** Every "book ross" button opens the enquiry form, which goes to Mary. */
export const bookLink: NavLink = { label: "book ross", href: "/contact" };

/** Shared with every app in the monorepo (packages/ui/src/content/brand.ts). */
export { contact, socials, type SocialLabel } from "@rosspower/ui/content/brand";
