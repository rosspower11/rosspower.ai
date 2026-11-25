import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Events } from "@/components/home/Events";
import { TalkList } from "@/components/home/TalkList";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { talks } from "@/content/home";
import { bookLink } from "@/content/nav";
import { speakingPage } from "@/content/speaking";
import { speakingGraph } from "@/lib/structured-data";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";

const { title, description } = speakingPage.meta;

export const metadata: Metadata = pageMetadata({ path: "/speaking", title, description });

/** /speaking: the keynotes and formats in one place, in the homepage's look. */
export default function SpeakingPage() {
  return (
    <>
      <JsonLd data={speakingGraph} />

      {/* Laptop up: title and intro left, stage photo right. Phones: stacked. */}
      <Section aria-labelledby="speaking-title">
        <Container className="grid gap-10 laptop:grid-cols-12 laptop:items-center laptop:gap-x-10">
          <div className="flex flex-col items-start gap-6 laptop:col-span-6">
            <Eyebrow>{speakingPage.eyebrow}</Eyebrow>
            <h1 id="speaking-title" className="type-h2 normal-case">
              AI keynotes for <span className="voice">your next event</span>
            </h1>
            <p className="type-p-lg measure">{speakingPage.intro}</p>
            <p className="measure text-ink/80">{speakingPage.body}</p>
            <Button href={bookLink.href} variant="ink">
              {bookLink.label}
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-sage laptop:col-span-6">
            <Image
              src={speakingPage.photo.src}
              alt={speakingPage.photo.alt}
              fill
              priority
              sizes="(min-width: 1440px) 640px, (min-width: 1200px) 50vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="speaking-keynotes-title">
        <Container flush="top" className="flex flex-col gap-10 tablet:gap-14">
          <h2 id="speaking-keynotes-title" className="text-center">
            The <span className="voice">keynotes</span>
          </h2>
          <TalkList talks={talks} />
        </Container>
      </Section>

      {/* Formats: the keynote cards' look, on sand. */}
      <Section tone="sand" aria-labelledby="speaking-formats-title">
        <Container className="flex flex-col gap-10 tablet:gap-14">
          <h2 id="speaking-formats-title" className="text-center">
            A format for <span className="voice">your room</span>
          </h2>
          <ul className="grid gap-5 tablet:grid-cols-2">
            {speakingPage.formats.map((f) => (
              <li key={f.title} className="flex flex-col items-start gap-4 rounded-card border-[1.5px] border-ink bg-cream p-7 tablet:p-10">
                <span className="rounded-full bg-sage px-3 py-1 text-[13px] font-semibold whitespace-nowrap">{f.length}</span>
                <h3 className="text-[28px] leading-[1.1]">{f.title}</h3>
                <p className="measure text-ink/85">{f.body}</p>
              </li>
            ))}
          </ul>
          <p className="type-p-lg text-center">
            For a session where the team builds alongside Ross, see the{" "}
            <Link href="/workshops" className="underline underline-offset-4 hover:text-mid">
              AI workshops
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Events />

      <Section tone="ink" aria-labelledby="speaking-cta-title">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 id="speaking-cta-title">
            Talk about <span className="voice">your event</span>
          </h2>
          <Button href={bookLink.href} variant="cream">
            {bookLink.label}
            <ArrowUpRight />
          </Button>
        </Container>
      </Section>
    </>
  );
}
