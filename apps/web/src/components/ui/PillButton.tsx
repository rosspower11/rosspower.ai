import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@rosspower/ui/lib/cn";

/** v2 buttons (step 01): lowercase pills, Bricolage 600 17px. links.rosspower.ai keeps the shared Button. */
const variants = {
  /** Forest pill, cream text: the default on light grounds. */
  forest: "border-ink bg-ink text-cream hover:bg-pine hover:border-pine",
  /** Cream pill, forest text: on dark grounds and the hero. */
  cream: "border-cream bg-cream text-ink hover:bg-wash hover:border-wash",
  /** 1.5px forest outline. */
  outline: "border-ink bg-transparent text-ink hover:bg-ink hover:text-cream",
  /** 1.5px cream outline, on the hero video. */
  "outline-cream": "border-cream bg-transparent text-cream hover:bg-cream hover:text-ink",
} as const;

export type PillVariant = keyof typeof variants;

export const pillClass = (variant: PillVariant = "forest", size: "md" | "sm" = "md") =>
  cn(
    "inline-flex min-h-11 items-center justify-center rounded-full border-[1.5px] font-sans font-semibold whitespace-nowrap transition-colors",
    size === "md" ? "px-7 py-3.5 text-[17px] leading-none" : "px-5 py-2.5 text-[15px] leading-none",
    variants[variant],
  );

type PillButtonProps = ComponentPropsWithoutRef<typeof Link> & { variant?: PillVariant; size?: "md" | "sm" };

export function PillButton({ variant = "forest", size = "md", className, ...rest }: PillButtonProps) {
  return <Link className={cn(pillClass(variant, size), className)} {...rest} />;
}
