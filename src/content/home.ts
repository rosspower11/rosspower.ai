export const hero = {
  label: "Founder · Speaker · Educator",
  name: "Ross Power",
  introTitle: "Making AI simple, practical and human.",
  intro:
    "Keynotes, workshops and mentoring that help rooms full of people stop feeling behind and start actually building with AI.",
};

// TODO(ross): confirm each figure and its source before launch.
export const stats = [
  { value: 100, prefix: "", suffix: "K+", label: "Followers", desc: "following along across every platform" },
  { value: 1000, prefix: "~", suffix: "", label: "People in the room", desc: "through his events and programmes in the past year" },
  { value: 130, prefix: "", suffix: "+", label: "Founders trained", desc: "now putting AI to work in their own businesses" },
  { value: 120, prefix: "", suffix: "+", label: "Hours live", desc: "of live AI education since January 2025" },
];

export const about = {
  eyebrow: "Who's Ross",
  bio: [
    "Raised in an entrepreneurial family and always the one asking the questions, Ross is the founder of AI Powered, an educator and a speaker.",
    "He takes complex ideas and makes them simple. Right now that means AI, for keynote crowds, workshop rooms and podcast audiences from Bali to London.",
  ],
  quote: "Confidence comes from doing.",
  photo: { src: "/images/ross/dsc00011.jpg", alt: "Ross presenting to a seated room in Bali" },
};

export const speaking = {
  eyebrow: "Speaking",
  intro:
    "Keynotes, workshops and panels for founders, teams and leaders, from HR APAC Forum in Bali to AI for Private Equity in London.",
};

/** Formats carried over from the previous site. */
export const formats = [
  {
    length: "20–60 min",
    title: "Keynote",
    tag: "Main stage · story-led",
    body: "A talk that makes the room feel the shift and leaves them with a clear first step.",
  },
  {
    length: "90 min – ½ day",
    title: "Workshop",
    tag: "Hands-on · live builds",
    body: "Your people open their laptops and ship something real, with Ross guiding them.",
  },
  {
    length: "Q&A",
    title: "Fireside or panel",
    tag: "Moderated conversation",
    body: "Candid, practical talk on where AI actually helps, minus the hype and jargon.",
  },
];

export const gallery = [
  { src: "/images/events/sam00373.jpg", alt: "Ross running a workshop for a full room of laptops" },
  { src: "/images/events/event-02.jpg", alt: "Ross on stage with a microphone, pointing to the room" },
  { src: "/images/events/sam00104.jpg", alt: "Ross teaching in front of a workshop group" },
  { src: "/images/events/event-09.jpg", alt: "Ross walking the room during a session in a bamboo hall" },
  { src: "/images/ross/dsc00028.jpg", alt: "Ross presenting beside a projector screen" },
];

/** Talk topics carried over from the previous site. */
export const talks = [
  {
    kind: "Keynote",
    title: "Everyone will learn AI eventually.",
    body: "The advantage goes to those who learn it first. A high-energy keynote on why this moment is different, and how to become a participant, not a witness.",
  },
  {
    kind: "Keynote",
    title: "Confidence comes from doing.",
    body: "Most people are stuck asking questions and getting answers. Ross walks audiences through the six levels of AI fluency, from Chat to Command.",
  },
  {
    kind: "Talk",
    title: "The AI-powered operator.",
    body: "How founders and teams reclaim hours every week: leads, content, business materials and admin, run through one operating system instead of a dozen tabs.",
  },
  {
    kind: "Workshop",
    title: "From overwhelmed to AI-powered.",
    body: "A hands-on workshop for your team. We build something real together, live, so people leave with working skills and the belief they can keep evolving.",
  },
];

// TODO(ross): swap each photo for one taken at that event.
export const events = [
  {
    title: "HR APAC Forum",
    role: "Keynote",
    meta: "Bali · September 2026",
    src: "/images/events/sam00290.jpg",
    alt: "Ross speaking to a room",
  },
  {
    title: "AI for Private Equity",
    role: "Host, keynote and panel moderator",
    meta: "London · June 2026",
    src: "/images/events/sam00408.jpg",
    alt: "Ross presenting to a full room",
  },
  {
    title: "Productize Yourself tour",
    role: "Four events, 200+ people in three weeks",
    meta: "Bali · early 2026",
    src: "/images/events/event-02.jpg",
    alt: "Ross on stage at a Productize Yourself event",
  },
];

export const podcast = {
  eyebrow: "Hosting a podcast?",
  body: "Practical AI your listeners can use the same day, founder stories from Bali to London, and real numbers from the rooms he runs.",
  // TODO(ross): add five to seven podcast angles from the podcast playbook.
};

export const aiPowered = {
  eyebrow: "Ross's company",
  body: "AI Powered helps people and organisations adapt to the changing world of work, at the intersection of AI, work and human connection.",
  pillars: [
    { title: "Programmes", body: "that teach you" },
    { title: "Solutions", body: "built with you" },
    { title: "Events", body: "where it all comes alive" },
  ],
  closing: "AI-powered, not AI-replaced.",
};

export const book = {
  eyebrow: "Let's talk",
  body: "Pick a time and tell Ross about your event or your goals. He'll come back with how he can help.",
  calLink: "rosspower/book-ross-to-speak-at-your-event",
  calNamespace: "book-ross-to-speak-at-your-event",
};
