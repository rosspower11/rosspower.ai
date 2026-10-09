"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/ui/Icon";

type Story = { quote: string; name: string; role: string; outcome: string; photo: string };

const INTERVAL = 4500;

// Fade only the side margins (--bleed), so the first card in place is never faded.
const EDGE_MASK =
  "linear-gradient(90deg, transparent 0, #000 var(--bleed), #000 calc(100% - var(--bleed)), transparent 100%)";

/**
 * Carousel of quote cards that runs to the window edges and fades out at both sides.
 * It steps one card every few seconds, looping back at the end; the arrows step it by hand.
 * Hover, focus or touch pauses it, and it never moves on its own for reduced motion.
 */
export function StoryCards({ items }: { items: Story[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches); // eslint-disable-line react-hooks/set-state-in-effect -- read once on mount
  }, []);

  // One card forward (or back), wrapping at either end.
  const step = (dir: 1 | -1) => {
    const el = listRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const stride = card.getBoundingClientRect().width + gap;
    const max = el.scrollWidth - el.clientWidth;
    let left = el.scrollLeft + dir * stride;
    if (dir === 1 && el.scrollLeft >= max - 4) left = 0;
    if (dir === -1 && el.scrollLeft <= 4) left = max;
    el.scrollTo({ left, behavior: reduced ? "auto" : "smooth" });
    setTick((t) => t + 1); // restart the autoplay timer after a manual step
  };

  // Autoplay. Re-armed after every step, so a click gets the full interval too.
  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setTimeout(() => step(1), INTERVAL);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- step only reads refs and `reduced`
  }, [paused, reduced, tick]);

  const arrow =
    "flex size-12 items-center justify-center rounded-lg border transition-colors";

  return (
    <div className="flex flex-col gap-8 tablet:gap-10">
      <ul
        ref={listRef}
        aria-label="Success stories"
        aria-roledescription="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        // --bleed: distance from the content edge to the window edge (side padding, plus the margin
        // either side of the 1440px container on wider screens). The row spans the window while the
        // first card lines up with the content.
        className="-mx-(--bleed) flex snap-x snap-mandatory scroll-px-(--bleed) gap-4 overflow-x-auto px-(--bleed) pb-2 [--bleed:calc(max(0px,(100vw-var(--container-site))/2)+var(--section-px))] [scrollbar-width:none] tablet:gap-5"
        style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
      >
        {items.map((s) => (
          <li
            key={s.name}
            className="flex min-h-[320px] w-[82%] shrink-0 snap-start flex-col rounded-card border border-ink/10 bg-card p-6 tablet:w-[340px] laptop:min-h-[340px] laptop:w-[360px] laptop:p-7"
          >
            {/* Outcome line over a dashed rule. */}
            <p className="type-label flex items-center gap-2 border-b border-dashed border-ink/20 pb-4 text-mid">
              <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-mid" />
              {s.outcome}
            </p>

            <blockquote className="type-p-lg mt-5 text-ink/85">{s.quote}</blockquote>

            <div className="mt-auto flex items-end justify-between gap-4 pt-8">
              <div className="flex flex-col gap-0.5">
                <span className="type-h6">{s.name}</span>
                <span className="type-p-sm text-ink/60">{s.role}</span>
              </div>
              <span className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-stone">
                <Image src={s.photo} alt={s.name} fill sizes="56px" className="object-cover object-top" />
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous story"
          className={`${arrow} border-ink/20 hover:border-ink`}
        >
          <ArrowRight className="size-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next story"
          className={`${arrow} border-ink bg-ink text-cream hover:bg-ink/85`}
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
