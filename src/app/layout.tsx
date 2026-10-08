import type { Metadata, Viewport } from "next";
import { Anton, Instrument_Serif } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

/** H1 only: the big all-caps display line. */
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

/** H2 and the italic "voice" accents. Body and H3–H6 are Helvetica (system). */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Ross Power — AI Keynote Speaker & Mentor";
const description =
  "Keynotes, workshops and mentoring that help rooms full of people stop feeling behind and start actually building with AI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rosspower.ai"),
  title: { default: "Ross Power — AI Keynote Speaker", template: "%s · Ross Power" },
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
    <html lang="en-GB" className={`${anton.variable} ${instrumentSerif.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        {/* The header is fixed, so pages start below it. Full-bleed heroes pull back up with -mt-(--header-h). */}
        <main className="flex-1 pt-(--header-h)">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
