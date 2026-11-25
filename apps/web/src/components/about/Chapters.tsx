"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@rosspower/ui/lib/cn";

type Photo = { src: string; alt: string };
type Chapter = { number: string; title: string; body: readonly (string | readonly string[])[]; photos: readonly Photo[] };

/** Fades and slides in the first time it's on screen (straight away with reduced motion). */
function Reveal({ from, delay = 0, className, children }: { from: "left" | "right" | "up"; delay?: number; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true); // eslint-disable-line react-hooks/set-state-in-effect -- read once on mount
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = from === "left" ? "translate3d(-40px,0,0)" : from === "right" ? "translate3d(40px,0,0)" : "translate3d(0,28px,0)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : hidden,
        transition: "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: shown ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

/** Slight tilts and offsets so the photos sit like prints on a table (from aipowered.xyz/about). */
const PRINTS = [
  "-rotate-[2deg] justify-self-start",
  "rotate-[1.75deg] justify-self-end mt-6",
  "-rotate-[1.25deg] -mt-4 justify-self-center",
  "rotate-[2deg] -mt-2 justify-self-end",
  "-rotate-[1.5deg] col-span-2 -mt-3 w-[48%] max-w-[240px] justify-self-center",
];

function Prints({ photos, onOpen }: { photos: readonly Photo[]; onOpen: (photo: Photo, trigger: HTMLButtonElement) => void }) {
  return (
    <div className="mx-auto grid w-full max-w-[520px] grid-cols-2 items-start gap-x-3 tablet:max-w-[560px]">
      {photos.map((photo, i) => (
        <figure
          key={photo.src}
          className={cn(
            "w-full max-w-[250px] rounded-[12px] bg-card p-2 pb-5 ring-1 ring-ink/10 transition-transform duration-300 hover:z-10 hover:rotate-0",
            PRINTS[i % PRINTS.length],
          )}
        >
          <button
            type="button"
            onClick={(e) => onOpen(photo, e.currentTarget)}
            aria-label={`View larger: ${photo.alt}`}
            className="relative block aspect-[5/4] w-full cursor-zoom-in overflow-hidden rounded-[8px] bg-sand"
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="250px" className="object-cover" />
          </button>
        </figure>
      ))}
    </div>
  );
}

/**
 * Ross's story as a timeline: one band per chapter, cream and wash in turn. Tablet up, the text and the photos
 * swap sides each chapter around a centre line that fills as you scroll; phones get one column with the line on
 * the left. A square marks each chapter on the line. Photos open larger in a <dialog> (×, Esc or a click outside).
 */
export function Chapters({ chapters }: { chapters: readonly Chapter[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<Photo | null>(null);

  // The line fills from the top of the timeline as it scrolls through the screen.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFill(1); // eslint-disable-line react-hooks/set-state-in-effect -- read once on mount
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      setFill(Math.min(Math.max((vh - r.top) / (r.height + vh), 0), 1));
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
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const show = (photo: Photo, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setOpen(photo);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <div ref={trackRef} className="relative overflow-x-clip">
        {/* The line: a faint track and the filled part, left on phones, centred from tablet up. */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[calc(var(--section-px)-4px)] z-[1] w-px bg-mid/25 tablet:left-1/2" />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-[calc(var(--section-px)-4px)] z-[2] w-px bg-mid tablet:left-1/2"
          style={{ height: `${fill * 100}%` }}
        />

        {chapters.map((c, i) => {
          const textLeft = i % 2 === 0;
          return (
            <article
              key={c.number}
              id={`chapter-${c.number}`}
              aria-labelledby={`chapter-${c.number}-title`}
              className={cn("relative py-(--section-py)", i % 2 ? "bg-wash" : "bg-cream")}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute top-[calc(var(--section-py)+10px)] left-[calc(var(--section-px)-4px)] z-[3] size-3 -translate-x-1/2 border-2 bg-mid tablet:left-1/2 tablet:size-4 tablet:border-[3px]",
                  i % 2 ? "border-wash" : "border-cream",
                )}
              />
              <div className="mx-auto grid w-full max-w-site gap-10 pr-(--section-px) pl-[calc(var(--section-px)+20px)] tablet:grid-cols-2 tablet:gap-x-12 tablet:pl-(--section-px) desktop:gap-x-16">
                <Reveal
                  from={textLeft ? "left" : "right"}
                  className={cn(textLeft ? "tablet:col-start-1 tablet:pr-4" : "tablet:col-start-2 tablet:row-start-1 tablet:pl-4")}
                >
                  <div className="flex flex-col gap-6">
                    <h3 id={`chapter-${c.number}-title`} className="font-serif text-[32px] leading-[1.1] font-normal tracking-[-0.01em] tablet:text-[40px]">
                      <span className="text-mid italic">{c.number}</span> {c.title}
                    </h3>
                    <div className="flex flex-col gap-5">
                      {c.body.map((part) =>
                        typeof part === "string" ? (
                          <p key={part.slice(0, 48)} className="type-p measure">
                            {part}
                          </p>
                        ) : (
                          <ul key={part[0]} className="type-p measure flex list-disc flex-col gap-2 pl-5 marker:text-mid">
                            {part.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ),
                      )}
                    </div>
                  </div>
                </Reveal>
                <Reveal
                  from={textLeft ? "right" : "left"}
                  delay={120}
                  className={cn(textLeft ? "tablet:col-start-2 tablet:pl-4" : "tablet:col-start-1 tablet:row-start-1 tablet:pr-4")}
                >
                  <Prints photos={c.photos} onOpen={show} />
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={open?.alt}
        onClose={() => {
          setOpen(null);
          triggerRef.current?.focus();
        }}
        // A click on the backdrop lands on the dialog itself (the picture covers the rest).
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[95dvh] max-w-[min(1200px,95vw)] bg-transparent p-0 backdrop:bg-[rgba(15,30,51,0.9)]"
      >
        {open ? (
          // eslint-disable-next-line @next/next/no-img-element -- natural size, unknown up front
          <img src={open.src} alt={open.alt} className="block h-auto max-h-[90dvh] w-auto max-w-full rounded-[8px]" />
        ) : null}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="fixed top-5 right-5 flex size-11 items-center justify-center rounded-full border-[1.5px] border-cream/40 text-cream transition-colors hover:bg-cream hover:text-ink"
        >
          <span className="absolute h-[1.5px] w-4 rotate-45 bg-current" />
          <span className="absolute h-[1.5px] w-4 -rotate-45 bg-current" />
        </button>
      </dialog>
    </>
  );
}
