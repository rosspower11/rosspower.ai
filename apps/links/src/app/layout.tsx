import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { asset } from "@rosspower/ui/lib/asset";
import { linksGraph, shareImage, SITE_URL } from "@/lib/seo";
import "./globals.css";

/** Titles and their italic "voice" accents. Everything else is Helvetica Neue (no web font). */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Ross Power | Links";
const description =
  "Ross Power's links: book a call, AI Powered's services for founders and teams, his keynotes, the tools he uses and where to follow him.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
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
    locale: "en_GB",
    title,
    description,
    url: "/",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", creator: "@rosspower", title, description, images: [shareImage] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f0e8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={instrumentSerif.variable}>
      {/* Phones: the page is the column. 480px and up: the column floats on sand. */}
      <body className="bg-cream min-[480px]:bg-sand">
        <script
          type="application/ld+json"
          // Static data, escaped so a "<" can't close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(linksGraph).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
