import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@rosspower/ui/lib/cn";

/**
 * rosspower.ai buttons in Andi's text style: lowercase pills, Bricolage 600, 1.5px border.
 * A copy of rosspower.ai's Button (apps/web), so both sites look the same.
 */
const variants = {
  /** Primary on light grounds: forest pill. */
  accent: "bg-ink text-cream border-ink hover:bg-pine hover:border-pine",
  /** Light pill on dark grounds. */
  cream: "bg-cream text-ink border-cream hover:bg-wash hover:border-wash",
  /** Dark pill on light grounds. */
  ink: "bg-ink text-cream border-ink hover:bg-pine hover:border-pine",
  /** Forest outline. */
  outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-cream",
  /** Cream outline on dark grounds and photos. */
  "outline-light": "bg-transparent text-cream border-cream hover:bg-cream hover:text-ink",
} as const;

export type ButtonVariant = keyof typeof variants;

/** The classes, for a <button> or <a> that isn't a Next link. */
export const buttonClass = (variant: ButtonVariant = "ink", size: "md" | "sm" = "md") =>
  cn(
    "inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border-[1.5px] font-sans font-semibold whitespace-nowrap lowercase transition-colors",
    size === "md" ? "px-7 py-3.5 text-[17px] leading-none" : "px-5 py-2.5 text-[15px] leading-none",
    variants[variant],
  );

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & { variant?: ButtonVariant; size?: "md" | "sm" };

export function Button({ variant = "ink", size = "md", className, ...rest }: ButtonProps) {
  return <Link className={cn(buttonClass(variant, size), className)} {...rest} />;
}
