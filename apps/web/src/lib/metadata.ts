import type { Metadata } from "next";
import { asset } from "@rosspower/ui/lib/asset";

/** Share image: a still from the HR APAC keynote with the name on it (1200×630, R2 via /assets). */
export const shareImage = {
  url: asset("images/og/og-ross-power.jpg"),
  width: 1200,
  height: 630,
  alt: "Ross Power on stage at HR APAC Forum, Bali",
};

/**
 * A page's title, description, canonical, Open Graph and X card in one go.
 * Next.js replaces (not merges) the layout's openGraph and twitter when a page sets them,
 * so the shared parts (site name, locale, image, Ross's X handle) are filled in here every time.
 */
export function pageMetadata({
  path,
  title,
  description,
  type = "website",
}: {
  path: string;
  /** The full title, used as is (not run through the layout's "%s | Ross Power" template). */
  title: string;
  description: string;
  type?: "website" | "profile";
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type, siteName: "Ross Power", locale: "en_GB", title, description, url: path, images: [shareImage] },
    twitter: { card: "summary_large_image", creator: "@rosspower", title, description, images: [shareImage] },
  };
}
