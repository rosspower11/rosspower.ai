"use client";

import { useEffect, useRef, useState } from "react";
import { rossLine } from "@/content/home";

/**
 * Ross's line (from Andi's board): the quote in Instrument Serif italic on pine, signed "ross power".
 * The first time it's on screen, the words rise in one by one and the signature follows.
 * With reduced motion it's shown as it is.
 */
export function RossLine() {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const words = rossLine.quote.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} aria-label="Ross's line" data-shown={shown || undefined} className="line-reveal bg-pine text-cream">
      <figure className="mx-auto flex w-full max-w-site flex-col gap-6 px-(--section-px) py-16 laptop:flex-row laptop:items-end laptop:justify-between laptop:py-24">
        <blockquote
          aria-label={rossLine.quote}
          className="max-w-[1000px] font-serif text-[42px] leading-none tracking-[-0.01em] italic laptop:text-[84px]"
        >
          {words.map((w, i) => (
            <span key={i} aria-hidden className="line-word" style={{ "--i": i } as React.CSSProperties}>
              {w}
              {i < words.length - 1 ? " " : null}
            </span>
          ))}
        </blockquote>
        <figcaption className="line-sign type-label shrink-0 text-cream/80" style={{ "--i": words.length } as React.CSSProperties}>
          {rossLine.signature}
        </figcaption>
      </figure>
    </section>
  );
}
