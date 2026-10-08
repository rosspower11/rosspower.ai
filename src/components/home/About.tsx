import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "@/components/ui/Icon";
import { about } from "@/content/home";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      {/* Shares the cream ground with the stats above, so it skips its own top padding. */}
      <Container flush="top" className="flex flex-col gap-10 laptop:gap-14">
        {/* Tall photo with the section title floating on it. */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-stone text-cream tablet:aspect-[4/3] laptop:aspect-auto laptop:h-[720px] desktop:h-[800px]">
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover object-[60%_35%]"
          />
          {/* Darken the lower left so the title reads on a bright room. */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(16,19,23,0) 35%, rgba(16,19,23,0.85) 100%), linear-gradient(90deg, rgba(16,19,23,0.55) 0%, rgba(16,19,23,0) 60%)",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 tablet:p-10 laptop:flex-row laptop:items-end laptop:justify-between laptop:p-14">
            <div className="flex max-w-[640px] flex-col gap-4">
              <Eyebrow className="text-cream/85">{about.eyebrow}</Eyebrow>
              <h2 id="about-title" className="text-cream">
                Meet your speaker, <span className="voice">Ross Power</span>
              </h2>
            </div>
            <figure className="hidden max-w-[360px] rounded-card border border-cream/15 bg-ink/55 p-6 backdrop-blur-md laptop:block">
              <blockquote>
                <p className="font-serif text-[32px] leading-[1.05] italic desktop:text-[36px]">“{about.quote}”</p>
              </blockquote>
              <figcaption className="type-label mt-3 text-cream/70">Ross Power</figcaption>
            </figure>
          </div>
        </div>

        <div className="grid gap-8 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col gap-5 laptop:col-span-7">
            {about.bio.map((para) => (
              <p key={para} className="type-p-lg measure">
                {para}
              </p>
            ))}
          </div>
          {/* Phones and tablets: the quote sits here instead of on the photo. */}
          <figure className="rounded-card bg-ink p-6 text-cream laptop:hidden">
            <blockquote>
              <p className="font-serif text-[32px] leading-[1.05] italic">“{about.quote}”</p>
            </blockquote>
            <figcaption className="type-label mt-3 text-cream/70">Ross Power</figcaption>
          </figure>
          <div className="flex flex-wrap gap-3 laptop:col-span-4 laptop:col-start-9 laptop:items-start laptop:justify-end">
            <Button href="/#speaking" variant="ink">
              Watch Ross speak
              <ArrowRight />
            </Button>
            <Button href="/#ai-powered" variant="outline">
              About AI Powered
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
