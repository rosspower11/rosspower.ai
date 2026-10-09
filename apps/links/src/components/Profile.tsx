import Image from "next/image";
import type { ComponentType } from "react";
import { Button } from "@rosspower/ui/components/Button";
import { ArrowUpRight, Instagram, LinkedIn, XLogo, YouTube } from "@rosspower/ui/components/Icon";
import { socials, type SocialLabel } from "@rosspower/ui/content/brand";
import { profile } from "@/content/links";

const socialIcons: Record<SocialLabel, ComponentType<{ className?: string }>> = {
  Instagram,
  LinkedIn,
  X: XLogo,
  YouTube,
};

/** Cover photo, avatar overlapping its corner, name, bio, socials, then Book a call. (WhatsApp floats.) */
export function Profile() {
  const { book } = profile.actions;
  return (
    <header className="flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-stone">
        <Image
          src={profile.cover.src}
          alt={profile.cover.alt}
          fill
          priority
          sizes="440px"
          className="object-cover object-[50%_40%]"
        />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(16,19,23,0.3))]" />
      </div>

      {/* Avatar overlaps the cover's bottom-left. */}
      <span className="relative -mt-12 ml-3 size-24 shrink-0 overflow-hidden rounded-full bg-stone ring-4 ring-cream">
        <Image src={profile.avatar.src} alt={profile.avatar.alt} fill priority sizes="96px" className="object-cover" />
      </span>

      <div className="mt-4 flex flex-col gap-3 px-3">
        <span className="text-[13px] leading-none text-ink/50">/{profile.handle}</span>
        <h1 className="font-serif text-[44px] leading-[0.95] tracking-[-0.01em] normal-case">
          {profile.name.first} <span className="voice">{profile.name.last}</span>
        </h1>
        <div className="flex flex-col">
          {profile.bio.map((line) => (
            <p key={line} className="text-[16px] leading-[1.5] text-ink/75">
              {line}
            </p>
          ))}
        </div>
        {/* Socials: four equal buttons, then the main action. */}
        <ul className="mt-2 grid grid-cols-4 gap-2" aria-label="Ross on social media">
          {socials.map(({ label, href }) => {
            const Icon = socialIcons[label];
            return (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 items-center justify-center rounded-lg border border-ink/15 text-ink/80 transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            );
          })}
        </ul>
        <Button href={book.href} target="_blank" rel="noopener noreferrer" variant="ink">
          {book.label}
          <ArrowUpRight />
        </Button>
      </div>
    </header>
  );
}
