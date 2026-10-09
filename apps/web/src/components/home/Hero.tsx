import Image from "next/image";
import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { hero } from "@/content/home";
import { HeroMotion } from "./HeroMotion";
import { asset } from "@rosspower/ui/lib/asset";

/** Inline CSS custom properties, typed. */
const vars = (v: Record<string, string | number>) => v as CSSProperties;

const HERO_MASK =
  "linear-gradient(180deg, #000 58%, transparent 96%), linear-gradient(90deg, transparent 0%, #000 14%, #000 86%, transparent 100%)";

/** Thin four-point lens flare. Decorative. */
function Flare({ className, delay }: { className?: string; delay: number }) {
  return (
    <span aria-hidden className={`hero-twinkle pointer-events-none absolute ${className}`} style={vars({ "--delay": `${delay}ms` })}>
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(238,233,223,0.8),transparent)]" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(238,233,223,0.8),transparent)]" />
      <span className="absolute top-1/2 left-1/2 size-1 -translate-1/2 rounded-full bg-cream shadow-[0_0_12px_3px_rgba(143,179,217,0.8)]" />
    </span>
  );
}

export function Hero() {
  return (
    // Pulled up under the fixed, transparent header so the hero fills the whole screen.
    <Section tone="ink" aria-label="Introduction" className="relative isolate -mt-(--header-h) overflow-hidden">
      <HeroMotion />
      {/* Stage light: a cone from above, a pool behind the figure, a faint grid. Drifts on scroll. */}
      <div aria-hidden className="parallax-bg absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(55% 40% at 50% 0%, rgba(143,179,217,0.28), transparent 70%)",
              "radial-gradient(40% 45% at 50% 70%, rgba(79,127,179,0.30), transparent 70%)",
              "linear-gradient(180deg, transparent 70%, rgba(16,19,23,0.9))",
            ].join(","),
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(238,233,223,1)_1px,transparent_1px),linear-gradient(90deg,rgba(238,233,223,1)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]"
        />
      </div>

      {/* Exactly one screen tall; content starts below the header. */}
      <Container
        flush="both"
        className="relative flex min-h-svh flex-col pt-[calc(var(--header-h)+48px)] tablet:h-svh tablet:min-h-[832px] tablet:pt-[calc(var(--header-h)+72px)] laptop:min-h-[752px]"
      >
        <Flare className="top-[calc(var(--header-h)+24px)] left-(--section-px) size-24 tablet:size-40 laptop:top-[calc(var(--header-h)+88px)] laptop:size-56" delay={1500} />
        <Flare className="top-[calc(var(--header-h)+112px)] right-(--section-px) size-16 tablet:size-32 laptop:top-[calc(var(--header-h)+176px)] laptop:size-44" delay={1750} />

        {/* Name: typed out letter by letter; drifts slower than the page on scroll. */}
        <div className="parallax-slow parallax-fade relative z-0 flex flex-col items-center text-center">
          <p style={vars({ "--delay": "100ms" })} className="hero-fade type-label tracking-[0.3em] text-cream/80 uppercase tablet:text-[15px] tablet:tracking-[0.4em] laptop:text-[18px]">
            {hero.label}
          </p>
          <h1
            className="type-glow mt-5 whitespace-nowrap text-cream tablet:mt-8"
            style={vars({ "--type-start": "450ms", "--count": hero.name.length })}
          >
            <span className="sr-only">{hero.name}</span>
            <span aria-hidden>
              {hero.name.split("").map((char, i) => (
                <span key={i} className="type-char" style={vars({ "--i": i })}>
                  {char}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Phones: the figure fills the space between the name and the scroll cue. Tablet up: positioned against the hero. */}
        <div className="flex flex-1 flex-col tablet:contents">
          {/* Ross, standing in front of his name. Edge to edge on phones, scales with the screen height above. */}
          <div className="relative z-10 -mt-[44px] max-h-[960px] min-h-[380px] w-[calc(100%+2*var(--section-px))] max-w-[520px] flex-1 self-center tablet:absolute tablet:max-h-none tablet:min-h-0 tablet:top-[calc(var(--header-h)+104px)] tablet:left-1/2 tablet:mt-0 tablet:aspect-[682/1024] tablet:h-[calc(100%-48px)] tablet:w-auto tablet:max-w-none tablet:-translate-x-1/2 laptop:top-[calc(var(--header-h)+132px)] laptop:h-[calc(100%+8px)] desktop:top-[calc(var(--header-h)+144px)] desktop:h-[calc(100%+48px)]">
            {/* Two layers so the scroll drift and the entrance rise don't fight over transform. */}
            <div className="parallax-mid absolute inset-0">
              <div className="hero-rise absolute inset-0" style={vars({ "--delay": "1050ms" })}>
                <Image
                  src={asset("images/ross/ross-cutout.png")}
                  alt="Ross Power"
                  fill
                  priority
                  sizes="(min-width: 810px) 680px, (min-width: 520px) 520px, 100vw"
                  className="object-cover object-top"
                  style={{
                    filter: "drop-shadow(0 0 32px rgba(143,179,217,0.5))",
                    // Fade the bottom and both sides so the photo's frame never shows.
                    maskImage: HERO_MASK,
                    WebkitMaskImage: HERO_MASK,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                  }}
                />
              </div>
            </div>
          </div>

          <a
            href="#numbers"
            className="parallax-fade-fast group relative z-20 -mt-16 flex flex-col items-center gap-3 self-center pb-6 text-cream/70 transition-colors hover:text-cream tablet:absolute tablet:bottom-0 tablet:left-1/2 tablet:mt-0 tablet:-translate-x-1/2 tablet:pb-8"
          >
            <span className="hero-fade flex flex-col items-center gap-3" style={vars({ "--delay": "2100ms" })}>
              <span className="type-label tracking-[0.2em] uppercase">{hero.scrollCue}</span>
              <span aria-hidden className="relative h-12 w-px overflow-hidden bg-cream/20">
                <span className="scroll-cue-dot absolute inset-x-0 top-0 h-1/2 bg-cream" />
              </span>
            </span>
          </a>
        </div>
      </Container>
    </Section>
  );
}
