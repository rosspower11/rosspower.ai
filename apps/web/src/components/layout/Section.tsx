import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@rosspower/ui/lib/cn";

// The italic accent words in titles (.voice) take the title's own colour, as in Andi's type style.
const tones = {
  cream: "bg-cream text-ink [--voice:currentColor]",
  ice: "bg-ice text-ink [--voice:currentColor]",
  sky: "bg-sky text-ink [--voice:currentColor]",
  sand: "bg-sand text-ink [--voice:currentColor]",
  wash: "bg-wash text-ink [--voice:currentColor]",
  ink: "bg-ink text-cream [--voice:currentColor]",
  pine: "bg-pine text-cream [--voice:currentColor]",
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
