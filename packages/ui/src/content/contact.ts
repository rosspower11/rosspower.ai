/**
 * The booking enquiry form, shared by rosspower.ai/contact and links.rosspower.ai/book.
 * Both post to the same API (apps/web/src/app/api/contact/route.ts), which emails Mary and posts to Slack.
 */


/** Field limits, shared by the form and the API so both check the same thing. */
export const limits = { short: 120, message: 3000 } as const;

/** Where an enquiry came from: the "From" line (and its link) in Slack and the email. */
export const contactSources = {
  website: { label: "Ross Power Website - Contact", page: "https://www.rosspower.ai/contact" },
  links: { label: "Ross Power Links - Book a call", page: "https://links.rosspower.ai/book" },
} as const;

export type ContactSource = keyof typeof contactSources;

/**
 * What the enquiry is for, per site. Shown in the form and in the email and Slack alert.
 * rosspower.ai only offers keynotes and podcasts (v2 build guide, step 15); workshops live on aipowered.xyz.
 */
export const enquiryTypes = {
  website: ["Keynote", "Podcast", "Something else"],
  links: ["Keynote", "Workshop", "Executive briefing", "Podcast", "Something else"],
} as const satisfies Record<ContactSource, readonly string[]>;
