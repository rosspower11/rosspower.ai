import { bio } from "@/content/bio";
import { contactPage } from "@/content/contact";
import { talks } from "@/content/home";
import { SITE_URL, url } from "@/lib/site";
import { socials } from "@rosspower/ui/content/brand";

/**
 * schema.org graphs: who Ross is, his company and what he offers.
 * Nodes link by @id, so each page only adds what's specific to it.
 */
const ids = {
  website: `${SITE_URL}/#website`,
  ross: `${SITE_URL}/#ross`,
  aiPowered: `${SITE_URL}/#ai-powered`,
};

const ross = {
  "@type": "Person",
  "@id": ids.ross,
  name: "Ross Power",
  url: url("/"),
  image: url(bio.portrait.src),
  jobTitle: "AI speaker and educator",
  description: bio.shortBios.items[0].text,
  worksFor: { "@id": ids.aiPowered },
  knowsAbout: ["Artificial intelligence", "AI adoption", "Claude", "AI for teams", "AI for leaders", "AI keynotes"],
  sameAs: [...socials.map((s) => s.href), "https://links.rosspower.ai"],
};

/** On every page: the site, Ross and AI Powered. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: url("/"),
      name: "Ross Power",
      inLanguage: "en-GB",
      publisher: { "@id": ids.ross },
    },
    ross,
    {
      "@type": "Organization",
      "@id": ids.aiPowered,
      name: "AI Powered",
      url: "https://aipowered.xyz",
      founder: { "@id": ids.ross },
    },
  ],
};

/** Homepage: the page, and every keynote as a service Ross offers (booked through /contact). */
export const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url("/")}#webpage`,
      url: url("/"),
      name: "Ross Power | AI speaker, educator and founder of AI Powered",
      isPartOf: { "@id": ids.website },
      about: { "@id": ids.ross },
    },
    ...talks.map((t) => ({
      "@type": "Service",
      name: t.title,
      serviceType: "Keynote",
      description: t.intro,
      provider: { "@id": ids.ross },
      url: url("/contact"),
    })),
  ],
};

/** /bio: Ross's profile page. */
export const bioGraph = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: url("/bio"),
  name: bio.meta.title,
  isPartOf: { "@id": ids.website },
  mainEntity: { "@id": ids.ross },
};

/** /contact: the booking page. */
export const contactGraph = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: url("/contact"),
  name: contactPage.meta.title,
  description: contactPage.meta.description,
  isPartOf: { "@id": ids.website },
  about: { "@id": ids.ross },
};
