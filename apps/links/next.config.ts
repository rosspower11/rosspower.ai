import type { NextConfig } from "next";
import { devAssetRewrites } from "@rosspower/ui/lib/asset";

const nextConfig: NextConfig = {
  // links.rosspower.ai is a plain static site: `next build` writes it to out/.
  output: "export",
  // No image server on a static export, so photos in public/ are pre-sized instead.
  images: { unoptimized: true },
  // The shared design system ships as TypeScript source.
  transpilePackages: ["@rosspower/ui"],
  // Local dev runs at http://links.localhost:3300 (any *.localhost name points at this machine).
  allowedDevOrigins: ["links.localhost"],
  // Deployed, vercel.json proxies /assets to R2 and sends /api/contact (the /book form) to the
  // web app; these do the same under `next dev` (a static export can't have rewrites of its own).
  ...(process.env.NODE_ENV === "development"
    ? {
        rewrites: async () => [
          ...(await devAssetRewrites()),
          { source: "/api/contact", destination: "http://localhost:3200/api/contact" },
        ],
      }
    : {}),
};

export default nextConfig;
