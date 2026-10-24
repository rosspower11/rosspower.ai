import Link from "next/link";
import type { ComponentType } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Instagram, LinkedIn, XLogo, YouTube } from "@rosspower/ui/components/Icon";
import { Logo } from "@rosspower/ui/components/Logo";
import { bookLink, mainNav, socials, type SocialLabel } from "@/content/nav";

const socialIcons: Record<SocialLabel, ComponentType<{ className?: string }>> = {
  Instagram,
  LinkedIn,
  X: XLogo,
  YouTube,
};

const linkClass = "text-[16px] leading-[1.5] font-semibold transition-colors hover:text-mid";

export function SiteFooter() {
  return (
    <Section as="footer" tone="sand">
      <Container className="flex flex-col gap-12 tablet:gap-16">
        {/* Laptop up: brand, line and socials left; menus and book button right. Below: stacked. */}
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

          {/* As on Andi's board: the three header menus and the book button, in a row. */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6 laptop:col-span-6 laptop:justify-end laptop:self-start">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {mainNav.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button href={bookLink.href} variant="ink" size="sm">
              {bookLink.label}
            </Button>
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
