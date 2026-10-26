import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { heroQuote as hero } from "@/content/home";
import { bookLink } from "@/content/nav";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { HeroMotion } from "./HeroMotion";
import { HeroVideo } from "./HeroVideo";

/** Inline CSS custom properties, typed. */
const vars = (v: Record<string, string | number>) => v as CSSProperties;

/**
 * Homepage hero, laid out like the aipowered.xyz hero in our own style:
 * a full-screen event video under an ink wash, the headline bottom left, two buttons.
 * The previous hero lives on in HeroSpotlight.tsx.
 */
/** Saved, not on the page: the quote over the full-screen video. Swap it for <Hero /> in app/page.tsx to bring it back. */
export function HeroQuote() {
  const [first, second] = hero.headline;

  return (
    <Section tone="ink" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <HeroMotion />

      {/* Event video: settles in from a slight zoom, then drifts slower than the page. */}
      <div aria-hidden className="parallax-bg absolute inset-0 -z-10">
        <div className="hero-settle absolute inset-0">
          <HeroVideo src={hero.video.src} poster={hero.video.poster} />
        </div>
        {/* Ink wash: lighter at the top so the room shows, near-solid behind the words. */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(90deg, rgba(23,51,42,0.85) 0%, rgba(23,51,42,0.55) 55%, rgba(23,51,42,0.35) 100%)",
              "linear-gradient(180deg, rgba(23,51,42,0.6) 0%, rgba(23,51,42,0.5) 35%, rgba(23,51,42,0.95) 100%)",
            ].join(","),
          }}
        />
      </div>

      {/* One screen tall; everything sits at the bottom left. */}
      <Container
        flush="top"
        className="relative flex min-h-[max(calc(100svh-80px),560px)] flex-col justify-end pt-12"
      >
        <div className="parallax-fade flex max-w-[1000px] flex-col gap-8 tablet:gap-10">
          <div className="flex flex-col gap-5 tablet:gap-6">
            <span className="hero-fade" style={vars({ "--delay": "120ms" })}>
              <Eyebrow className="text-cream">{hero.eyebrow}</Eyebrow>
            </span>
            {/* Each line rises out of its own mask; the second takes the italic accent. */}
            <h1
              id="hero-title"
              className="font-serif text-[40px] normal-case leading-[1.02] tracking-[-0.01em] text-cream min-[420px]:text-[48px] tablet:text-[88px] laptop:text-[104px] desktop:text-[120px]"
            >
              <span className="hero-line">
                <span className="hero-line-inner" style={vars({ "--delay": "320ms" })}>
                  {first}
                </span>
              </span>{" "}
              <span className="hero-line">
                <span className="hero-line-inner voice" style={vars({ "--delay": "480ms" })}>
                  {second}
                </span>
              </span>
            </h1>
          </div>

          <div className="hero-fade flex flex-col gap-3 tablet:flex-row" style={vars({ "--delay": "780ms" })}>
            <Button href={bookLink.href} variant="cream">
              {bookLink.label}
              <ArrowUpRight />
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline-light">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
