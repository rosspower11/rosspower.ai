import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { bookLink } from "@/content/nav";
import { workshopsPage } from "@/content/workshops";
import { workshopsGraph } from "@/lib/structured-data";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { asset } from "@rosspower/ui/lib/asset";

const { title, description } = workshopsPage.meta;
const { format, theme } = workshopsPage;
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

/** /workshops: the hands-on workshop format and its theme, in the homepage's look. */
export default function WorkshopsPage() {
  const at = theme.title.indexOf(theme.accent);
  return (
    <>
      <JsonLd data={workshopsGraph} />

      {/* Laptop up: title and intro left, workshop photo right. Phones: stacked. */}
      <Section aria-labelledby="workshops-title">
        <Container className="grid gap-10 laptop:grid-cols-12 laptop:items-center laptop:gap-x-10">
          <div className="flex flex-col items-start gap-6 laptop:col-span-6">
            <Eyebrow>{workshopsPage.eyebrow}</Eyebrow>
            <h1 id="workshops-title" className="type-h2 normal-case">
              Hands-on AI workshops for <span className="voice">teams and leaders</span>
            </h1>
            <p className="type-p-lg measure">{workshopsPage.intro}</p>
            <Button href={bookLink.href} variant="ink">
              Enquire about a workshop
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-sage laptop:col-span-6">
            <Image
              src={workshopsPage.photo.src}
              alt={workshopsPage.photo.alt}
              fill
              priority
              sizes="(min-width: 1440px) 640px, (min-width: 1200px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* The format: photo left, how long it runs and the link to speaking right. */}
      <Section tone="sand" aria-labelledby="workshops-format-title">
        <Container className="grid gap-10 laptop:grid-cols-12 laptop:items-center laptop:gap-x-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-sage laptop:col-span-5">
            <Image
              src={format.photo.src}
              alt={format.photo.alt}
              fill
              sizes="(min-width: 1440px) 520px, (min-width: 1200px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-6 laptop:col-span-6 laptop:col-start-7">
            <span className="rounded-full bg-sage px-3 py-1 text-[13px] font-semibold whitespace-nowrap">{format.length}</span>
            <h2 id="workshops-format-title">
              Build something <span className="voice">in the room</span>
            </h2>
            <p className="type-p-lg measure">
              If your event calls for a keynote or panel, see{" "}
              <Link href="/speaking" className="underline underline-offset-4 hover:text-mid">
                Ross&apos;s speaking formats
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* The workshop theme on navy. Laptop up: pill and title left, the rest right. Phones: stacked. */}
      <Section tone="ink" aria-labelledby="workshops-theme-title">
        <Container className="grid gap-8 laptop:grid-cols-12 laptop:items-center laptop:gap-x-10">
          <div className="flex flex-col items-start gap-6 laptop:col-span-5">
            <span className="rounded-full bg-sage px-4 py-1.5 text-[14px] font-semibold text-ink">
              {theme.tag} · {format.length}
            </span>
            <h2 id="workshops-theme-title">
              {theme.title.slice(0, at)}
              <span className="voice">{theme.accent}</span>
              {theme.title.slice(at + theme.accent.length)}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 laptop:col-span-6 laptop:col-start-7">
            <p className="type-p-lg measure">{theme.body}</p>
            <div className="flex flex-col gap-3 border-t-[1.5px] border-cream/30 pt-6">
              <h3 className="type-label">the room walks away with</h3>
              <p className="measure">{theme.walksAway}</p>
            </div>
            {/* The longest button label on the site: less side padding on phones, and it may wrap below 360px. */}
            <Button href={bookLink.href} variant="cream" className="max-w-full px-5! text-center whitespace-normal! tablet:px-7!">
              Discuss your team&apos;s workshop
              <ArrowUpRight />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
