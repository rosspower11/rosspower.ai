import Link from "next/link";
import type { ComponentType } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Instagram, LinkedIn, XLogo, YouTube } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { bookLink, contact, mainNav, socials, type SocialLabel } from "@/content/nav";

const socialIcons: Record<SocialLabel, ComponentType<{ className?: string }>> = {
  Instagram,
  LinkedIn,
  X: XLogo,
  YouTube,
};

const titleClass = "text-[12px] leading-none font-semibold tracking-[0.22em] text-wash uppercase";
const linkClass = "text-[16px] leading-[1.5] text-cream/75 transition-colors hover:text-cream";

export function SiteFooter() {
  return (
    <Section as="footer" tone="ink" className="overflow-hidden">
      <Container flush="bottom" className="flex flex-col gap-12 tablet:gap-16">
        {/* Laptop up: brand, line and socials left; links right. Below: stacked, links two across. */}
        <div className="grid gap-12 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col items-start gap-6 laptop:col-span-6">
            <Logo className="w-[184px] tablet:w-[216px]" />
            <p className="type-p-lg max-w-[440px] text-cream/75">
              Making AI simple, practical and human. Keynotes, workshops and panels for founders, teams and leaders,
              from Bali to London.
            </p>
            <ul className="flex gap-3" aria-label="Ross on social media">
              {socials.map(({ label, href }) => {
                const Icon = socialIcons[label];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-12 gap-y-8 tablet:grid-cols-2 tablet:gap-8 laptop:col-span-5 laptop:col-start-8">
            <nav aria-label="Footer" className="flex flex-col gap-5">
              <span className={titleClass}>Explore</span>
              <ul className="flex flex-col gap-2">
                {mainNav.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col items-start gap-5">
              <span className={titleClass}>Contact</span>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href={`mailto:${contact.email}`} className={`${linkClass} break-words`}>
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a href={contact.aiPowered} className={linkClass}>
                    aipowered.xyz
                  </a>
                </li>
              </ul>
              <Button href={bookLink.href} variant="cream" size="sm" className="mt-1">
                {bookLink.label}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-cream/15 pt-6 text-cream/60">
          <p className="type-p-sm">
            © {new Date().getFullYear()} Ross Power<span className="hidden tablet:inline"> · Founder of AI Powered</span>
          </p>
          <a
            href="#"
            className="type-label flex items-center gap-3 tracking-[0.12em] uppercase transition-colors hover:text-cream"
          >
            Back to top
            <span className="flex size-9 items-center justify-center rounded-full border border-cream/25">
              <ArrowDown className="size-4 rotate-180" />
            </span>
          </a>
        </div>
      </Container>

      {/* Oversized name as the closing mark, fading into the floor. Decorative: the brand link lives in the header. */}
      <div aria-hidden className="mx-auto w-full max-w-site overflow-hidden px-(--section-px)">
        <p
          className="-mb-[0.08em] bg-[linear-gradient(180deg,rgba(183,198,226,0.22),rgba(183,198,226,0))] bg-clip-text pt-6 text-center font-display leading-[0.9] whitespace-nowrap text-transparent uppercase"
          style={{ fontSize: "min(274px, calc((100vw - 2 * var(--section-px)) / 4.66))" }}
        >
          Ross Power
        </p>
      </div>
    </Section>
  );
}
