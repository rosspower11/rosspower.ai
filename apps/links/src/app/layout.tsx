import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { asset } from "@rosspower/ui/lib/asset";
import { profile } from "@/content/links";
import "./globals.css";

/** The italic "voice" accents and the follower counts. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

/** Everything else: titles, body, buttons and labels, as on rosspower.ai. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const title = "Ross Power | Links";
const description = "A founder of AI Powered, speaker and Educator. Making AI simple, practical and human";

/** Share thumbnail: the cover photo at the top of the page (1200×630, served from /assets). */
const shareImage = { url: asset("images/profile/cover.jpg"), width: 1200, height: 630, alt: profile.cover.alt };

export const metadata: Metadata = {
  metadataBase: new URL("https://links.rosspower.ai"),
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
    <html lang="en-GB" className={`${instrumentSerif.variable} ${bricolage.variable}`}>
      {/* Phones: the page is the column. 480px and up: the column floats on sand. */}
      <body className="bg-cream min-[480px]:bg-sand">{children}</body>
    </html>
  );
}
