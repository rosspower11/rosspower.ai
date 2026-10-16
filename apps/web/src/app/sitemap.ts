import type { MetadataRoute } from "next";
import { url } from "@/lib/site";

/** /sitemap.xml: every public page. The styleguide and the API are left out on purpose. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: url("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: url("/contact"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/bio"), lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
