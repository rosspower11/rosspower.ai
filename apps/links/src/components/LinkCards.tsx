import Image from "next/image";
import type { ComponentType } from "react";
import { ArrowUpRight, Instagram, LinkChain, LinkedIn, XLogo, YouTube } from "@rosspower/ui/components/Icon";
import type { SocialLabel } from "@rosspower/ui/content/brand";
import type { FeatureLink, RowLink, TileLink } from "@/content/links";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/** "aipowered.xyz" from "https://www.aipowered.xyz/events". */
const domain = (href: string) => new URL(href).hostname.replace(/^www\./, "");

/** Round frosted arrow used on the image cards. */
function GlassArrow() {
  return (
    <span className="flex size-10 items-center justify-center rounded-full border border-cream/30 bg-ink/25 text-cream backdrop-blur-md transition-colors group-hover:border-cream group-hover:bg-cream group-hover:text-ink">
      <ArrowUpRight />
    </span>
  );
}

/** Full-width image card: photo with a dark foot, label, title and one line over it. */
export function FeatureCard({ link }: { link: FeatureLink }) {
  return (
    <a
      href={link.href}
      {...external}
      className="group relative flex aspect-[16/11] flex-col justify-between overflow-hidden rounded-card bg-stone p-5 text-cream"
    >
      <Image
        src={link.image.src}
        alt={link.image.alt}
        fill
        sizes="440px"
        className="object-cover object-[50%_35%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,19,23,0.3) 0%, rgba(16,19,23,0) 28%, rgba(16,19,23,0.35) 52%, rgba(16,19,23,0.92) 100%)",
        }}
      />
      <div className="relative flex items-start justify-between gap-3">
        <span className="type-label rounded-full border border-cream/25 bg-ink/30 px-3 py-1.5 backdrop-blur-md">
          {link.label}
        </span>
        <GlassArrow />
      </div>
      <div className="relative flex flex-col gap-1.5">
        <h3 className="text-[24px] leading-[1.1] font-medium tracking-[-0.02em]">{link.title}</h3>
        <p className="text-[14px] leading-[1.45] text-cream/80">{link.desc}</p>
      </div>
    </a>
  );
}

/** Half-width image card with its title in a frosted pill (two to a row). */
export function TileCard({ link }: { link: TileLink }) {
  return (
    <a
      href={link.href}
      {...external}
      className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-card bg-stone p-3 text-cream"
    >
      <Image
        src={link.image.src}
        alt={link.image.alt}
        fill
        sizes="220px"
        className="object-cover object-[50%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(16,19,23,0.55))]" />
      <span className="relative flex w-full items-center justify-between gap-2 rounded-[14px] border border-cream/25 bg-ink/35 py-2 pr-2 pl-3 backdrop-blur-md">
        <span className="text-[13px] leading-[1.25] font-semibold">{link.title}</span>
        <ArrowUpRight className="size-4 shrink-0" />
      </span>
    </a>
  );
}

/** Plain card: thumbnail, title, one line and the destination's domain. */
export function RowCard({ link }: { link: RowLink }) {
  return (
    <a
      href={link.href}
      {...external}
      className="group flex items-center gap-4 rounded-card border border-ink/10 bg-card p-3 pr-4 transition-[border-color,box-shadow] duration-300 hover:border-ink/25 hover:shadow-[0_10px_30px_rgba(16,19,23,0.08)]"
    >
      <span className="relative size-[72px] shrink-0 overflow-hidden rounded-[16px] bg-stone">
        <Image src={link.image.src} alt={link.image.alt} fill sizes="72px" className="object-cover" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-[16px] leading-[1.25] font-bold tracking-[-0.01em]">{link.title}</span>
        <span className="line-clamp-2 text-[13px] leading-[1.4] text-ink/65">{link.desc}</span>
        <span className="mt-0.5 flex items-center gap-1.5 text-[12px] text-ink/45">
          <LinkChain />
          {domain(link.href)}
        </span>
      </span>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
        <ArrowUpRight />
      </span>
    </a>
  );
}

const socialIcons: Record<SocialLabel, ComponentType<{ className?: string }>> = {
  Instagram,
  LinkedIn,
  X: XLogo,
  YouTube,
};

type SocialTileProps = { label: SocialLabel; handle: string; href: string; followers: string };

/** Plain profile card: platform icon, follower count and handle. */
export function SocialTile({ label, handle, href, followers }: SocialTileProps) {
  const Icon = socialIcons[label];
  return (
    <a
      href={href}
      {...external}
      aria-label={`${label}: ${handle}, ${followers} followers`}
      className="group flex aspect-square flex-col justify-between rounded-card border border-ink/10 bg-card p-4 transition-[border-color,box-shadow] duration-300 hover:border-ink/25 hover:shadow-[0_10px_30px_rgba(16,19,23,0.08)]"
    >
      <span className="flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-full bg-ink text-cream">
          <Icon className="size-[18px]" />
        </span>
        <span className="flex size-9 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
          <ArrowUpRight />
        </span>
      </span>
      <span className="flex flex-col">
        <span className="font-serif text-[34px] leading-none">{followers}</span>
        <span className="mt-1.5 text-[13px] font-semibold">{label}</span>
        <span className="text-[12px] text-ink/55">{handle}</span>
      </span>
    </a>
  );
}
