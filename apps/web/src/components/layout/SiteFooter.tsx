import Link from "next/link";
import type { ComponentType } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Instagram, LinkedIn, XLogo, YouTube } from "@rosspower/ui/components/Icon";
import { Logo } from "@rosspower/ui/components/Logo";
import { bookLink, menuNav, socials, type SocialLabel } from "@/content/nav";

const socialIcons: Record<SocialLabel, ComponentType<{ className?: string }>> = {
  Instagram,
  LinkedIn,
  X: XLogo,
  YouTube,
};

const titleClass = "text-[15px] leading-none font-semibold text-mid lowercase";
const linkClass = "text-[16px] leading-[1.5] text-ink/75 transition-colors hover:text-ink";

export function SiteFooter() {
  return (
    <Section as="footer" tone="sand">
      <Container className="flex flex-col gap-12 tablet:gap-16">
        {/* Laptop up: brand, line and socials left; links right. Below: stacked, links two across. */}
        <div className="grid gap-12 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col items-start gap-6 laptop:col-span-6">
            <Logo className="w-[184px] tablet:w-[216px]" color="#17332a" />
            <p className="type-p-lg max-w-[440px] text-ink/75">
              Keynotes and podcasts for founders, teams and leaders, from Bali to London.
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
                      className="flex size-11 items-center justify-center rounded-full border border-ink/20 text-ink/80 transition-colors hover:border-ink hover:bg-ink hover:text-cream"
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
                {menuNav.map((link) => (
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
              <Button href={bookLink.href} variant="ink" size="sm" className="mt-1">
                {bookLink.label}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-ink/15 pt-6 text-ink/60">
          <p className="type-p-sm">
            © {new Date().getFullYear()} Ross Power<span className="hidden tablet:inline"> · Founder of AI Powered</span>
          </p>
          <a
            href="#"
            className="type-label flex items-center gap-3 lowercase transition-colors hover:text-ink"
          >
            Back to top
            <span className="flex size-9 items-center justify-center rounded-full border border-ink/25">
              <ArrowDown className="size-4 rotate-180" />
            </span>
          </a>
        </div>
      </Container>
    </Section>
  );
}
