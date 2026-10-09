/**
 * Photos and brand images live in the Cloudflare R2 bucket `rosspower-ai`, under the same
 * paths they had in public/ (e.g. "images/ross/dsc00011.jpg"), shared by every app.
 *
 * Pages load them from their own domain at /assets/… and Vercel proxies that path to the
 * bucket (root vercel.json; in `next dev`, each app's next.config.ts). Visitors never hit
 * *.r2.dev directly: Indonesian ISPs block it ("Internet Positif"), which broke the photos.
 * Set NEXT_PUBLIC_ASSETS_URL to serve them from somewhere else, e.g. a custom R2 domain.
 */
export const R2_PUBLIC_URL = "https://pub-8596e123de1148b6a30317d1ffd26184.r2.dev";

export const ASSETS_URL = (process.env.NEXT_PUBLIC_ASSETS_URL || "/assets").replace(/\/+$/, "");

/** URL for a file in the assets bucket: asset("images/ross/dsc00011.jpg") → "/assets/images/ross/dsc00011.jpg". */
export const asset = (path: string) => `${ASSETS_URL}/${path.replace(/^\/+/, "")}`;

/** `next dev` rewrite that mirrors the /assets proxy in vercel.json. */
export const devAssetRewrites = async () => [{ source: "/assets/:path*", destination: `${R2_PUBLIC_URL}/:path*` }];
