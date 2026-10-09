import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The shared design system ships as TypeScript source.
  transpilePackages: ["@rosspower/ui"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
