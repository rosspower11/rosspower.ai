import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Play } from "@/components/ui/Icon";
import { hero } from "@/content/home";
import { bookLink } from "@/content/nav";

const HERO_MASK =
  "linear-gradient(180deg, #000 58%, transparent 96%), linear-gradient(90deg, transparent 0%, #000 14%, #000 86%, transparent 100%)";

/** Thin four-point lens flare. Decorative. */
function Flare({ className }: { className?: string }) {
  return (
    <span aria-hidden className={`pointer-events-none absolute ${className}`}>
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(238,233,223,0.8),transparent)]" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(238,233,223,0.8),transparent)]" />
      <span className="absolute top-1/2 left-1/2 size-1 -translate-1/2 rounded-full bg-cream shadow-[0_0_12px_3px_rgba(143,179,217,0.8)]" />
    </span>
  );
}

export function Hero() {
  return (
    <Section tone="ink" aria-label="Introduction" className="relative isolate overflow-hidden">
      {/* Stage light: a cone from above, a pool behind the figure, a faint grid. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(55% 40% at 50% 0%, rgba(143,179,217,0.28), transparent 70%)",
            "radial-gradient(40% 45% at 50% 70%, rgba(79,127,179,0.30), transparent 70%)",
            "linear-gradient(180deg, transparent 70%, rgba(16,19,23,0.9))",
          ].join(","),
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(238,233,223,1)_1px,transparent_1px),linear-gradient(90deg,rgba(238,233,223,1)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]"
      />

      {/* Fills the screen under the 72px sticky header. */}
      <Container
        flush="both"
        className="relative flex min-h-[calc(100svh-4.5rem)] flex-col pt-8 tablet:h-[calc(100svh-4.5rem)] tablet:min-h-[760px] tablet:pt-10 laptop:min-h-[680px]"
      >
        <Flare className="top-6 left-(--section-px) size-24 tablet:size-40 laptop:top-14 laptop:size-56" />
        <Flare className="top-28 right-(--section-px) size-16 tablet:size-32 laptop:top-36 laptop:size-44" />

        {/* Name */}
        <div className="relative z-0 flex flex-col items-center text-center">
          <p className="type-label tracking-[0.4em] text-cream/80 uppercase tablet:text-[15px] laptop:text-[18px]">
            {hero.label}
          </p>
          <h1
            className="mt-3 whitespace-nowrap text-cream tablet:mt-4"
            style={{
              textShadow:
                "0 0 16px rgba(143,179,217,0.55), 0 0 56px rgba(143,179,217,0.35), 0 0 140px rgba(143,179,217,0.3)",
            }}
          >
            {hero.name}
          </h1>
        </div>

        {/* Phones: figure + quote + actions stack at the bottom. Tablet up: positioned against the hero. */}
        <div className="mt-auto flex flex-col tablet:contents">
          {/* Ross, standing in front of his name. Edge to edge on phones, scales with the hero height above. */}
          <div className="relative z-10 -mt-[44px] aspect-[4/5] w-[calc(100%+2*var(--section-px))] max-w-[520px] self-center tablet:absolute tablet:top-[56px] tablet:left-1/2 tablet:mt-0 tablet:aspect-[682/1024] tablet:h-[calc(100%+24px)] tablet:w-auto tablet:max-w-none tablet:-translate-x-1/2 laptop:top-[84px] laptop:h-[calc(100%+80px)] desktop:top-[96px] desktop:h-[calc(100%+120px)]">
            <Image
              src="/images/ross/ross-cutout.png"
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

          {/* Quote (left on laptop+) and actions (always centred at the bottom) */}
          <div className="relative z-20 -mt-24 flex flex-col items-center gap-6 pb-(--section-py) text-center tablet:absolute tablet:inset-x-(--section-px) tablet:bottom-0 tablet:mt-0 laptop:grid laptop:grid-cols-[1fr_auto_1fr] laptop:items-end laptop:text-left">
            <figure className="flex max-w-[360px] flex-col gap-2 laptop:max-w-[320px] laptop:justify-self-start">
              <blockquote>
                <p className="font-serif text-[28px] leading-[1.05] text-cream italic tablet:text-[32px] desktop:text-[36px]">
                  “{hero.quote}”
                </p>
              </blockquote>
              <figcaption className="type-label text-cream/60">Ross Power</figcaption>
            </figure>
            <div className="flex w-full flex-col gap-3 tablet:w-auto tablet:flex-row">
              <Button href={bookLink.href} variant="accent">
                {bookLink.label}
                <ArrowDown />
              </Button>
              <Button href="/#speaking" variant="outline-light">
                Watch Ross speak
                <Play className="size-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
