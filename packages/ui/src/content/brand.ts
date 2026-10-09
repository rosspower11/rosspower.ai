/**
 * Facts about Ross and AI Powered that every app shows: profiles, contact routes, booking.
 * Sources: aipowered-website (src/lib/cta.ts, src/lib/social-stats.ts, public/llms.txt).
 */

/** Ross's profiles. `followers` is shown on links.rosspower.ai. */
// TODO(ross): confirm the follower counts (copied from aipowered-website src/lib/social-stats.ts).
export const socials = [
  { label: "Instagram", handle: "@rosspower", href: "https://www.instagram.com/rosspower/", followers: "40K+" },
  { label: "LinkedIn", handle: "in/rosspower11", href: "https://www.linkedin.com/in/rosspower11", followers: "45K+" },
  { label: "X", handle: "@rosspower", href: "https://x.com/rosspower", followers: "50K+" },
  { label: "YouTube", handle: "@rosspower11", href: "https://www.youtube.com/@rosspower11", followers: "15K+" },
] as const;

export type SocialLabel = (typeof socials)[number]["label"];

export const contact = {
  email: "ross@aipowered.xyz",
  /** "Speak to Ross directly", the same number as the WhatsApp button on aipowered.xyz. */
  whatsapp: "https://wa.me/447790598385",
  aiPowered: "https://aipowered.xyz",
};

/** "Discovery with Ross" calendar (aipowered-website src/lib/cta.ts → DISCOVERY_BOOKING). */
export const discoveryBooking = {
  url: "https://discovery.rosspower.ai/",
  calendarId: "x4yvy5HXZa2639CEmApS",
  iframeSrc: "https://links.aipowered.xyz/widget/booking/x4yvy5HXZa2639CEmApS",
  scriptSrc: "https://links.aipowered.xyz/js/form_embed.js",
};
