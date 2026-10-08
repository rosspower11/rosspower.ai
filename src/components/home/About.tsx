import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { about } from "@/content/home";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Container className="grid gap-10 laptop:grid-cols-12 laptop:gap-x-10">
        <div className="flex flex-col gap-5 laptop:col-span-5">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 id="about-title">
            Meet your speaker, <span className="voice">Ross Power</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 laptop:col-span-6 laptop:col-start-7 laptop:pt-10">
          {about.bio.map((para) => (
            <p key={para} className="type-p-lg measure">
              {para}
            </p>
          ))}
          <div className="flex flex-wrap gap-3">
            <Button href="/#speaking" variant="ink">
              Watch Ross speak
              <ArrowRight />
            </Button>
            <Button href="/#ai-powered" variant="outline">
              About AI Powered
            </Button>
          </div>
        </div>

        <div className="relative laptop:col-span-12">
          <MediaFrame
            src={about.photo.src}
            alt={about.photo.alt}
            ratio="16 / 9"
            radius="panel"
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="tablet:aspect-[21/9]!"
            imageClassName="object-[50%_35%]"
          />
          <figure className="relative -mt-14 ml-4 max-w-[440px] rounded-card bg-ink p-6 text-cream tablet:absolute tablet:bottom-8 tablet:left-8 tablet:mt-0 tablet:ml-0 tablet:p-8">
            <blockquote>
              <p className="font-serif text-[32px] leading-[1.02] italic tablet:text-[40px] laptop:text-[48px]">“{about.quote}”</p>
            </blockquote>
            <figcaption className="type-label mt-3 text-cream/70">Ross Power</figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
