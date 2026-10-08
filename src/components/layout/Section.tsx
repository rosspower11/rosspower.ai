import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

const tones = {
  cream: "bg-cream text-ink",
  ice: "bg-ice text-ink",
  sky: "bg-sky text-ink",
  sand: "bg-sand text-ink",
  ink: "bg-ink text-cream",
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
