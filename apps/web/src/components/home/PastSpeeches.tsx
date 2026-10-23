import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Accented } from "@/components/ui/Accented";
import { pastSpeeches } from "@/content/home";

/** v2 past speeches (step 12): three tiles with the caption under the photo. Not links. */
export function PastSpeeches() {
  return (
    <Section id="events" aria-labelledby="events-title">
      <Container className="flex flex-col gap-8">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 id="events-title">
            <Accented {...pastSpeeches.heading} />
          </h2>
          <p className="lead">{pastSpeeches.body}</p>
        </div>
        <ul className="grid gap-5 tablet:grid-cols-3">
          {pastSpeeches.events.map((e) => (
            <li key={e.title} className="flex flex-col gap-1">
              {/* London has no photo yet (pe-london.jpg): a sage block, as on Andi's board. */}
              <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-[28px] bg-sage">
                {e.photo ? (
                  <Image src={e.photo.src} alt={e.photo.alt} fill sizes="(min-width: 810px) 33vw, 100vw" className="object-cover" />
                ) : null}
              </div>
              <h3 className="text-[28px] leading-[1.1] font-extrabold tracking-[-0.03em]">{e.title}</h3>
              <p className="label">{e.role}</p>
              <p className="text-[14px]">{e.meta}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
