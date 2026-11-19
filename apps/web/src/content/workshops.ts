import { asset } from "@rosspower/ui/lib/asset";

/** The /workshops page. Copy from the speaking and workshops landing pages brief (PR #4). */
export const workshopsPage = {
  meta: {
    title: "Hands-on AI workshops for teams | Ross Power",
    description:
      "Explore Ross Power's hands-on AI workshop format for teams and leaders, including From Chat to Command. Enquire about a workshop for your team.",
  },
  eyebrow: "workshops",
  intro:
    "Your team opens their laptops and builds something real with Ross, leaving with skills they can use the same day.",
  photo: { src: asset("images/events/sam00373.jpg"), alt: "Ross running a workshop for a full room of laptops" },
  format: {
    length: "90 min to half a day",
    photo: { src: asset("images/ross/dsc00028.jpg"), alt: "Ross presenting beside a projector screen" },
  },
  theme: {
    tag: "workshop theme",
    title: "From Chat to Command",
    accent: "Command",
    body: "The six levels of working with AI, from Chat to Command, with live builds the room follows along with.",
    walksAway: "A personal operating system they can use the next day.",
  },
};
