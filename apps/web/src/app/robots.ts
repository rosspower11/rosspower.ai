import type { MetadataRoute } from "next";
import { SITE_URL, url } from "@/lib/site";

/**
 * /robots.txt: search engines and AI assistants (ChatGPT, Claude, Perplexity, Gemini) are all welcome.
 * Only the form API and the internal styleguide are kept out.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/styleguide"] },
    sitemap: url("/sitemap.xml"),
    host: SITE_URL,
  };
}
