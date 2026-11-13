import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { events, formats, speaking, talks, talksIntro } from "@/content/home";
import { bookLink } from "@/content/nav";
import { speakingGraph } from "@/lib/structured-data";
import { Button } from "@rosspower/ui/components/Button";
import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { asset } from "@rosspower/ui/lib/asset";

const title = "AI keynote speaker for corporate events | Ross Power";
const description = "Explore Ross Power's AI keynotes, executive briefing and panels for founders, teams and leaders. See talk themes and enquire about your event.";
const shareImage = {
  url: asset("images/og/og-ross-power.jpg"),
  width: 1200,
  height: 630,
  alt: "Ross Power on stage at HR APAC Forum, Bali",
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/speaking" },
  openGraph: { title, description, url: "/speaking", images: [shareImage] },
  twitter: { card: "summary_large_image", title, description, images: [shareImage] },
};

export default function SpeakingPage() {
  return (
    <>
      <JsonLd data={speakingGraph} />
      <Section aria-labelledby="speaking-page-title">
        <Container className="grid gap-10 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col gap-5 laptop:col-span-6">
            <Eyebrow>Speaking</Eyebrow>
            <h1 id="speaking-page-title" className="type-h2 normal-case">
              AI speaking for <span className="voice">your next event</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 laptop:col-span-5 laptop:col-start-8 laptop:self-end">
            <p className="type-p-lg measure">{speaking.intro}</p>
            <p className="type-p measure text-ink/80">{talksIntro.body}</p>
            <Button href={bookLink.href} variant="ink" className="self-start">Enquire about speaking <ArrowUpRight /></Button>
          </div>
        </Container>
      </Section>

      <Section tone="wash" aria-labelledby="speaking-formats-title">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Eyebrow>Formats</Eyebrow>
            <h2 id="speaking-formats-title">A format for <span className="voice">your room</span></h2>
          </div>
          <div className="grid gap-5 tablet:grid-cols-2">
            {[formats[0], formats[2]].map((format) => (
              <div key={format.title} className="flex flex-col gap-4 rounded-panel bg-cream p-7 tablet:p-10">
                <span className="type-label text-ink/60">{format.length}</span>
                <h3>{format.title}</h3>
                <p className="type-p text-ink/80">{format.body}</p>
              </div>
            ))}
          </div>
          <p className="type-p-lg measure">For a session where the team builds alongside Ross, explore the <Link href="/workshops" className="underline underline-offset-4">AI workshops</Link>.</p>
        </Container>
      </Section>

      <Section aria-labelledby="speaking-talks-title">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Eyebrow>Talks</Eyebrow>
            <h2 id="speaking-talks-title">Conversations for <span className="voice">teams and leaders</span></h2>
          </div>
          <ul className="grid gap-5 tablet:grid-cols-2">
            {talks.filter((talk) => talk.kind !== "Workshop").map((talk) => (
              <li key={talk.title} className="flex flex-col gap-3 border-t border-ink/20 pt-6">
                <span className="type-label text-ink/60">{talk.kind}</span>
                <h3>{talk.title}</h3>
                <p className="type-p text-ink/80">{talk.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ink" aria-labelledby="speaking-events-title">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Eyebrow>Past events</Eyebrow>
            <h2 id="speaking-events-title">Ross in <span className="voice">the room</span></h2>
          </div>
          <ul className="grid gap-5 tablet:grid-cols-2">
            {events.slice(0, 2).map((event) => (
              <li key={event.title} className="flex flex-col gap-3 border-t border-cream/25 pt-6">
                <span className="type-label text-cream/65">{event.meta}</span>
                <h3>{event.title}</h3>
                <p className="type-p text-cream/75">{event.role}</p>
              </li>
            ))}
          </ul>
          <Button href={bookLink.href} variant="cream" className="self-start">Talk about your event <ArrowUpRight /></Button>
        </Container>
      </Section>
    </>
  );
}
