import { Logo } from "@rosspower/ui/components/Logo";
import { hero } from "@/content/home";
import { HeroVideo } from "./HeroVideo";

/**
 * Homepage hero, as on Andi's board: the event video in a rounded card under a forest wash, with the
 * Ross Power logo in cream, at the bottom, centred. Book ross and see the talks live in the header.
 * The earlier heroes are kept in HeroQuote.tsx and HeroSpotlight.tsx.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto w-full max-w-site px-(--section-px) pt-6 pb-10">
      <div className="relative h-[560px] overflow-hidden rounded-panel bg-ink [--hero-pad:24px] laptop:h-[640px] laptop:[--hero-pad:56px]">
        <div aria-hidden className="absolute inset-0">
          <HeroVideo src={hero.video.src} poster={hero.video.poster} />
          <div className="absolute inset-0 bg-[rgba(23,51,42,0.55)]" />
        </div>
        <div className="absolute inset-0 flex items-end justify-center p-(--hero-pad)">
          {/* The Ross Power logo in cream, bottom centre, as wide as the card allows; the heading text is for screen readers and search. */}
          <h1 id="hero-title" className="w-full max-w-[1040px]">
            <span className="sr-only">{hero.name}</span>
            <Logo className="w-full" color="#f1ece1" />
          </h1>
        </div>
      </div>
    </section>
  );
}
