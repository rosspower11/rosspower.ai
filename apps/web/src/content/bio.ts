import { asset } from "@rosspower/ui/lib/asset";

/** The /about page (was /bio, which redirects here). Final copy from the build pack, "Section copy: 02. Meet Ross". */
export const bio = {
  meta: {
    title: "About Ross Power | AI speaker and founder of AI Powered",
    description:
      "Ross Power is an AI speaker and educator who makes AI simple. Founder of AI Powered, he has trained 130+ founders on Claude. Read his story.",
  },
  portrait: { src: asset("images/ross/portrait.jpg"), alt: "Black and white portrait of Ross Power" },
  // Ecademy was built by Ross's parents, never by Ross. The education company stays unnamed.
  paragraphs: [
    "Ross Power is the founder of AI Powered, an AI speaker and educator who makes AI simple for the people who have been told it isn't for them.",
    "He grew up at the events of Ecademy, one of the first social networks, which his parents built in 1998, so he has watched a few waves of tech hype from the inside. At Accenture he ran more than 100 tours and corporate events at the London Innovation Studio, showing emerging technology to over 60 organisations, most of them FTSE 100 leadership teams. He went on to lead product and engineering as a senior product manager at cheqd for more than three years, and was head of product at a publicly listed education company.",
    "Today, from Bali, Ross runs AI Powered's programmes, events and solutions. More than 130 founders have been through Ross Power's Claude Programme, and nearly 1,000 people came through his events and programmes in the year to June 2026.",
  ],
  shortBios: {
    intro: "Copy a short bio for your programme, or download both with Ross's portrait.",
    items: [
      {
        label: "25 words",
        text: "Ross Power is the founder of AI Powered, an AI speaker and educator who makes AI simple for founders, teams and leaders, from Bali to London.",
      },
      {
        label: "50 words",
        text: "Ross Power is the founder of AI Powered and an AI speaker and educator who makes complex ideas simple. He grew up around Ecademy, one of the first social networks, worked at Accenture's London Innovation Studio, and has since trained 130+ founders on Claude. He speaks to keynote and podcast audiences worldwide.",
      },
    ],
  },
};

/**
 * "My story": Ross's five chapters, in his own words. Copy and photos from the old aipowered.xyz/about page
 * (removed there on 4 Nov 2026). An array in `body` is a bulleted list.
 */
export const story = {
  heading: { plain: "My story,", accent: "in five chapters." },
  intro:
    "I won't make it an endless scroll of my whole life. Here are the five chapters that led to AI Powered, and what we're building today.",
  chapters: [
    {
      number: "01",
      title: "Childhood Bootcamp",
      body: [
        "My parents founded an internet business when I was 3, dedicated to serving service-based entrepreneurs during the dot-com boom. It reached 650,000 members before the internet and online community were really a \"thing.\"",
        "The business went on a wild rise and fall. It peaked at a valuation near $100 million, then crashed during the bust and the market downturns.",
        "I was there asking questions, networking, and learning from the incredible network of adults who helped sculpt my values, my beliefs, and our family.",
      ],
      photos: [
        { src: asset("images/about/chapter-1/img-2759.jpg"), alt: "Childhood Bootcamp, photo 1 of 5" },
        { src: asset("images/about/chapter-1/scr-20260730-jjye.jpg"), alt: "Childhood Bootcamp, photo 2 of 5" },
        { src: asset("images/about/chapter-1/scr-20260730-jklb.jpg"), alt: "Childhood Bootcamp, photo 3 of 5" },
        { src: asset("images/about/chapter-1/scr-20260730-jkpg.jpg"), alt: "Childhood Bootcamp, photo 4 of 5" },
        { src: asset("images/about/chapter-1/scr-20260730-jkvu.jpg"), alt: "Childhood Bootcamp, photo 5 of 5" },
      ],
    },
    {
      number: "02",
      title: "Corporate Training Ground",
      body: [
        "I started in the corporate world at Accenture, one of the largest management consulting firms in the world.",
        "I worked with big companies across telecoms, aerospace and defence, finance, capital markets, and energy and resources. I learnt the theory, the frameworks, and the best practices for product building from some of the best in class.",
        "I presented over 200 product and tech demos, workshops, and career talks to well over 1,000 people, and threw myself into everything I could. I also learnt the good and the bad of the corporate world, which shaped how I understand business today.",
      ],
      photos: [
        { src: asset("images/about/chapter-2/20190228-173600.jpg"), alt: "Corporate Training Ground, photo 1 of 4" },
        { src: asset("images/about/chapter-2/6.jpg"), alt: "Corporate Training Ground, photo 2 of 4" },
        { src: asset("images/about/chapter-2/img-20190304-wa0038.jpg"), alt: "Corporate Training Ground, photo 3 of 4" },
        { src: asset("images/about/chapter-2/img-20190304-wa0039.jpg"), alt: "Corporate Training Ground, photo 4 of 4" },
      ],
    },
    {
      number: "03",
      title: "Startup Arena",
      body: [
        "After leaving Accenture in 2020, I went solo, finding any odd gigs I could while beginning the freelance and digital nomad life.",
        "Through the network I've always been good at building, I found myself working across great blockchain and crypto startups, the expertise I'd built up since university. I had three incredible years with cheqd.io, a digital identity and blockchain company founded by Ankur Banerjee and Fraser Edwards, two brilliant minds I learnt a huge amount from.",
        "I spent five years in the startup, freelance, and entrepreneurial space, building complex tech products and leading teams. I've been in the trenches of tech startups and seen what works and what doesn't with product building. And all the while, I was turning myself into a productized offering: experimenting, trying, failing, and researching this world deeply.",
      ],
      photos: [
        { src: asset("images/about/chapter-3/img-0111.jpg"), alt: "Startup Arena, photo 1 of 5" },
        { src: asset("images/about/chapter-3/img-2739.jpg"), alt: "Startup Arena, photo 2 of 5" },
        { src: asset("images/about/chapter-3/img-4237.jpg"), alt: "Startup Arena, photo 3 of 5" },
        { src: asset("images/about/chapter-3/img-4801.jpg"), alt: "Startup Arena, photo 4 of 5" },
        { src: asset("images/about/chapter-3/img-7940.jpg"), alt: "Startup Arena, photo 5 of 5" },
      ],
    },
    {
      number: "04",
      title: "The Start of AI Powered",
      body: [
        "AI Powered came about in a winding and classic entrepreneur's journey.",
        "I saw an opportunity to productize my own knowledge and expertise as a product manager.",
        "At the time I was Head of Product for a NYSE-listed education company, a role that let me work remotely from anywhere and, as it turned out, taught me a huge amount about events and education.",
        "I was producing real events at scale, including a 700-person event headlined by Steven Bartlett, learning how to fill rooms, hold an audience, and create experiences people remember. The exact skills AI Powered would come to be built on.",
        "Alongside all of that, I started weaving AI into everything I did, and AI Powered began as my side gig. That was when I realised there was a real opportunity here.",
        "While doing that, I started running events in Bali. And when I looked at who was actually showing up, it wasn't corporate escapees. It was freelancers, founders, and creators. A very different audience.",
        "So I experimented. I created an event called \"Productize Yourself\" and it took off. Within a month I'd run four of them, with over 200 people coming through the door. The energy in those rooms was incredible. Watching people light up, engage, and respond right in front of me, that's when it clicked. There was something here.",
        "As a product manager, I could see the opportunity clearly: building AI-powered experiences and product journeys that help people transform themselves. That's exactly how AI Powered was born.",
      ],
      photos: [
        { src: asset("images/about/chapter-4/ross-bwork-1-img-0133.jpg"), alt: "The Start of AI Powered, photo 1 of 5" },
        { src: asset("images/about/chapter-4/ross-bwork-1-img-0190.jpg"), alt: "The Start of AI Powered, photo 2 of 5" },
        { src: asset("images/about/chapter-4/ross-bwork-2-img-0088.jpg"), alt: "The Start of AI Powered, photo 3 of 5" },
        { src: asset("images/about/chapter-4/ross-bwork-2-img-0099.jpg"), alt: "The Start of AI Powered, photo 4 of 5" },
        { src: asset("images/about/chapter-4/ross-bwork-2-img-1693.jpg"), alt: "The Start of AI Powered, photo 5 of 5" },
      ],
    },
    {
      number: "05",
      title: "AI Powered Today",
      body: [
        "From side project to all in.",
        "AI Powered officially started in January 2025. For that first year it stayed a side project I believed in, built around the edges of the day job. I experimented constantly: low-cost online programmes, live events, and various side projects, all to find what really fit.",
        "By January 2026, I'd seen enough. I went all in on AI Powered, and started scaling everything: the workshops, the in-person events, the mentoring, and the agency.",
        "The first four months tell the story better than I can:",
        ["Over 120 hours of live AI education delivered, both online and in person", "Nearly 300 people through the doors of my in-person events in Bali", "Two cohorts run in parallel", "A growing roster of private mentoring clients onboarded"],
        "And that brings us to now. AI Powered today is three things working together: the programmes that teach you, the solutions we build with you, and the events where it all comes alive. This is still the early chapters. I'm genuinely excited to keep building it, with you.",
      ],
      photos: [
        { src: asset("images/about/chapter-5/dsc02220.jpg"), alt: "AI Powered Today, photo 1 of 5" },
        { src: asset("images/about/chapter-5/dsc02257.jpg"), alt: "AI Powered Today, photo 2 of 5" },
        { src: asset("images/about/chapter-5/dsc02264.jpg"), alt: "AI Powered Today, photo 3 of 5" },
        { src: asset("images/about/chapter-5/sam00152.jpg"), alt: "AI Powered Today, photo 4 of 5" },
        { src: asset("images/about/chapter-5/sam00161.jpg"), alt: "AI Powered Today, photo 5 of 5" },
      ],
    },
  ],
};
