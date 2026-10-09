import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

/** Titles and the italic "voice" accents. Body is Helvetica (system), as on rosspower.ai. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Ross Power · Links";
const description =
  "Book a call with Ross, explore AI Powered's programmes and solutions, and follow along on YouTube, Instagram, LinkedIn and X.";

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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ross Power — Make AI simple, practical & human." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
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
