"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@rosspower/ui/lib/cn";

type ScrollScaleProps = {
  children: ReactNode;
  className?: string;
  /** Scale while the element is just entering the viewport. */
  from?: number;
};

/**
 * Grows its child from `from` to full size as it scrolls into view.
 * Writes --scroll-scale (from → 1) so children can counter-zoom, e.g. a photo
 * with `scale(calc(2 - var(--scroll-scale, 1)))`. Static for reduced motion.
 */
export function ScrollScale({ children, className, from = 0.86 }: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const top = el.getBoundingClientRect().top;
      const vh = window.innerHeight;
      // 0 when the top edge enters at the bottom of the screen, 1 once it reaches 15% from the top.
      const p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.85)));
      const eased = 1 - Math.pow(1 - p, 3);
      el.style.setProperty("--scroll-scale", (from + (1 - from) * eased).toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [from]);

  return (
    <div
      ref={ref}
      className={cn("origin-center will-change-transform", className)}
      style={{ transform: "scale(var(--scroll-scale, 1))" }}
    >
      {children}
    </div>
  );
}
