import { asset } from "@rosspower/ui/lib/asset";

/** The homepage hero: Ross's headline over the event video (like the aipowered.xyz hero). */
export const hero = {
  eyebrow: "Founder · Speaker · Educator",
  /** The H1, in two lines; the second takes the italic accent. */
  headline: ["The only limitation", "is your imagination."],
  /** The aipowered.xyz hero video (Ross at his events), re-encoded muted at 1600px for this site. */
  video: {
    src: asset("videos/hero/hero-home.mp4"),
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

/** The talks, in this order (keynotes first). Every "book this talk" opens the enquiry form. */
export const talks = [
  {
    kind: "Keynote",
    title: "Three Intelligences: human, artificial and divine",
    body: "AI gives us back time, and the real question is what we do with it. Your audience leaves with a simple way to work backwards from the outcome they want, and a clear order to put things in: peace, then people, then tools.",
  },
  {
    kind: "Keynote",
    title: "The Humans Decide",
    body: "Organisations buy the AI tools long before anyone works out how their teams will use them. Leaders leave knowing why adoption starts with people, and how to close that gap in their own teams.",
  },
  {
    kind: "Keynote",
    title: "The Only Limitation Is Your Imagination",
    body: "With AI, what you can build is no longer limited by your skills, your budget or your team's size. Your audience leaves seeing what is now possible for them, and with the confidence to start on the idea they've been putting off.",
  },
  {
    kind: "Executive briefing",
    title: "Context: what the human brain can teach us about AI",
    body: "The brain is a context machine, and most teams build their AI on sand. Your room leaves with the foundations of using AI well, explained in plain English.",
  },
  {
    kind: "Workshop",
    title: "From Chat to Command",
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

export const podcast = {
  body: "Practical AI your listeners can use the same day, founder stories from Bali to London, and real numbers from the rooms he runs.",
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

