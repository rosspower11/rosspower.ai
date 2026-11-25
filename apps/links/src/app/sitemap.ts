import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// A static export: written to out/sitemap.xml at build time.
export const dynamic = "force-static";

/** /sitemap.xml: both pages. No lastModified until there are real per-page dates (as on rosspower.ai). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/book`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
