import Link from "next/link";
import type { ComponentType } from "react";
import { PillButton } from "@/components/ui/PillButton";
import { Instagram, LinkedIn, XLogo, YouTube } from "@rosspower/ui/components/Icon";
import { bookLink, mainNav, socials, type SocialLabel } from "@/content/nav";

const socialIcons: Record<SocialLabel, ComponentType<{ className?: string }>> = {
  Instagram,
  LinkedIn,
  X: XLogo,
  YouTube,
};

/** v2 footer (step 14): cream, one row. Wordmark, line, socials and copyright left; links and book ross right. */
export function SiteFooter() {
  return (
    <footer className="border-t-[1.5px] border-ink bg-cream text-ink">
      <div className="mx-auto flex w-full max-w-site flex-col gap-10 px-(--section-px) pt-10 pb-12 laptop:flex-row laptop:items-end laptop:justify-between">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="py-1.5 text-[32px] leading-none font-extrabold tracking-[-0.03em]">
            ross power<span className="text-mid">.</span>
          </Link>
          <p className="text-[15px]">Keynotes and podcasts for founders, teams and leaders, from Bali to London.</p>
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
                    className="flex size-11 items-center justify-center rounded-full border-[1.5px] border-ink transition-colors hover:bg-ink hover:text-cream"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-[13px]">© {new Date().getFullYear()} Ross Power · Founder of AI Powered</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <nav aria-label="Footer">
            <ul className="flex gap-5">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-11 items-center text-[16px] font-semibold transition-colors hover:text-mid">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <PillButton href={bookLink.href} size="sm">
            {bookLink.label}
          </PillButton>
        </div>
      </div>
    </footer>
  );
}
