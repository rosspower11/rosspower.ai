import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { events, pastEvents } from "@/content/home";
import { cn } from "@rosspower/ui/lib/cn";

export function Events() {
  return (
    <Section id="events" tone="ink" aria-labelledby="events-title">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        {/* Title row: title left, intro right (laptop up). */}
        <div className="mb-6 grid gap-5 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col gap-5 laptop:col-span-6">
            <Eyebrow>{pastEvents.eyebrow}</Eyebrow>
            <h2 id="events-title">
              Rooms Ross has <span className="voice">already filled</span>
            </h2>
          </div>
          <p className="type-p-lg measure text-cream/75 laptop:col-span-5 laptop:col-start-8 laptop:self-end">
            {pastEvents.intro}
          </p>
        </div>

        {/*
          Phones: cards scroll sideways, bleeding to the screen edges.
          Tablet: the first event runs wide, the other two sit under it. Laptop up: three across.
        */}
        <ul className="-mx-(--section-px) flex snap-x snap-mandatory scroll-px-(--section-px) gap-4 overflow-x-auto px-(--section-px) [scrollbar-width:none] tablet:mx-0 tablet:grid tablet:grid-cols-2 tablet:gap-5 tablet:overflow-visible tablet:px-0 laptop:grid-cols-3">
          {events.map((e, i) => (
            <li
              key={e.title}
              className={cn(
                "group relative aspect-[4/5] w-[82%] shrink-0 snap-start overflow-hidden rounded-card bg-stone tablet:w-auto laptop:aspect-[3/4]",
                i === 0 && "tablet:col-span-2 tablet:aspect-[16/9] laptop:col-span-1 laptop:aspect-[3/4]",
              )}
            >
              <Image
                src={e.src}
                alt={e.alt}
                fill
                sizes={
                  i === 0
                    ? "(min-width: 1440px) 420px, (min-width: 1200px) 33vw, (min-width: 810px) 90vw, 82vw"
                    : "(min-width: 1440px) 420px, (min-width: 1200px) 33vw, (min-width: 810px) 45vw, 82vw"
                }
                className="object-cover object-[50%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Darken top and bottom so the labels read on bright rooms. */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(16,19,23,0.45) 0%, rgba(16,19,23,0) 28%, rgba(16,19,23,0) 45%, rgba(16,19,23,0.88) 100%)",
                }}
              />

              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 laptop:p-6">
                <span className="type-label rounded-full border border-cream/25 bg-ink/35 px-3 py-1.5 backdrop-blur">
                  {e.meta}
                </span>
                <span className="font-serif text-[32px] leading-[0.8] text-cream/80 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 tablet:p-6 laptop:p-8">
                <h3 className="text-cream">{e.title}</h3>
                <p className="type-p-sm text-cream/75">{e.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
