import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { asset } from "@rosspower/ui/lib/asset";
import { profile } from "@/content/links";
import "./globals.css";

/** Titles and the italic "voice" accents. Body is Helvetica (system), as on rosspower.ai. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
  themeColor: "#eee9df",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={instrumentSerif.variable}>
      {/* Phones: the page is the column. 480px and up: the column floats on sand. */}
      <body className="bg-cream min-[480px]:bg-sand">{children}</body>
    </html>
  );
}
