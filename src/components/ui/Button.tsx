import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const variants = {
  /** Primary on any ground. */
  accent: "bg-accent text-ink border-accent hover:bg-sky hover:border-sky",
  /** Light button on ink. */
  cream: "bg-cream text-ink border-cream hover:bg-ice hover:border-ice",
  /** Dark button on light grounds. */
  ink: "bg-ink text-cream border-ink hover:bg-ink/85",
  outline: "bg-transparent text-ink border-ink/30 hover:border-ink hover:bg-ink hover:text-cream",
  "outline-light": "bg-ink/40 text-cream border-cream/25 backdrop-blur hover:border-cream hover:bg-cream hover:text-ink",
} as const;

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof variants;
  size?: "md" | "sm";
};

export function Button({ variant = "ink", size = "md", className, ...rest }: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2.5 rounded-xl border font-semibold tracking-[0.08em] whitespace-nowrap uppercase transition-colors",
        size === "md" ? "px-6 py-3.5 text-[14px]" : "px-4 py-2.5 text-[13px]",
        variants[variant],
        className,
      )}
      {...rest}
    />
  );
}
