import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { formats, talks } from "@/content/home";
import { bookLink } from "@/content/nav";
import { workshopsGraph } from "@/lib/structured-data";
import { Button } from "@rosspower/ui/components/Button";
import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { asset } from "@rosspower/ui/lib/asset";

const workshop = formats[1];
const workshopTalk = talks.find((talk) => talk.kind === "Workshop");
const title = "Hands-on AI workshops for teams | Ross Power";
const description = "Explore Ross Power's hands-on AI workshop format for teams and leaders, including From Chat to Command. Enquire about a workshop for your team.";
const shareImage = {
  url: asset("images/og/og-ross-power.jpg"),
  width: 1200,
  height: 630,
  alt: "Ross Power on stage at HR APAC Forum, Bali",
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/workshops" },
  openGraph: { title, description, url: "/workshops", images: [shareImage] },
  twitter: { card: "summary_large_image", title, description, images: [shareImage] },
};

export default function WorkshopsPage() {
  return (
    <>
      <JsonLd data={workshopsGraph} />
      <Section aria-labelledby="workshops-page-title">
        <Container className="grid gap-10 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col gap-6 laptop:col-span-6">
            <Eyebrow>Workshops</Eyebrow>
            <h1 id="workshops-page-title" className="type-h2 normal-case">
              Hands-on AI workshops for <span className="voice">teams and leaders</span>
            </h1>
            <p className="type-p-lg measure">{workshop.body}</p>
            <Button href={bookLink.href} variant="ink" className="self-start">Enquire about a workshop <ArrowUpRight /></Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-stone laptop:col-span-5 laptop:col-start-8">
            <Image src={workshop.photos[0].src} alt={workshop.photos[0].alt} fill priority sizes="(min-width: 1200px) 520px, 100vw" className="object-cover" />
          </div>
        </Container>
      </Section>

      <Section tone="wash" aria-labelledby="workshop-format-title">
        <Container className="grid gap-8 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col gap-5 laptop:col-span-5">
            <Eyebrow>Workshop format</Eyebrow>
            <h2 id="workshop-format-title">Build something <span className="voice">in the room</span></h2>
          </div>
          <div className="flex flex-col gap-5 laptop:col-span-6 laptop:col-start-7">
            <span className="type-label text-ink/60">{workshop.length}</span>
            <p className="type-p-lg measure">{workshop.body}</p>
            <p className="type-p measure text-ink/80">If your event calls for a keynote or panel, explore <Link href="/speaking" className="underline underline-offset-4">Ross’s speaking formats</Link>.</p>
          </div>
        </Container>
      </Section>

      {workshopTalk && (
        <Section aria-labelledby="workshop-talk-title">
          <Container className="flex flex-col gap-6">
            <Eyebrow>Workshop theme</Eyebrow>
            <h2 id="workshop-talk-title">{workshopTalk.title}</h2>
            <p className="type-p-lg measure">{workshopTalk.body}</p>
            <Button href={bookLink.href} variant="ink" className="self-start">Discuss your team’s workshop <ArrowUpRight /></Button>
          </Container>
        </Section>
      )}
    </>
  );
}
