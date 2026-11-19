import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { events } from "@/content/home";

/**
 * Past speeches (Andi's feedback, step 06): cream, two tiles across (one column on phones),
 * each a 16:10 photo with the title and one line under it. The tiles aren't links.
 */
export function Events() {
  return (
    <Section id="events" aria-labelledby="events-title">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        <h2 id="events-title" className="text-center">
          Past <span className="voice">speeches</span>
        </h2>

        <ul className="grid gap-8 tablet:grid-cols-2 tablet:gap-5">
          {events.map((e) => (
            <li key={e.title} className="flex flex-col gap-2.5">
              <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-card bg-sage">
                <Image
                  src={e.src}
                  alt={e.alt}
                  fill
                  sizes="(min-width: 1440px) 640px, (min-width: 810px) 50vw, 100vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>
              <h3 className="text-[28px] leading-[1.1]">{e.title}</h3>
              <p className="text-[15px] leading-[1.4] font-semibold">{e.meta}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
