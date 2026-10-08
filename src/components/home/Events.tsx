import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { events } from "@/content/home";

export function Events() {
  return (
    <Section id="events" tone="sand" aria-labelledby="events-title">
      <Container className="flex flex-col gap-10 tablet:gap-12">
        <div className="flex flex-col gap-5">
          <Eyebrow>Past events</Eyebrow>
          <h2 id="events-title">
            Rooms Ross has <span className="voice">already filled</span>
          </h2>
        </div>
        <ul className="grid gap-8 tablet:grid-cols-3 tablet:gap-5">
          {events.map((e) => (
            <li key={e.title} className="group flex flex-col gap-4">
              <MediaFrame
                src={e.src}
                alt={e.alt}
                ratio="4 / 5"
                sizes="(min-width: 1440px) 420px, (min-width: 810px) 33vw, 100vw"
                imageClassName="object-[50%_30%] transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="flex flex-col gap-1">
                <span className="type-label text-ink/60">{e.meta}</span>
                <h3 className="type-h4">{e.title}</h3>
                <span className="type-p-sm">{e.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
