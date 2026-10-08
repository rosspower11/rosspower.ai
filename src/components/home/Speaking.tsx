import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "@/components/ui/Icon";
import { formats, gallery, speaking } from "@/content/home";
import { bookLink } from "@/content/nav";

export function Speaking() {
  return (
    <Section id="speaking" tone="ink" aria-labelledby="speaking-title" className="overflow-hidden">
      <Container className="flex flex-col gap-12 tablet:gap-16">
        <div className="flex flex-col gap-6 laptop:flex-row laptop:items-end laptop:justify-between">
          <div className="flex max-w-[760px] flex-col gap-5">
            <Eyebrow className="text-cream/80">{speaking.eyebrow}</Eyebrow>
            <h2 id="speaking-title">
              Pick the format that <span className="voice">fits your stage</span>
            </h2>
            <p className="type-p-lg measure text-cream/75">{speaking.intro}</p>
          </div>
          <Button href={bookLink.href} variant="accent" className="self-start laptop:self-auto">
            {bookLink.label}
            <ArrowUpRight />
          </Button>
        </div>

        <ol className="grid gap-4 tablet:grid-cols-3 tablet:gap-5">
          {formats.map((f, i) => (
            <li
              key={f.title}
              className="group flex min-h-[260px] flex-col gap-4 rounded-card border border-cream/15 bg-cream/[0.03] p-6 transition-colors hover:border-accent/60 hover:bg-cream/[0.06] laptop:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="type-label text-cream/50 tabular-nums">0{i + 1}</span>
                <span className="type-label rounded-full bg-accent/15 px-3 py-1 text-accent">{f.length}</span>
              </div>
              <h3 className="mt-auto text-cream">{f.title}</h3>
              <span className="type-label text-cream/60">{f.tag}</span>
              <p className="type-p-sm text-cream/75">{f.body}</p>
            </li>
          ))}
        </ol>
      </Container>

      {/* Photo strip: scrolls sideways, inside the same container edges. */}
      <Container flush="top">
        <ul
          aria-label="Ross on stage"
          className="-mx-(--section-px) flex snap-x snap-mandatory scroll-px-(--section-px) gap-4 overflow-x-auto px-(--section-px) pb-2 [scrollbar-width:none] tablet:gap-5"
        >
          {gallery.map((photo, i) => (
            <li
              key={photo.src}
              className={`relative shrink-0 snap-start overflow-hidden rounded-card bg-stone ${
                i === 0 ? "aspect-[4/3] w-[85%] tablet:w-[560px]" : "aspect-[3/4] w-[62%] tablet:w-[300px]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={i === 0 ? "(min-width: 810px) 560px, 85vw" : "(min-width: 810px) 300px, 62vw"}
                className="object-cover object-[50%_30%]"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
