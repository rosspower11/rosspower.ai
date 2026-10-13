import type { Metadata } from "next";
import Image from "next/image";
import { ShortBios } from "@/components/bio/ShortBios";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { bio } from "@/content/bio";
import { bookLink } from "@/content/nav";
import { Button } from "@rosspower/ui/components/Button";
import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
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
      <Section aria-labelledby="bio-title">
        {/* Laptop up: portrait left (stays in view), bio right. Phones: portrait, then bio. */}
        <Container className="grid gap-10 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="laptop:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-stone laptop:sticky laptop:top-28">
              <Image
                src={bio.portrait.src}
                alt={bio.portrait.alt}
                fill
                priority
                sizes="(min-width: 1200px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 laptop:col-span-6 laptop:col-start-7 laptop:pt-6">
            <div className="flex flex-col gap-5">
              <Eyebrow>{bio.eyebrow}</Eyebrow>
              {/* Lowercase serif title: the hero's name is the only all-caps text on the site. */}
              <h1 id="bio-title" className="type-h2 normal-case">
                About <span className="voice">ross power</span>
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
              book ross
              <ArrowUpRight />
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="ice" aria-labelledby="short-bios-title">
        <Container className="flex flex-col gap-10 tablet:gap-14">
          <div className="flex flex-col gap-5 laptop:max-w-[640px]">
            <Eyebrow>{bio.shortBios.eyebrow}</Eyebrow>
            <h2 id="short-bios-title" className="normal-case">
              short <span className="voice">bios</span>
            </h2>
            <p className="type-p-lg measure">{bio.shortBios.intro}</p>
          </div>
          <ShortBios items={bio.shortBios.items} portrait={bio.portrait.src} />
        </Container>
      </Section>
    </>
  );
}
