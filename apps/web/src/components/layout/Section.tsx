import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@rosspower/ui/lib/cn";

// The italic accent words in titles (.voice): mid blue on light grounds, wash on dark ones (as on aipowered.xyz).
const tones = {
  cream: "bg-cream text-ink [--voice:var(--color-mid)]",
  ice: "bg-ice text-ink [--voice:var(--color-mid)]",
  sky: "bg-sky text-ink [--voice:var(--color-mid)]",
  sand: "bg-sand text-ink [--voice:var(--color-mid)]",
  wash: "bg-wash text-ink [--voice:var(--color-mid)]",
  ink: "bg-ink text-cream [--voice:var(--color-wash)]",
  pine: "bg-pine text-cream [--voice:var(--color-wash)]",
} as const;

export type SectionTone = keyof typeof tones;

type SectionProps<T extends ElementType> = {
  as?: T;
  tone?: SectionTone;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Full-bleed band. Owns the background only, never padding:
 * every Section wraps a Container, which owns max-width and padding.
 */
export function Section<T extends ElementType = "section">({
  as,
  tone = "cream",
  className,
  ...rest
}: SectionProps<T>) {
  const Tag = as ?? "section";
  // data-tone lets the fixed header switch to light-on-dark over ink sections.
  return <Tag data-tone={tone} className={cn("w-full", tones[tone], className)} {...rest} />;
}
