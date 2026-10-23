import { asset } from "@rosspower/ui/lib/asset";

/** The /bio page. Final copy from the build pack, "Section copy: 02. Meet Ross". */
export const bio = {
  meta: {
    title: "About Ross Power | AI speaker, educator and founder of AI Powered",
    description:
      "Ross Power is an AI speaker and educator who makes AI simple. Founder of AI Powered, he has trained 130+ founders on Claude and speaks from Bali to London.",
  },
  eyebrow: "bio",
  portrait: { src: asset("images/ross/portrait.jpg"), alt: "Black and white portrait of Ross Power" },
  // Ecademy was built by Ross's parents, never by Ross. The education company stays unnamed.
  paragraphs: [
    "Ross Power is the founder of AI Powered, an AI speaker and educator who makes AI simple for the people who have been told it isn't for them.",
    "He grew up at the events of Ecademy, one of the first social networks, which his parents built in 1998, so he has watched a few waves of tech hype from the inside. At Accenture he ran more than 100 tours and corporate events at the London Innovation Studio, showing emerging technology to over 60 organisations, most of them FTSE 100 leadership teams. He went on to lead product and engineering as a senior product manager at cheqd for more than three years, and was head of product at a publicly listed education company.",
    "Today, from Bali, Ross runs AI Powered's programmes, events and solutions. More than 130 founders have been through Ross Power's Claude Programme, and nearly 1,000 people came through his events and programmes in the year to June 2026.",
  ],
  shortBios: {
    eyebrow: "for event organisers",
    intro: "Copy a short bio for your programme, or download both with Ross's portrait.",
    items: [
      {
        label: "25 words",
        text: "Ross Power is the founder of AI Powered, an AI speaker and educator who makes AI simple for founders, teams and leaders, from Bali to London.",
      },
      {
        label: "50 words",
        text: "Ross Power is the founder of AI Powered and an AI speaker and educator who makes complex ideas simple. He grew up around Ecademy, one of the first social networks, worked at Accenture's London Innovation Studio, and has since trained 130+ founders on Claude. He speaks to keynote, workshop and podcast audiences worldwide.",
      },
    ],
  },
};
