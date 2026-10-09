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

/** Same profiles as aipowered-website (src/lib/social-stats.ts). */
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/rosspower/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rosspower11" },
  { label: "X", href: "https://x.com/rosspower" },
  { label: "YouTube", href: "https://www.youtube.com/@rosspower11" },
] as const;

export type SocialLabel = (typeof socials)[number]["label"];

export const contact = {
  email: "ross@aipowered.xyz",
  aiPowered: "https://aipowered.xyz",
};
