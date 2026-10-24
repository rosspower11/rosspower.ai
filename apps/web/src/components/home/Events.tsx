import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { events, pastEvents } from "@/content/home";

/**
 * Past speeches, laid out as on Andi's board: cream, three tiles across (one column on phones),
 * each a 16:10 photo with the title, role and place centred under it. The tiles aren't links.
 */
export function Events() {
  return (
    <Section id="events" aria-labelledby="events-title">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        {/* Centred header, like the other homepage sections. */}
        <div className="mx-auto mb-6 flex max-w-[640px] flex-col items-center gap-5 text-center">
          <Eyebrow>{pastEvents.eyebrow}</Eyebrow>
          <h2 id="events-title">
            Past <span className="voice">speeches</span>
          </h2>
          <p className="type-p-lg text-ink/80">{pastEvents.body}</p>
        </div>

        <ul className="grid gap-8 tablet:grid-cols-3 tablet:gap-5">
          {events.map((e) => (
            <li key={e.title} className="flex flex-col gap-1 text-center">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-card bg-sage">
                <Image
                  src={e.src}
                  alt={e.alt}
                  fill
                  sizes="(min-width: 1440px) 420px, (min-width: 810px) 33vw, 100vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>
              <h3 className="text-[28px] leading-[1.1]">{e.title}</h3>
              <p className="text-[15px] leading-[1.4] font-semibold">{e.role}</p>
              <p className="text-[14px] text-ink/75">{e.meta}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
