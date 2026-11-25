import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { Chapters } from "@/components/about/Chapters";
import { ShortBios } from "@/components/about/ShortBios";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutGraph } from "@/lib/structured-data";
import { bio, story } from "@/content/bio";
import { bookLink } from "@/content/nav";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";

export const metadata: Metadata = pageMetadata({ path: "/about", title: bio.meta.title, description: bio.meta.description, type: "profile" });

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutGraph} />
      <Section aria-labelledby="bio-title">
        {/* Tablet up: portrait left (stays in view), bio right. Phones: portrait, then bio. */}
        <Container className="grid gap-10 tablet:grid-cols-12 tablet:gap-x-8 laptop:gap-x-10">
          <div className="tablet:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-stone tablet:sticky tablet:top-8">
              <Image
                src={bio.portrait.src}
                alt={bio.portrait.alt}
                fill
                priority
                sizes="(min-width: 1200px) 520px, (min-width: 810px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 tablet:col-span-7 tablet:col-start-6 laptop:col-span-6 laptop:col-start-7 laptop:pt-6">
            <div className="flex flex-col gap-5">
              {/* normal-case: the shared h1 style is all caps (the hero's name). */}
              <h1 id="bio-title" className="type-h2 normal-case">
                About <span className="voice">Ross Power</span>
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              {bio.paragraphs.map((para) => (
                <p key={para.slice(0, 24)} className="type-p-lg measure text-ink/85">
                  {para}
                </p>
              ))}
            </div>
            <Button href={bookLink.href} variant="ink" className="self-start">
              Book Ross
              <ArrowUpRight />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Ross's story: a centred title, then the five chapters as a timeline. */}
      <section aria-labelledby="story-title">
        <Section>
          <Container className="flex flex-col items-center gap-5 text-center">
            <h2 id="story-title" className="max-tablet:[&_.voice]:block">
              {story.heading.plain} <span className="voice">{story.heading.accent}</span>
            </h2>
            <p className="type-p-lg measure">{story.intro}</p>
          </Container>
        </Section>
        <Chapters chapters={story.chapters} />
      </section>

      <Section tone="ice" aria-labelledby="short-bios-title">
        <Container className="flex flex-col gap-10 tablet:gap-14">
          {/* Centred header, like the homepage sections. */}
          <div className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
            <h2 id="short-bios-title" className="normal-case">
              Short <span className="voice">bios</span>
            </h2>
            <p className="type-p-lg measure">{bio.shortBios.intro}</p>
          </div>
          <ShortBios items={bio.shortBios.items} portrait={bio.portrait.src} />
        </Container>
      </Section>
    </>
  );
}
