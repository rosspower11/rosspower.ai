import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { bookLink, contact, mainNav } from "@/content/nav";

export function SiteFooter() {
  return (
    <Section as="footer" tone="ink" className="overflow-hidden">
      <Container flush="bottom" className="flex flex-col gap-12">
        <div className="grid gap-10 tablet:grid-cols-2 laptop:grid-cols-12">
          <div className="flex flex-col gap-5 laptop:col-span-6">
            <Logo className="w-[160px]" />
            <p className="type-h2 text-cream">
              Making AI <span className="voice">simple.</span>
            </p>
            <Button href={bookLink.href} variant="accent" className="self-start">
              {bookLink.label}
              <ArrowUpRight />
            </Button>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-3 laptop:col-span-2 laptop:col-start-8">
            <span className="type-label text-cream/50">Explore</span>
            {mainNav.map((link) => (
              <Link key={link.href} href={link.href} className="type-p text-cream/85 hover:text-cream">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 laptop:col-span-3 laptop:col-start-10">
            <span className="type-label text-cream/50">Contact</span>
            <a href={`mailto:${contact.email}`} className="type-p break-words text-cream/85 hover:text-cream">
              {contact.email}
            </a>
            <a href={contact.aiPowered} className="type-p text-cream/85 hover:text-cream">
              aipowered.xyz
            </a>
          </div>
        </div>

        <div className="type-p-sm flex flex-col gap-2 border-t border-cream/15 pt-6 text-cream/60 tablet:flex-row tablet:justify-between">
          <p className="type-p-sm">© {new Date().getFullYear()} Ross Power</p>
          <p className="type-p-sm">Founder of AI Powered</p>
        </div>
      </Container>

      {/* Oversized name as the closing mark. Decorative: the brand link lives in the header. */}
      <div aria-hidden className="mx-auto w-full max-w-site overflow-hidden px-(--section-px)">
        <p
          className="-mb-[0.06em] pt-4 font-display leading-[0.9] whitespace-nowrap text-cream/[0.07] uppercase"
          style={{ fontSize: "min(274px, calc((100vw - 2 * var(--section-px)) / 4.66))" }}
        >
          Ross Power
        </p>
      </div>
    </Section>
  );
}
