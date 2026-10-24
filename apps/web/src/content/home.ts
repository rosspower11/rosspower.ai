import { asset, video } from "@rosspower/ui/lib/asset";

/** The homepage hero: Ross's headline over the event video (like the aipowered.xyz hero). */
/** The homepage hero, as on Andi's board: the Ross Power logo over the event video, in a rounded card. */
export const hero = {
  /** The H1's text (the logo shows it). */
  name: "Ross Power",
  /** The aipowered.xyz hero video (Ross at his events), re-encoded muted at 1600px for this site. */
  video: {
    src: video("videos/hero/hero-home.mp4"),
    poster: asset("images/hero/hero-home-poster.jpg"),
  },
};

/** Ross's line, the band after the ticker (from Andi's board). */
export const rossLine = {
  quote: "“The only limitation is your imagination.”",
  signature: "ross power",
};

/** The previous hero (components/home/HeroQuote.tsx), kept so it can come back. */
export const heroQuote = {
  eyebrow: "Founder · Speaker · Educator",
  /** The H1, in two lines; the second takes the italic accent. */
  headline: ["The only limitation", "is your imagination."],
  video: {
    src: video("videos/hero/hero-home.mp4"),
    poster: asset("images/hero/hero-home-poster.jpg"),
  },
  secondaryCta: { label: "See the talks", href: "/#talks" },
};

/** The previous hero (components/home/HeroSpotlight.tsx), kept so it can come back. */
export const heroSpotlight = {
  label: "Founder · Speaker · Educator",
  /** The H1, and the only all-caps text on the site. */
  name: "ROSS POWER",
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
  photo: { src: asset("images/ross/dsc00011.jpg"), alt: "Ross presenting to a seated room in Bali" },
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
      { src: asset("images/events/event-02.jpg"), alt: "Ross on stage with a microphone, pointing to the room" },
      { src: asset("images/events/sam00290.jpg"), alt: "Ross speaking to a room" },
    ],
  },
  {
    length: "90 min – ½ day",
    title: "Workshop",
    body: "Your team opens their laptops and builds something real with Ross, leaving with skills they can use the same day.",
    photos: [
      { src: asset("images/events/sam00373.jpg"), alt: "Ross running a workshop for a full room of laptops" },
      { src: asset("images/ross/dsc00028.jpg"), alt: "Ross presenting beside a projector screen" },
    ],
  },
  {
    length: "Q&A",
    title: "Fireside or panel",
    body: "Candid, practical talk on where AI actually helps. Ross hosts, moderates or joins the panel, minus the hype and jargon.",
    photos: [
      { src: asset("images/events/sam00104.jpg"), alt: "Ross talking with a group in front of the room" },
      { src: asset("images/events/event-09.jpg"), alt: "Ross walking the room during a session in a bamboo hall" },
    ],
  },
];

/** "Ready to have a chat?": copy from the build pack, "Section copy: 04. Talks and Podcast". */
export const talksIntro = {
  eyebrow: "Talks",
  body: "On your stage, on your panel or on your podcast. Pick the conversation your audience needs and Ross will shape it around them.",
};

export type Talk = {
  slug: string;
  kind: string;
  title: string;
  /** The words set in Instrument Serif italic in the pop-out title. */
  accent: string;
  /** How long it runs, shown in the pop-out's pill. */
  length: string;
  body: string;
  /** "How the talk runs" and "the room walks away with" (Andi's build guide, step 09). */
  runs?: string[];
  walksAway?: string;
};

/**
 * The talks, in this order (keynotes first). Each row opens its pop-out; "book this talk" there
 * goes to /contact?talk=<slug>, which picks the talk's kind and names the talk in the message.
 */
export const talks: Talk[] = [
  {
    slug: "three-intelligences",
    length: "20 to 60 min",
    kind: "Keynote",
    title: "Three Intelligences: human, artificial and divine",
    accent: "Intelligences",
    body: "AI gives us back time, and the real question is what we do with it. Your audience leaves with a simple way to work backwards from the outcome they want, and a clear order to put things in: peace, then people, then tools.",
    runs: [
      "Human, artificial and divine intelligence",
      "What AI gives back: time",
      "Working backwards from the outcome you want",
      "The order: peace, then people, then tools",
    ],
    walksAway: "A simple way to decide what to do with the time AI gives back.",
  },
  {
    slug: "humans-decide",
    length: "20 to 60 min",
    kind: "Keynote",
    title: "The Humans Decide",
    accent: "Decide",
    body: "Organisations buy the AI tools long before anyone works out how their teams will use them. Leaders leave knowing why adoption starts with people, and how to close that gap in their own teams.",
    runs: [
      "Why organisations buy AI tools before they know how teams will use them",
      "What adoption looks like when it starts with people",
      "Where the gap shows up in real teams",
      "The first three moves for a leadership team",
    ],
    walksAway: "A people-first plan for AI adoption they can start this quarter.",
  },
  {
    slug: "imagination",
    length: "20 to 60 min",
    kind: "Keynote",
    title: "The Only Limitation Is Your Imagination",
    accent: "Your Imagination",
    body: "With AI, what you can build is no longer limited by your skills, your budget or your team's size. Your audience leaves seeing what is now possible for them, and with the confidence to start on the idea they've been putting off.",
    runs: [
      "What one person can now build in a week that used to take a team",
      "Real examples from founders Ross has trained",
      "Where the limits are now: taste, focus and the questions you ask",
      "One thing to try on Monday",
    ],
    walksAway: "A new sense of what is possible for them, and one concrete first step.",
  },
  {
    slug: "context",
    length: "20 to 60 min",
    kind: "Executive briefing",
    title: "Context: what the human brain can teach us about AI",
    accent: "Context",
    body: "The brain is a context machine, and most teams build their AI on sand. Your room leaves with the foundations of using AI well, explained in plain English.",
    runs: [
      "The brain as a context machine",
      "Why most teams build their AI on sand",
      "The foundations of using AI well, in plain English",
      "What to set up first",
    ],
    walksAway: "The foundations of using AI well, explained so non-technical people can act on them.",
  },
  {
    slug: "chat-to-command",
    length: "90 min to half a day",
    kind: "Workshop",
    title: "From Chat to Command",
    accent: "Command",
    body: "The six levels of working with AI, from Chat to Command, with live builds the room follows along with. Everyone leaves with a personal operating system they can use the next day.",
  },
];

/** "Past speeches": copy from the build pack, "Section copy: 05. Past Speeches". Only these three events. */
export const pastEvents = {
  eyebrow: "Past events",
  body: "The rooms Ross has already filled, from London to Bali.",
};

// HR APAC uses its own keynote photo. TODO(ross): pe-london.jpg (AI for Private Equity) isn't in Drive yet,
// so London shows a stand-in photo from a Bali workshop. Productize uses a Productize Yourself event photo.
export const events = [
  {
    title: "HR APAC Forum",
    role: "Keynote, The four secrets of an AI-ready team",
    meta: "Bali, September 2026",
    src: asset("images/events/hr-apac-forum.jpg"),
    alt: "Ross giving his keynote at HR APAC Forum in Bali",
  },
  {
    title: "AI for Private Equity",
    role: "Host, keynote and panel moderator",
    meta: "London, June 2026",
    src: asset("images/events/sam00408.jpg"),
    alt: "Ross hosting AI for Private Equity in London",
  },
  {
    title: "Productize Yourself tour",
    role: "Four events, 200+ people in three weeks",
    meta: "Bali, early 2026",
    src: asset("images/events/event-02.jpg"),
    alt: "A packed room at the Productize Yourself tour in Bali",
  },
];

/** Chats: Ross as a podcast guest (Andi's build guide, step 10). */
export const chats = {
  label: "hosting a podcast?",
  body: "Practical AI your listeners can use the same day, founder stories from Bali to London, and real numbers from the rooms he runs. These are the conversations Ross loves having.",
  cta: { label: "book ross for your podcast", href: "/contact?type=podcast" },
  topics: [
    "AI and ADHD: using AI to work with the way your brain works",
    "Growing up at Ecademy, the network his parents built in 1998, and what it taught him about tech hype",
    "Starting again at 30: from product roles to an AI education business in Bali",
    "Why people who don't code may get the most out of AI",
    "Taste: the one skill AI can't do for you",
    "Keeping teams human while AI takes on more of the work",
  ],
};

/** The ticker under the hero (Andi's build guide, step 05), repeated to fill the loop. */
export const ticker = ["making ai simple", "founder of ai powered", "speaker", "educator"];

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
      image: { src: asset("images/events/sam00373.jpg"), alt: "Ross running a workshop for a full room of laptops" },
    },
    {
      title: "Solutions",
      body: "built with you",
      desc: "From an AI audit and strategy to a full AI-powered business or team operating system, all set up in your name and yours to keep.",
      href: "https://aipowered.xyz/",
      image: { src: asset("images/ross/dsc00028.jpg"), alt: "Ross presenting beside a projector screen" },
    },
    {
      title: "Events",
      body: "where it all comes alive",
      desc: "Live AI workshops and community sessions in Bali and online, where people build together in the room.",
      href: "https://aipowered.xyz/events",
      image: { src: asset("images/events/event-09.jpg"), alt: "Ross walking the room during a session in a bamboo hall" },
    },
  ],
  closing: "AI-powered, not AI-replaced.",
};

/**
 * Student quotes from AI Powered case studies (aipowered-website src/lib/page-content/stories.ts),
 * with the portraits used there. Quotes are verbatim; a leading "…" marks the ones that start mid-sentence.
 */
// TODO(ross): confirm these quotes and photos can be used on rosspower.ai as well as aipowered.xyz.
export const quotes = {
  eyebrow: "Success stories",
  intro: "Founders, coaches and consultants who learned AI with Ross, in their own words.",
  items: [
    {
      quote: "…he's very good at making AI accessible.",
      name: "Ashley",
      role: "Executive coach, Ashley Blackmore Coaching",
      photo: asset("images/stories/ashley.jpg"),
    },
    {
      quote: "I feel like I have a whole team behind me.",
      name: "Doris",
      role: "1:1 coach",
      photo: asset("images/stories/doris.jpg"),
    },
    {
      quote: "Previously, we would ask somebody to do that for us. Now we can actually do it ourselves.",
      name: "Daniel",
      role: "Business owner",
      photo: asset("images/stories/daniel.jpg"),
    },
    {
      quote: "…it's something that I wasn't expecting to be able to deliver before the cohort.",
      name: "Charlie",
      role: "Climate consultant",
      photo: asset("images/stories/charlie.jpg"),
    },
    {
      quote: "…it's fundamentally changed how I run my business.",
      name: "Eliot",
      role: "Co-founder, Maximy",
      photo: asset("images/stories/eliot.jpg"),
    },
    {
      quote: "…can see that I can do a lot of stuff that I thought I had to outsource to people…",
      name: "Simon",
      role: "Marketing and PR professional",
      photo: asset("images/stories/simon.jpg"),
    },
    {
      quote: "I didn't need to add anything to it or hire anybody else to like patch it up.",
      name: "James",
      role: "Sports apparel consultant",
      photo: asset("images/stories/james.jpg"),
    },
    {
      quote: "…it definitely brought me up to speed. So I feel so much more confident… in the working world.",
      name: "Jamie",
      role: "Connection facilitator",
      photo: asset("images/stories/jamie.jpg"),
    },
    {
      quote: "I was attending his cohort for AI and I created all my business.",
      name: "Miri",
      role: "Programme participant",
      photo: asset("images/stories/miri.jpg"),
    },
  ],
};

