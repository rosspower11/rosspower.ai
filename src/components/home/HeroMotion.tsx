"use client";

import { useEffect, useRef } from "react";

/**
 * Drives the hero parallax: writes how far the page has scrolled (px) to
 * --hero-y on the enclosing section, which the .parallax-* classes read.
 * Stops updating once the hero is off screen; does nothing for reduced motion.
 */
export function HeroMotion() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, section.offsetHeight);
      section.style.setProperty("--hero-y", y.toFixed(1));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <span ref={ref} hidden />;
}
