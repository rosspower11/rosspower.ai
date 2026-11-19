import { enquiryTypes } from "@rosspower/ui/content/contact";

/** The /contact page: the booking enquiry form every "Book Ross" button opens. */
export const contactPage = {
  meta: {
    title: "Book Ross Power | AI keynote speaker",
    description:
      "Book Ross Power for a keynote or a podcast. Tell us about your event and the team will come back to you.",
  },
  body: "Tell us about your event, your audience and what you want them to leave with. Mary from Ross's team will come back to you within two working days.",
  thanks: {
    title: "Thank you",
    body: "Your enquiry is with Mary. She'll come back to you within two working days.",
  },
};

/** rosspower.ai offers no workshops, so its form leaves Workshop out (links.rosspower.ai/book still offers it). */
export const websiteEnquiryTypes = enquiryTypes.filter((t) => t !== "Workshop");
