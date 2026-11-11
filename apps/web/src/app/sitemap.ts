import type { MetadataRoute } from "next";
import { url } from "@/lib/site";

/** /sitemap.xml: every public page. The styleguide and the API are left out on purpose. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: url("/"), changeFrequency: "weekly", priority: 1 },
    { url: url("/contact"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/bio"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
