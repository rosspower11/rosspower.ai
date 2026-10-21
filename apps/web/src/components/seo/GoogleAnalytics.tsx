import Script from "next/script";

/** Google Analytics 4 property for rosspower.ai (not used on links.rosspower.ai). */
const GA_ID = "G-TB95N36LJF";

/**
 * Google's gtag.js snippet, loaded after the page is interactive so it never slows the first paint.
 * Production deploys only (VERCEL_ENV is set at build time), so local dev and preview visits
 * don't count as real traffic.
 */
export function GoogleAnalytics() {
  if (process.env.VERCEL_ENV !== "production") return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
