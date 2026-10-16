import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@rosspower/ui/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  /** Drop vertical padding on one or both sides (e.g. two sections that read as one). */
  flush?: "none" | "top" | "bottom" | "both";
};

/**
 * Max 1440px wide, with the site padding for the current breakpoint:
 * 1440: 96/80 · 1200: 72/56 · 810: 56/42 · 390: 42/24 (vertical/horizontal).
 */
export function Container({ flush = "none", className, ...rest }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-site px-(--section-px)",
        flush !== "top" && flush !== "both" && "pt-(--section-py)",
        flush !== "bottom" && flush !== "both" && "pb-(--section-py)",
        className,
      )}
      {...rest}
    />
  );
}
