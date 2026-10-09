import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // links.rosspower.ai is a plain static site: `next build` writes it to out/.
  output: "export",
  // No image server on a static export, so photos in public/ are pre-sized instead.
  images: { unoptimized: true },
  // The shared design system ships as TypeScript source.
  transpilePackages: ["@rosspower/ui"],
  // Local dev runs at http://links.localhost:3300 (any *.localhost name points at this machine).
  allowedDevOrigins: ["links.localhost"],
};

export default nextConfig;
