"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Photo = { src: string; alt: string };
type Format = { length: string; title: string; body: string; photos: Photo[] };

const INTERVAL = 4000;

/**
 * Slideshow (left) + numbered list (right), the same height.
 * - The slideshow runs through all the photos (01 → 02 → … → 06) on its own.
 * - Scrolling a row to the middle of the screen makes it active and jumps the
 *   slideshow to that format's first photo; it keeps running from there.
 * - Rows fade up the first time they enter. Phones: each row shows its own photo.
 */
export function SpeakingFormats({ formats }: { formats: Format[] }) {
  const slides = useMemo(
    () => formats.flatMap((f, fi) => f.photos.map((photo) => ({ ...photo, format: fi }))),
    [formats],
  );
  const firstSlideOf = useMemo(
    () => formats.map((_, fi) => slides.findIndex((s) => s.format === fi)),
    [formats, slides],
  );

  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [seen, setSeen] = useState<boolean[]>(() => formats.map(() => false));

  // Autoplay: the timer restarts on every slide change, including a scroll jump.
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(() => setSlide((s) => (s + 1) % slides.length), INTERVAL);
    return () => window.clearTimeout(id);
  }, [slide, autoplay, slides.length]);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean) as HTMLLIElement[];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) setAutoplay(false); // eslint-disable-line react-hooks/set-state-in-effect -- read once on mount

    // Reveal: each row once, as it enters.
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = rows.indexOf(e.target as HTMLLIElement);
          setSeen((prev) => (prev[i] ? prev : prev.map((v, j) => (j === i ? true : v))));
          reveal.unobserve(e.target);
        });
      },
      { threshold: reduced ? 0 : 0.25 },
    );

    rows.forEach((row) => reveal.observe(row));

    // Active: the row whose centre is nearest the middle of the screen, while the list is on screen.
    // Only a change of row jumps the slideshow, so the photo keeps running in between.
    let raf = 0;
    let current = -1;
    const update = () => {
      raf = 0;
      const list = rows[0]?.parentElement?.getBoundingClientRect();
      if (!list || list.bottom < 0 || list.top > window.innerHeight) return;
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      rows.forEach((row, i) => {
        const r = row.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      if (best === current) return;
      current = best;
      setActive(best);
      setSlide(firstSlideOf[best]);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      reveal.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [firstSlideOf]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="grid gap-10 tablet:grid-cols-2 tablet:items-stretch tablet:gap-10 laptop:gap-16">
      {/* Left: slideshow, stretched to the list's height. Tablet up only. */}
      <div className="hidden tablet:block">
        <div className="relative h-full min-h-[440px] overflow-hidden rounded-panel bg-stone">
          {slides.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 1440px) 620px, 45vw"
              aria-hidden={i !== slide}
              className={cn(
                "object-cover object-[50%_30%] transition-[opacity,transform] duration-1000 ease-out",
                i === slide ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
              )}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-[linear-gradient(180deg,transparent,rgba(16,19,23,0.6))] p-6 pt-20 text-cream laptop:p-8">
            <div className="flex items-end justify-between">
              <span className="type-label">{formats[slides[slide].format].title}</span>
              <span className="type-label tabular-nums" aria-live="polite">
                {pad(slide + 1)} / {pad(slides.length)}
              </span>
            </div>
            {/* One segment per photo; the current one fills as a timer. */}
            <div className="flex gap-1.5" aria-hidden>
              {slides.map((s, i) => (
                <span key={s.src} className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-cream/30">
                  {i < slide && <span className="absolute inset-0 bg-cream" />}
                  {i === slide && (
                    <span
                      key={slide}
                      className={cn("absolute inset-y-0 left-0 bg-cream", autoplay ? "speaking-progress" : "w-full")}
                      style={{ animationDuration: `${INTERVAL}ms` }}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: the list. */}
      <ol className="flex flex-col border-t border-ink/20">
        {formats.map((f, i) => (
          <li
            key={f.title}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className={cn(
              "flex flex-col gap-4 border-b border-ink/20 py-8 transition-[opacity,transform] duration-700 ease-out laptop:py-10",
              seen[i] ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              // Dim the rows that aren't in focus, tablet up.
              seen[i] && i !== active && "tablet:opacity-45",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className={cn(
                  "font-serif text-[48px] leading-[0.8] tabular-nums transition-colors duration-500 laptop:text-[64px]",
                  i === active ? "text-mid" : "text-ink/40",
                )}
              >
                0{i + 1}
              </span>
              <span className="type-label rounded-full border border-ink/25 px-3 py-1.5 whitespace-nowrap">{f.length}</span>
            </div>
            <h3>{f.title}</h3>
            <p className="type-p max-w-[600px] text-ink/80">{f.body}</p>
            {/* Phones: the format's first photo sits with its row. */}
            <div className="relative mt-2 aspect-[4/3] overflow-hidden rounded-card bg-stone tablet:hidden">
              <Image
                src={f.photos[0].src}
                alt={f.photos[0].alt}
                fill
                sizes="100vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
