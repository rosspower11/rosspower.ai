import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The shared design system ships as TypeScript source.
  transpilePackages: ["@rosspower/ui"],
  images: {
    formats: ["image/avif", "image/webp"],
    // Photos live in the R2 assets bucket (packages/ui/src/lib/asset.ts).
    remotePatterns: [{ protocol: "https", hostname: "pub-8596e123de1148b6a30317d1ffd26184.r2.dev" }],
  },
};

export default nextConfig;
