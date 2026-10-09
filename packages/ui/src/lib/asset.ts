/**
 * Photos and brand images live in the Cloudflare R2 bucket `rosspower-ai`, under the same
 * paths they had in public/ (e.g. "images/ross/dsc00011.jpg"), shared by every app.
 * Set NEXT_PUBLIC_ASSETS_URL to serve them from another host (e.g. a custom domain).
 */
export const ASSETS_URL = (process.env.NEXT_PUBLIC_ASSETS_URL || "https://pub-8596e123de1148b6a30317d1ffd26184.r2.dev").replace(
  /\/+$/,
  "",
);

/** Full URL for a file in the assets bucket: asset("images/ross/dsc00011.jpg"). */
export const asset = (path: string) => `${ASSETS_URL}/${path.replace(/^\/+/, "")}`;
