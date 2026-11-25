import type { Metadata } from "next";
import { socials } from "@rosspower/ui/content/brand";
import { asset } from "@rosspower/ui/lib/asset";
import { profile } from "@/content/links";

export const SITE_URL = "https://links.rosspower.ai";
/** rosspower.ai's own address, where Ross's Person entry lives (apps/web/src/lib/structured-data.ts). */
const ROSSPOWER = "https://www.rosspower.ai";

/** Share thumbnail: the cover photo at the top of the page (1200×630, served from /assets). */
export const shareImage = { url: asset("images/profile/cover.jpg"), width: 1200, height: 630, alt: profile.cover.alt };

/**
 * A page's title, description, canonical, Open Graph and X card in one go.
 * Next.js replaces (not merges) the layout's openGraph and twitter when a page sets them,
 * so the shared parts (site name, locale, image, Ross's X handle) are filled in here every time.
 */
export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "Ross Power", locale: "en_GB", title, description, url: path, images: [shareImage] },
    twitter: { card: "summary_large_image", creator: "@rosspower", title, description, images: [shareImage] },
  };
}

/**
 * schema.org for the links page: a profile page about Ross. Ross and AI Powered use the same @id as on
 * rosspower.ai, so search engines join the two sites up as one person.
 */
export const linksGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Ross Power | Links",
      inLanguage: "en-GB",
      mainEntity: { "@id": `${ROSSPOWER}/#ross` },
    },
    {
      "@type": "Person",
      "@id": `${ROSSPOWER}/#ross`,
      name: "Ross Power",
      url: `${ROSSPOWER}/`,
      jobTitle: "AI speaker and educator",
      worksFor: { "@id": `${ROSSPOWER}/#ai-powered` },
      sameAs: [...socials.map((s) => s.href), `${ROSSPOWER}/about`],
    },
    {
      "@type": "Organization",
      "@id": `${ROSSPOWER}/#ai-powered`,
      name: "AI Powered",
      url: "https://www.aipowered.xyz/",
      founder: { "@id": `${ROSSPOWER}/#ross` },
    },
  ],
};
