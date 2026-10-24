import type { Metadata, Viewport } from "next";
import { Anton, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothAnchors } from "@/components/layout/SmoothAnchors";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { siteGraph } from "@/lib/structured-data";
import { asset } from "@rosspower/ui/lib/asset";
import "./globals.css";

/** H1 only: the big all-caps display line. */
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

/** The italic "voice" accents and the hero line. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

/** Everything else: headings, body, buttons and labels (replaces Helvetica). */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

/** Homepage SEO, from the build pack (00. START HERE). */
const title = "Ross Power | AI speaker, educator and founder of AI Powered";
const description =
  "Book Ross Power, the AI speaker who makes AI simple. Keynotes, workshops, panels and podcasts for founders, teams and leaders, from Bali to London.";

/** Share image: a still from the HR APAC keynote with the name on it (1200×630, R2 via /assets). */
const shareImage = {
  url: asset("images/og/og-ross-power.jpg"),
  width: 1200,
  height: 630,
  alt: "Ross Power on stage at HR APAC Forum, Bali",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Ross Power" },
  description,
  alternates: { canonical: "/" },
  // The "rp" mark, white on black, from the R2 assets bucket (images/brand).
  icons: {
    icon: [
      { url: asset("images/brand/favicon-32.png"), sizes: "32x32", type: "image/png" },
      { url: asset("images/brand/favicon-16.png"), sizes: "16x16", type: "image/png" },
    ],
    apple: asset("images/brand/apple-touch-icon.png"),
  },
  openGraph: {
    type: "website",
    siteName: "Ross Power",
    title,
    description,
    url: "/",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", title, description, images: [shareImage] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f1ece1",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${anton.variable} ${instrumentSerif.variable} ${bricolage.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <JsonLd data={siteGraph} />
        <SiteHeader />
        <SmoothAnchors />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
