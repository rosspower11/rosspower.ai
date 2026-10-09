import type { NextConfig } from "next";
import { devAssetRewrites } from "@rosspower/ui/lib/asset";

const nextConfig: NextConfig = {
  // The shared design system ships as TypeScript source.
  transpilePackages: ["@rosspower/ui"],
  images: {
    // Photos come from the R2 assets bucket via /assets (packages/ui/src/lib/asset.ts),
    // already web-sized. Vercel's /_next/image optimiser isn't served in this Services
    // deployment (it returns 404), so it's switched off.
    unoptimized: true,
  },
  // Deployed, vercel.json proxies /assets to R2; this does the same under `next dev`.
  ...(process.env.NODE_ENV === "development" ? { rewrites: devAssetRewrites } : {}),
};

export default nextConfig;
