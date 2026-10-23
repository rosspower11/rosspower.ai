import { asset, video } from "@rosspower/ui/lib/asset";

/**
 * Homepage copy for v2, word for word from Andi's build guide (claude.ai/artifact/FnR5PDiRR3tmDjK8V39yaP).
 * Steps are noted on each block. Photos are the ones already in R2; where the guide names a new file
 * (speaker-wide.jpg, speaker-tile-*.jpg, productize-yourself.jpg, pe-london.jpg), the stand-in is marked.
 */

/** A heading with one part set in Instrument Serif italic. */
export type Accented = { plain: string; accent: string; accentFirst?: boolean };

/** Step 03: ROSS POWER on the hero video. */
export const hero = {
  name: "ROSS POWER",
  /** The aipowered.xyz hero video, re-encoded muted at 1600px, from assets.rosspower.ai. */
  video: {
    src: video("videos/hero/hero-home.mp4"),
    poster: asset("images/hero/hero-home-poster.jpg"),
  },
  secondaryCta: { label: "see the talks", href: "#talks" },
};

/** The previous hero (components/home/HeroSpotlight.tsx), kept so it can come back. Not on the page. */
export const heroSpotlight = {
  label: "Founder · Speaker · Educator",
  name: "ROSS POWER",
  scrollCue: "Scroll to see more",
};

/** Step 05: the ticker items, repeated to fill the loop. */
export const ticker = ["making ai simple", "founder of ai powered", "speaker", "educator"];

/** Step 05: Ross's line. */
export const rossLine = {
  quote: "“The only limitation is your imagination.”",
  signature: "ross power",
};

/** Step 06: meet your speaker. */
export const meet = {
  heading: { plain: "meet your speaker,", accent: "ross power" } satisfies Accented,
  body: "Raised in an entrepreneurial family and always the one asking the questions, Ross is the founder of AI Powered, an educator and a speaker. He takes complex ideas and makes them simple. Right now that means AI, for keynote crowds, boardrooms and podcast audiences from Bali to London.",
  photo: { src: asset("images/events/event-02.jpg"), alt: "Ross Power on stage, pointing at the screen" },
  bio: { label: "read ross's bio", href: "/bio" },
  watch: { label: "watch ross speak", href: "#speaker" },
};

/** Step 06: the four stat tiles, counted up on scroll. TODO(ross): confirm each figure before launch. */
export const stats = [
  { value: 100, prefix: "", suffix: "K+", label: "followers", line: "people following along across every platform", tone: "wash" },
  { value: 1000, prefix: "~", suffix: "", label: "people in the room", line: "through his events and programmes in the past year", tone: "sage" },
  { value: 130, prefix: "", suffix: "+", label: "founders trained", line: "now putting AI to work in their own businesses", tone: "ink" },
  { value: 120, prefix: "", suffix: "+", label: "hours", line: "of live AI education since January 2025", tone: "sand" },
] as const;

/**
 * Step 07: the speaker section. Stand-ins until Andi's photos are in R2:
 * speaker-wide.jpg → hr-apac-forum.jpg; speaker-tile-1/2/3.jpg → sam00290, profile/v2/cover, dsc00028.
 */
export const speaker = {
  body: "Keynotes for founders, teams and leaders, from HR APAC Forum in Bali to AI for Private Equity in London.",
  wide: { src: asset("images/events/hr-apac-forum.jpg"), alt: "Ross on stage at HR APAC Forum in Bali" },
  tiles: [
    { src: asset("images/events/sam00290.jpg"), alt: "Ross speaking to the room" },
    { src: asset("images/profile/v2/cover.jpg"), alt: "Ross speaking with a microphone" },
    { src: asset("images/ross/dsc00028.jpg"), alt: "Ross presenting beside the screen" },
  ],
};

/** Step 08: talks intro. */
export const talksIntro = {
  heading: { plain: "talks ross is", accent: "ready to give" } satisfies Accented,
  body: "Keynotes for conferences and leadership teams. Every talk is shaped to the room.",
};

export type Talk = {
  slug: string;
  tag: string;
  title: string;
  /** The words set in italic in the pop-out title. */
  accent: string;
  card: string;
  intro: string;
  runs: string[];
  walksAway: string;
};

/** Steps 08 and 09: the four keynotes, in this order, with their pop-outs. Slugs feed /contact?talk=. */
export const talks: Talk[] = [
  {
    slug: "imagination",
    tag: "signature keynote",
    title: "The Only Limitation Is Your Imagination",
    accent: "Your Imagination",
    card: "With AI, what you can build is no longer limited by your skills, your budget or your team's size.",
    intro:
      "With AI, what you can build is no longer limited by your skills, your budget or your team's size. Your audience leaves seeing what is now possible for them, and with the confidence to start on the idea they've been putting off.",
    runs: [
      "What one person can now build in a week that used to take a team",
      "Real examples from founders Ross has trained",
      "Where the limits are now: taste, focus and the questions you ask",
      "One thing to try on Monday",
    ],
    walksAway: "A new sense of what is possible for them, and one concrete first step.",
  },
  {
    slug: "humans-decide",
    tag: "keynote",
    title: "The Humans Decide",
    accent: "Decide",
    card: "Organisations buy the AI tools long before anyone works out how their teams will use them.",
    intro:
      "Organisations buy the AI tools long before anyone works out how their teams will use them. Leaders leave knowing why adoption starts with people, and how to close that gap in their own teams.",
    runs: [
      "Why organisations buy AI tools before they know how teams will use them",
      "What adoption looks like when it starts with people",
      "Where the gap shows up in real teams",
      "The first three moves for a leadership team",
    ],
    walksAway: "A people-first plan for AI adoption they can start this quarter.",
  },
  {
    slug: "three-intelligences",
    tag: "keynote",
    title: "Three Intelligences",
    accent: "Intelligences",
    card: "Human, artificial and divine. AI gives us back time, and the real question is what we do with it.",
    intro:
      "AI gives us back time, and the real question is what we do with it. Your audience leaves with a simple way to work backwards from the outcome they want, and a clear order to put things in: peace, then people, then tools.",
    runs: [
      "Human, artificial and divine intelligence",
      "What AI gives back: time",
      "Working backwards from the outcome you want",
      "The order: peace, then people, then tools",
    ],
    walksAway: "A simple way to decide what to do with the time AI gives back.",
  },
  {
    slug: "context",
    tag: "keynote",
    title: "Context",
    accent: "Context",
    card: "What the human brain can teach us about AI, explained in plain English.",
    intro:
      "The brain is a context machine, and most teams build their AI on sand. Your room leaves with the foundations of using AI well, explained in plain English.",
    runs: [
      "The brain as a context machine",
      "Why most teams build their AI on sand",
      "The foundations of using AI well, in plain English",
      "What to set up first",
    ],
    walksAway: "The foundations of using AI well, explained so non-technical people can act on them.",
  },
];

/** Every keynote runs 20 to 60 minutes (the pop-out pill). */
export const talkLength = "20 to 60 min";

/** Step 10: chats, Ross as a podcast guest. */
export const chats = {
  label: "hosting a podcast?",
  heading: { plain: "ready to", accent: "have a chat?" } satisfies Accented,
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
  clips:
    "After the episode, Ross cuts clips within seven days and shares them with 100K followers across his platforms and his newsletter, AI Explaind.",
};

/** Step 11: proof. Quotes from AI Powered case studies (aipowered-website stories.ts), verbatim. */
export const proof = {
  number: "130+",
  line: "founders trained by Ross, in their own words.",
  quotes: [
    { quote: "“I feel like I have a whole team behind me.”", name: "Doris, 1:1 coach" },
    { quote: "“…he's very good at making AI accessible.”", name: "Ashley, executive coach" },
    {
      quote: "“Previously, we would ask somebody to do that for us. Now we can actually do it ourselves.”",
      name: "Daniel, business owner",
    },
  ],
};

/**
 * Step 12: past speeches. London has no photo yet (pe-london.jpg comes from Andi), so it shows a sage block.
 * Productize uses event-02.jpg (a Productize Yourself photo) until productize-yourself.jpg is in R2.
 */
export const pastSpeeches = {
  heading: { plain: "past", accent: "speeches" } satisfies Accented,
  body: "The rooms Ross has already filled, from London to Bali.",
  events: [
    {
      title: "HR APAC Forum",
      role: "Keynote, The four secrets of an AI-ready team",
      meta: "Bali, September 2026",
      photo: { src: asset("images/events/hr-apac-forum.jpg"), alt: "Ross giving his keynote at HR APAC Forum in Bali" },
    },
    {
      title: "AI for Private Equity",
      role: "Host and keynote speaker",
      meta: "London, June 2026",
      photo: null,
    },
    {
      title: "Productize Yourself tour",
      role: "Four events, 200+ people in three weeks",
      meta: "Bali, early 2026",
      photo: {
        src: asset("images/events/event-02.jpg"),
        alt: "Ross on stage at the Productize Yourself tour in Seminyak",
      },
    },
  ],
};

/** Step 13: work with ross, the one call to action that sends people to AI Powered. */
export const work = {
  pill: "work with ross",
  heading: { plain: "ai, explained", accent: "for non-techies." } satisfies Accented,
  line: "AI-powered, not AI-replaced.",
  cta: { label: "work with ross", href: "https://aipowered.xyz" },
};
