/** The live address. rosspower.ai redirects here, so canonicals, the sitemap and structured data all use it. */
export const SITE_URL = "https://www.rosspower.ai";

/** Absolute URL for a path on this site, e.g. url("/contact"). */
export const url = (path = "/") => new URL(path, SITE_URL).toString();
