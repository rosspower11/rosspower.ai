import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@rosspower/ui/components/ContactForm";
import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { ArrowRight } from "@rosspower/ui/components/Icon";
import { Logo } from "@rosspower/ui/components/Logo";
import { bookPage } from "@/content/links";

const { title, description } = bookPage.meta;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/book" },
  openGraph: { title, description, url: "/book" },
  twitter: { title, description },
};

export default function BookPage() {
  return (
    // The same phone-width column as the links page.
    <main className="mx-auto flex min-h-dvh w-full max-w-[440px] flex-col gap-8 bg-cream px-3 pt-5 pb-16 min-[480px]:my-10 min-[480px]:min-h-0 min-[480px]:rounded-[36px] min-[480px]:border min-[480px]:border-ink/10 min-[480px]:shadow-[0_24px_80px_rgba(16,19,23,0.12)]">
      <Link
        href="/"
        className="type-label inline-flex items-center gap-2 self-start px-3 tracking-[0.12em] text-ink/70 uppercase transition-colors hover:text-ink"
      >
        <ArrowRight className="size-4 rotate-180" />
        All links
      </Link>

      <header className="flex flex-col gap-4 px-3">
        <Eyebrow>{bookPage.eyebrow}</Eyebrow>
        <h1 className="type-h2 normal-case">
          Let&apos;s find your <span className="voice">next step</span>
        </h1>
        <p className="text-[16px] leading-[1.5] text-ink/80">{bookPage.body}</p>
      </header>

      <ContactForm source="links" thanks={bookPage.thanks} />

      <footer className="flex flex-col items-center gap-4 border-t border-ink/10 px-3 pt-8 text-center">
        <Logo className="w-[120px]" color="#101317" />
        <p className="text-[12px] text-ink/50">© {new Date().getFullYear()} Ross Power</p>
      </footer>
    </main>
  );
}
