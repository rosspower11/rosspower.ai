import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollScale } from "@/components/ui/ScrollScale";
import { about } from "@/content/home";
import { cn } from "@/lib/cn";

function Bio({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {about.bio.map((para) => (
        <p key={para} className="type-p-lg measure">
          {para}
        </p>
      ))}
    </div>
  );
}

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      {/* Shares the cream ground with the stats above, so it skips its own top padding. */}
      <Container flush="top" className="flex flex-col gap-8">
        {/* Tall photo with the title and bio floating on it (phones: title only). Grows as it scrolls in. */}
        <ScrollScale>
          <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-stone text-cream tablet:aspect-auto tablet:h-[760px] laptop:h-[720px] desktop:h-[800px]">
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              fill
              sizes="(min-width: 1440px) 1280px, 100vw"
              className="object-cover object-[60%_35%]"
              // Counter-zoom: the photo eases out from 1.14× while the card grows to full size.
              style={{ transform: "scale(calc(2 - var(--scroll-scale, 1)))" }}
            />
            {/* Darken the lower part so the text reads on a bright room. */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(16,19,23,0) 25%, rgba(16,19,23,0.6) 60%, rgba(16,19,23,0.92) 100%), linear-gradient(90deg, rgba(16,19,23,0.5) 0%, rgba(16,19,23,0) 65%)",
              }}
            />

            {/* Laptop up: title left, bio right. Tablet: stacked. */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 [--voice:var(--color-wash)] tablet:p-10 laptop:grid laptop:grid-cols-12 laptop:items-end laptop:gap-x-8 laptop:p-12">
              <h2 id="about-title" className="text-cream laptop:col-span-6">
                Meet your speaker, <span className="voice">Ross Power</span>
              </h2>
              <div className="hidden tablet:block laptop:col-span-6 laptop:col-start-7">
                <Bio className="text-cream/85" />
              </div>
            </div>
          </div>
        </ScrollScale>

        {/* Phones: the bio sits under the photo. */}
        <div className="tablet:hidden">
          <Bio />
        </div>
      </Container>
    </Section>
  );
}
