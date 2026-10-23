import type { Metadata } from "next";
import Image from "next/image";
import { ShortBios } from "@/components/bio/ShortBios";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PillButton } from "@/components/ui/PillButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { bioGraph } from "@/lib/structured-data";
import { bio } from "@/content/bio";
import { bookLink } from "@/content/nav";
import { asset } from "@rosspower/ui/lib/asset";

const shareImage = {
  url: asset("images/og/og-ross-power.jpg"),
  width: 1200,
  height: 630,
  alt: "Ross Power on stage at HR APAC Forum, Bali",
};

export const metadata: Metadata = {
  title: { absolute: bio.meta.title },
  description: bio.meta.description,
  alternates: { canonical: "/bio" },
  openGraph: { type: "profile", title: bio.meta.title, description: bio.meta.description, url: "/bio", images: [shareImage] },
  twitter: { card: "summary_large_image", title: bio.meta.title, description: bio.meta.description, images: [shareImage] },
};

export default function BioPage() {
  return (
    <>
      <JsonLd data={bioGraph} />
      <Section aria-labelledby="bio-title">
        {/* Laptop up: portrait left (stays in view), bio right. Phones: portrait, then bio. */}
        <Container className="grid gap-10 laptop:grid-cols-[minmax(0,520px)_minmax(0,660px)] laptop:gap-18">
          <div>
            <div className="relative aspect-[4/5] max-w-[520px] overflow-hidden rounded-[32px] bg-sand laptop:sticky laptop:top-10">
              <Image
                src={bio.portrait.src}
                alt={bio.portrait.alt}
                fill
                priority
                sizes="(min-width: 560px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-[22px] laptop:pt-6">
            <h1 id="bio-title" className="heading normal-case">
              about <span className="serif-accent">ross power</span>
            </h1>
            {bio.paragraphs.map((para) => (
              <p key={para.slice(0, 24)} className="lead">
                {para}
              </p>
            ))}
            <PillButton href={bookLink.href}>{bookLink.label}</PillButton>
          </div>
        </Container>
      </Section>

      <Section tone="wash" aria-labelledby="short-bios-title">
        <Container className="flex flex-col gap-8">
          <div className="flex max-w-[720px] flex-col gap-4">
            <p className="label">{bio.shortBios.label}</p>
            <h2 id="short-bios-title">
              short <span className="serif-accent">bios</span>
            </h2>
            <p className="lead">{bio.shortBios.intro}</p>
          </div>
          <ShortBios items={bio.shortBios.items} portrait={bio.portrait.src} />
        </Container>
      </Section>
    </>
  );
}
