/**
 * Photos and brand images live in the Cloudflare R2 bucket `rosspower-ai`, under the same
 * paths they had in public/ (e.g. "images/ross/dsc00011.jpg"), shared by every app.
 *
 * The bucket is public only on its custom domain, assets.rosspower.ai (the r2.dev URL is off:
 * Indonesian ISPs block *.r2.dev). Pages load images from their own domain at /assets/…, which
 * Vercel proxies to that domain (root vercel.json; in `next dev`, each app's next.config.ts),
 * so CSS masks like the logo stay same-origin.
 *
 * Videos skip the proxy (`video()` below): Vercel's cache ignores Range, so it would store the
 * first partial response (Safari's 2-byte probe) and serve it to everyone. Cloudflare handles ranges.
 */
export const R2_PUBLIC_URL = "https://assets.rosspower.ai";

export const ASSETS_URL = (process.env.NEXT_PUBLIC_ASSETS_URL || "/assets").replace(/\/+$/, "");

/** URL for a file in the assets bucket: asset("images/ross/dsc00011.jpg") → "/assets/images/ross/dsc00011.jpg". */
export const asset = (path: string) => `${ASSETS_URL}/${path.replace(/^\/+/, "")}`;

/** URL for a video in the bucket, straight from Cloudflare: video("videos/hero/hero-home.mp4"). */
export const video = (path: string) => `${R2_PUBLIC_URL}/${path.replace(/^\/+/, "")}`;

/** `next dev` rewrite that mirrors the /assets proxy in vercel.json. */
export const devAssetRewrites = async () => [{ source: "/assets/:path*", destination: `${R2_PUBLIC_URL}/:path*` }];
