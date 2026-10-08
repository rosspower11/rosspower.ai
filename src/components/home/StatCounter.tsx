"use client";

import { useEffect, useRef, useState } from "react";

type Props = { value: number; prefix?: string; suffix?: string };

/** Counts up from zero once, when it scrolls into view. */
export function StatCounter({ value, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1800;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const k = duration ? Math.min(1, (now - t0) / duration) : 1;
          setProgress(1 - Math.pow(1 - k, 3));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const shown = Math.round(value * progress).toLocaleString("en-GB");
  return (
    <span ref={ref} aria-label={`${prefix}${value.toLocaleString("en-GB")}${suffix}`}>
      <span aria-hidden>
        {prefix}
        {shown}
        {suffix}
      </span>
    </span>
  );
}
