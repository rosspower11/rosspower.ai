/** The /contact page: the booking enquiry form every "Book Ross" button opens. */
export const contactPage = {
  meta: {
    title: "Book Ross Power | AI keynote speaker and workshops",
    description:
      "Book Ross Power for a keynote, workshop, executive briefing or podcast. Tell us about your event and the team will come back to you.",
  },
  eyebrow: "Book Ross",
  body: "Tell us about your event, your audience and what you want them to leave with. Mary from Ross's team will come back to you within two working days.",
  thanks: {
    title: "Thank you",
    body: "Your enquiry is with Mary. She'll come back to you within two working days.",
  },
};

/** What the enquiry is for. Shown in the form and in the email Mary gets. */
export const enquiryTypes = ["Keynote", "Workshop", "Executive briefing", "Podcast", "Something else"] as const;

/** Field limits, shared by the form and the API so both check the same thing. */
export const limits = { short: 120, message: 3000 } as const;
