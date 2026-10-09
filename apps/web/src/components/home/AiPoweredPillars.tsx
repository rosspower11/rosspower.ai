"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import { useState } from "react";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { cn } from "@rosspower/ui/lib/cn";
import { BookIcon, GearsIcon, PulseIcon } from "./AiPoweredIcons";

type Pillar = { title: string; body: string; desc: string; href: string; image: { src: string; alt: string } };

const icons: ComponentType[] = [BookIcon, GearsIcon, PulseIcon];

/**
 * Laptop up: three panels in a row. The open one (hovered, clicked or tabbed to) widens, fades in
 * its photo and shows its description and link; the others close down to icon and title.
 * Below laptop: stacked cards with everything showing (tablet: icon left, text right).
 */
export function AiPoweredPillars({ pillars }: { pillars: Pillar[] }) {
  const [active, setActive] = useState(0);

  return (
    <ul className="flex flex-col gap-4 tablet:gap-5 laptop:h-[440px] laptop:flex-row desktop:h-[460px]">
      {pillars.map((p, i) => {
        const Icon = icons[i];
        const open = i === active;
        return (
          <li
            key={p.title}
            onMouseEnter={() => setActive(i)}
            className={cn(
              "aip-card relative flex flex-col overflow-hidden rounded-card border border-ink/10 bg-card p-6 text-ink transition-[flex-grow,background-color,color,border-color] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] tablet:flex-row tablet:gap-8 tablet:p-8 laptop:min-w-0 laptop:basis-0 laptop:flex-col laptop:gap-0",
              open
                ? "laptop:grow-[2] laptop:border-ink laptop:bg-ink laptop:text-cream laptop:[--voice:var(--color-wash)]"
                : "laptop:grow",
            )}
          >
            {/* Laptop: the open panel's photo fades in behind a dark wash so the text reads. */}
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-700 laptop:block",
                open && "laptop:opacity-100",
              )}
            >
              <Image
                src={p.image.src}
                alt=""
                fill
                sizes="(min-width: 1440px) 640px, 50vw"
                className={cn(
                  "object-cover object-[50%_35%] transition-transform duration-[1200ms] ease-out",
                  open ? "scale-100" : "scale-110",
                )}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(16,19,23,0.45) 0%, rgba(16,19,23,0.55) 40%, rgba(16,19,23,0.92) 100%)",
                }}
              />
            </div>

            {/* Laptop: clicking or tabbing to a closed panel opens it. */}
            <button
              type="button"
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-expanded={open}
              aria-label={`${p.title} ${p.body}`}
              className={cn("absolute inset-0 z-10 hidden cursor-pointer laptop:block", open && "pointer-events-none")}
            />

            <div className="relative flex items-start justify-between tablet:shrink-0">
              {/* Icon tile: soft wash with a fine border and top highlight; frosted glass on the open panel's photo. */}
              <span
                className={cn(
                  "flex size-16 items-center justify-center rounded-[18px] border border-ink/10 bg-wash/70 p-3.5 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(16,19,23,0.06)] transition-[background-color,border-color,color,box-shadow] duration-700 laptop:size-[68px]",
                  open &&
                    "laptop:border-cream/25 laptop:bg-cream/10 laptop:text-cream laptop:shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] laptop:backdrop-blur-md",
                )}
              >
                <Icon />
              </span>
              <span className="font-serif text-[32px] leading-none tabular-nums opacity-50 tablet:hidden laptop:block">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="relative mt-8 flex flex-1 flex-col tablet:mt-0 laptop:mt-auto laptop:flex-none laptop:pt-10">
              {/* All sans: the second half starts its own line in the title's second colour. */}
              <h3>
                {p.title} <span className="block text-(--voice)">{p.body}</span>
              </h3>

              {/* Laptop: the description and link slide open with the panel. */}
              <div
                className={cn(
                  "grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
                  open ? "laptop:grid-rows-[1fr] laptop:opacity-100" : "laptop:grid-rows-[0fr] laptop:opacity-0",
                )}
              >
                {/* Fixed width on laptop so the text doesn't reflow while the panel grows. */}
                <div className="min-h-0 overflow-hidden laptop:w-[440px] desktop:w-[520px]">
                  <p className="type-p-sm mt-3 max-w-[520px] opacity-75">{p.desc}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative z-20 mt-6 flex items-center justify-between gap-4 border-t border-ink/10 pt-5",
                      open ? "laptop:border-cream/15" : "laptop:invisible",
                    )}
                  >
                    <span className="type-label tracking-[0.12em] uppercase">Explore {p.title.toLowerCase()}</span>
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream",
                        "laptop:border-cream/30 laptop:group-hover:border-cream laptop:group-hover:bg-cream laptop:group-hover:text-ink",
                      )}
                    >
                      <ArrowUpRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
