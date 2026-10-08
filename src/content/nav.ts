export type NavLink = { label: string; href: string };

/** Header + footer links. Point these at real pages as they ship. */
export const mainNav: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Speaking", href: "/#speaking" },
  { label: "Talks", href: "/#talks" },
  { label: "Events", href: "/#events" },
  { label: "AI Powered", href: "/#ai-powered" },
];

export const bookLink: NavLink = { label: "Book Ross", href: "/#book" };

export const contact = {
  email: "ross@aipowered.xyz",
  aiPowered: "https://aipowered.xyz",
};
