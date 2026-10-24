import { Button } from "@/components/ui/Button";
import { Logo } from "@rosspower/ui/components/Logo";
import { hero } from "@/content/home";
import { bookLink } from "@/content/nav";
import { HeroVideo } from "./HeroVideo";

/**
 * Homepage hero, as on Andi's board: the event video in a rounded card under a forest wash,
 * the Ross Power logo in cream bottom left, and two buttons. The earlier heroes are kept in HeroQuote.tsx
 * and HeroSpotlight.tsx.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto w-full max-w-site px-(--section-px) pt-6 pb-10">
      <div className="relative h-[560px] overflow-hidden rounded-panel bg-ink [--hero-pad:24px] laptop:h-[640px] laptop:[--hero-pad:56px]">
        <div aria-hidden className="absolute inset-0">
          <HeroVideo src={hero.video.src} poster={hero.video.poster} />
          <div className="absolute inset-0 bg-[rgba(23,51,42,0.55)]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-7 p-(--hero-pad)">
          {/* The Ross Power logo in cream, as wide as the card allows; the heading text is for screen readers and search. */}
          <h1 id="hero-title" className="w-full max-w-[1040px]">
            <span className="sr-only">{hero.name}</span>
            <Logo className="w-full" color="#f1ece1" />
          </h1>
          <div className="flex flex-wrap gap-3">
            <Button href={bookLink.href} variant="cream">
              {bookLink.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline-light">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
