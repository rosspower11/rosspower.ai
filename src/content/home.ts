export const hero = {
  label: "Founder · Speaker · Educator",
  name: "Ross Power",
  scrollCue: "Scroll to see more",
};

// TODO(ross): confirm each figure and its source before launch.
export const stats = [
  { value: 100, prefix: "", suffix: "K+", label: "Followers", desc: "following along across every platform" },
  { value: 1000, prefix: "~", suffix: "", label: "People in the room", desc: "through his events and programmes in the past year" },
  { value: 130, prefix: "", suffix: "+", label: "Founders trained", desc: "now putting AI to work in their own businesses" },
  { value: 120, prefix: "", suffix: "+", label: "Hours live", desc: "of live AI education since January 2025" },
];

export const about = {
  bio: [
    "Raised in an entrepreneurial family and always the one asking the questions, Ross is the founder of AI Powered, an educator and a speaker.",
    "He takes complex ideas and makes them simple. Right now that means AI, for keynote crowds, workshop rooms and podcast audiences from Bali to London.",
  ],
  photo: { src: "/images/ross/dsc00011.jpg", alt: "Ross presenting to a seated room in Bali" },
};

export const speaking = {
  eyebrow: "Speaking",
  intro:
    "Keynotes, workshops and panels for founders, teams and leaders, from HR APAC Forum in Bali to AI for Private Equity in London.",
};

/** Formats carried over from the previous site. */
// TODO(ross): approve the longer format descriptions.
export const formats = [
  {
    length: "20–60 min",
    title: "Keynote",
    body: "A story-led talk that makes the room feel the shift, shaped around your audience and ending with a clear first step.",
    photos: [
      { src: "/images/events/event-02.jpg", alt: "Ross on stage with a microphone, pointing to the room" },
      { src: "/images/events/sam00290.jpg", alt: "Ross speaking to a room" },
    ],
  },
  {
    length: "90 min – ½ day",
    title: "Workshop",
    body: "Your team opens their laptops and builds something real with Ross, leaving with skills they can use the same day.",
    photos: [
      { src: "/images/events/sam00373.jpg", alt: "Ross running a workshop for a full room of laptops" },
      { src: "/images/ross/dsc00028.jpg", alt: "Ross presenting beside a projector screen" },
    ],
  },
  {
    length: "Q&A",
    title: "Fireside or panel",
    body: "Candid, practical talk on where AI actually helps. Ross hosts, moderates or joins the panel, minus the hype and jargon.",
    photos: [
      { src: "/images/events/sam00104.jpg", alt: "Ross talking with a group in front of the room" },
      { src: "/images/events/event-09.jpg", alt: "Ross walking the room during a session in a bamboo hall" },
    ],
  },
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

export const pastEvents = {
  eyebrow: "Past events",
  intro: "A few of the rooms from the past year, from HR leaders in Bali to private equity in London.",
};

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
  body: "Practical AI your listeners can use the same day, founder stories from Bali to London, and real numbers from the rooms he runs.",
  // TODO(ross): add five to seven podcast angles from the podcast playbook.
};

export const aiPowered = {
  eyebrow: "Ross's company",
  body: "AI Powered helps people and organisations adapt to the changing world of work, at the intersection of AI, work and human connection.",
  /** Descriptions and links from aipowered.xyz (public/llms.txt in aipowered-website). */
  pillars: [
    {
      title: "Programmes",
      body: "that teach you",
      desc: "Live AI programmes for founders and teams, from the six-week Claude Programme to AI Future Leaders for organisations of 200+.",
      href: "https://aipowered.xyz/founders/claude-programme",
      image: { src: "/images/events/sam00373.jpg", alt: "Ross running a workshop for a full room of laptops" },
    },
    {
      title: "Solutions",
      body: "built with you",
      desc: "From an AI audit and strategy to a full AI-powered business or team operating system, all set up in your name and yours to keep.",
      href: "https://aipowered.xyz/",
      image: { src: "/images/ross/dsc00028.jpg", alt: "Ross presenting beside a projector screen" },
    },
    {
      title: "Events",
      body: "where it all comes alive",
      desc: "Live AI workshops and community sessions in Bali and online, where people build together in the room.",
      href: "https://aipowered.xyz/events",
      image: { src: "/images/events/event-09.jpg", alt: "Ross walking the room during a session in a bamboo hall" },
    },
  ],
  closing: "AI-powered, not AI-replaced.",
};

/**
 * Student quotes from AI Powered case studies (aipowered-website src/lib/page-content/stories.ts),
 * with the portraits used there. Quotes are verbatim; a leading "…" marks the ones that start mid-sentence.
 */
// TODO(ross): approve the short outcome lines, condensed from each case study's outcome line,
// and confirm these quotes and photos can be used on rosspower.ai as well as aipowered.xyz.
export const quotes = {
  eyebrow: "Success stories",
  intro: "Founders, coaches and consultants who learned AI with Ross, in their own words.",
  items: [
    {
      quote: "…he's very good at making AI accessible.",
      name: "Ashley",
      role: "Executive coach, Ashley Blackmore Coaching",
      outcome: "Got AI to sound like him",
      photo: "/images/stories/ashley.jpg",
    },
    {
      quote: "I feel like I have a whole team behind me.",
      name: "Doris",
      role: "1:1 coach",
      outcome: "Built her coaching site and offer",
      photo: "/images/stories/doris.jpg",
    },
    {
      quote: "Previously, we would ask somebody to do that for us. Now we can actually do it ourselves.",
      name: "Daniel",
      role: "Business owner",
      outcome: "Rebuilt his company website himself",
      photo: "/images/stories/daniel.jpg",
    },
    {
      quote: "…it's something that I wasn't expecting to be able to deliver before the cohort.",
      name: "Charlie",
      role: "Climate consultant",
      outcome: "Shipped a client portal with Claude",
      photo: "/images/stories/charlie.jpg",
    },
    {
      quote: "…it's fundamentally changed how I run my business.",
      name: "Eliot",
      role: "Co-founder, Maximy",
      outcome: "Changed how he runs his business",
      photo: "/images/stories/eliot.jpg",
    },
    {
      quote: "…can see that I can do a lot of stuff that I thought I had to outsource to people…",
      name: "Simon",
      role: "Marketing and PR professional",
      outcome: "Built his own dashboard with Claude",
      photo: "/images/stories/simon.jpg",
    },
    {
      quote: "I didn't need to add anything to it or hire anybody else to like patch it up.",
      name: "James",
      role: "Sports apparel consultant",
      outcome: "Built his new business's website",
      photo: "/images/stories/james.jpg",
    },
    {
      quote: "…it definitely brought me up to speed. So I feel so much more confident… in the working world.",
      name: "Jamie",
      role: "Connection facilitator",
      outcome: "Builds client presentations with Claude",
      photo: "/images/stories/jamie.jpg",
    },
    {
      quote: "I was attending his cohort for AI and I created all my business.",
      name: "Miri",
      role: "Programme participant",
      outcome: "Built her whole business in the cohort",
      photo: "/images/stories/miri.jpg",
    },
  ],
};

export const book = {
  eyebrow: "Let's talk",
  body: "Pick a time and tell Ross about your event or your goals. He'll come back with how he can help.",
  /** Same "Discovery with Ross" calendar as aipowered-website (src/lib/cta.ts → DISCOVERY_BOOKING). */
  discovery: {
    url: "https://discovery.rosspower.ai/",
    calendarId: "x4yvy5HXZa2639CEmApS",
    iframeSrc: "https://links.aipowered.xyz/widget/booking/x4yvy5HXZa2639CEmApS",
    scriptSrc: "https://links.aipowered.xyz/js/form_embed.js",
  },
};
