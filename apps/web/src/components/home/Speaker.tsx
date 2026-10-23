import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PillButton } from "@/components/ui/PillButton";
import { speaker } from "@/content/home";
import { bookLink } from "@/content/nav";

/** v2 speaker section (step 07): "speaker." with book ross, one wide stage photo and three tiles. */
export function Speaker() {
  return (
    <Section id="speaker" tone="wash" aria-labelledby="speaker-title">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-6 laptop:flex-row laptop:items-end laptop:justify-between">
          <div className="flex max-w-[700px] flex-col gap-4">
            <h2 id="speaker-title" className="heading-xl">
              speaker<span className="text-mid">.</span>
            </h2>
            <p className="lead">{speaker.body}</p>
          </div>
          <PillButton href={bookLink.href}>{bookLink.label}</PillButton>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden rounded-[32px] bg-sand">
          <Image src={speaker.wide.src} alt={speaker.wide.alt} fill sizes="(min-width: 1440px) 1328px, 100vw" className="object-cover" />
        </div>
        {/* 16px under the wide photo: three tiles, one column on phones. */}
        <ul className="-mt-4 grid gap-4 tablet:grid-cols-3">
          {speaker.tiles.map((tile) => (
            <li key={tile.src} className="relative aspect-[16/11] overflow-hidden rounded-[28px] bg-sand">
              <Image src={tile.src} alt={tile.alt} fill sizes="(min-width: 810px) 33vw, 100vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
