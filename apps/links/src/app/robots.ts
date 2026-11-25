import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// A static export: written to out/robots.txt at build time.
export const dynamic = "force-static";

/** /robots.txt: everything is public. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}
