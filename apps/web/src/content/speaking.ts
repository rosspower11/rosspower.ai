import { asset } from "@rosspower/ui/lib/asset";

/** The /speaking page. Copy from the speaking and workshops landing pages brief (PR #4). */
export const speakingPage = {
  meta: {
    title: "AI keynote speaker for corporate events | Ross Power",
    description:
      "Explore Ross Power's AI keynotes, executive briefing and panels for founders, teams and leaders. See talk themes and enquire about your event.",
  },
  eyebrow: "speaking",
  intro:
    "Keynotes and panels for founders, teams and leaders, from HR APAC Forum in Bali to AI for Private Equity in London.",
  body: "On your stage, on your panel or on your podcast. Pick the conversation your audience needs and Ross will shape it around them.",
  photo: { src: asset("images/events/event-02.jpg"), alt: "Ross on stage with a microphone, pointing to the room" },
  /** The two speaking formats; the workshop format has its own page. */
  formats: [
    {
      length: "20 to 60 min",
      title: "Keynote",
      body: "A story-led talk that makes the room feel the shift, shaped around your audience and ending with a clear first step.",
    },
    {
      length: "Q&A",
      title: "Fireside or panel",
      body: "Candid, practical talk on where AI actually helps. Ross hosts, moderates or joins the panel, minus the hype and jargon.",
    },
  ],
};
