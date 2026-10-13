import type { Metadata, Viewport } from "next";
import { Anton, Instrument_Serif } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothAnchors } from "@/components/layout/SmoothAnchors";
import { asset } from "@rosspower/ui/lib/asset";
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
  metadataBase: new URL("https://www.rosspower.ai"),
  title: { default: title, template: "%s | Ross Power" },
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
    <html lang="en-GB" className={`${anton.variable} ${instrumentSerif.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        <SmoothAnchors />
        {/* The header is fixed, so pages start below it. Full-bleed heroes pull back up with -mt-(--header-h). */}
        <main className="flex-1 pt-(--header-h)">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
