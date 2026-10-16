/**
 * The booking enquiry form, shared by rosspower.ai/contact and links.rosspower.ai/book.
 * Both post to the same API (apps/web/src/app/api/contact/route.ts), which emails Mary and posts to Slack.
 */

/** What the enquiry is for. Shown in the form and in the email and Slack alert. */
export const enquiryTypes = ["Keynote", "Workshop", "Executive briefing", "Podcast", "Something else"] as const;

/** Field limits, shared by the form and the API so both check the same thing. */
export const limits = { short: 120, message: 3000 } as const;

/** Where an enquiry came from: the "From" line (and its link) in Slack and the email. */
export const contactSources = {
  website: { label: "Ross Power Website - Contact", page: "https://rosspower.ai/contact" },
  links: { label: "Ross Power Links - Book a call", page: "https://links.rosspower.ai/book" },
} as const;

export type ContactSource = keyof typeof contactSources;
