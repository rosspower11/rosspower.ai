import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Accented } from "@/components/ui/Accented";
import { PillButton } from "@/components/ui/PillButton";
import { meet, stats } from "@/content/home";
import { cn } from "@rosspower/ui/lib/cn";
import { StatCounter } from "./StatCounter";

const tileTones = {
  wash: "bg-wash text-ink",
  sage: "bg-sage text-ink",
  ink: "bg-ink text-cream",
  sand: "bg-sand text-ink",
} as const;

/** v2 meet your speaker (step 06): Ross's photo and intro, then the four stats as coloured tiles. */
export function MeetSpeaker() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Container className="flex flex-col gap-18">
        {/* Phones: photo, then text. Laptop up: side by side, vertically centred. */}
        <div className="grid items-center gap-10 laptop:grid-cols-[minmax(0,520px)_minmax(0,660px)] laptop:gap-18">
          <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[32px] bg-sand">
            <Image
              src={meet.photo.src}
              alt={meet.photo.alt}
              fill
              sizes="(min-width: 1200px) 520px, (min-width: 560px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-[22px]">
            <h2 id="about-title">
              <Accented {...meet.heading} />
            </h2>
            <p className="lead">{meet.body}</p>
            <div className="flex flex-wrap gap-3">
              <PillButton href={meet.bio.href}>{meet.bio.label}</PillButton>
              <PillButton href={meet.watch.href} variant="outline">
                {meet.watch.label}
              </PillButton>
            </div>
          </div>
        </div>

        <ul className="grid gap-5 tablet:grid-cols-2 laptop:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className={cn("flex min-h-[210px] flex-col rounded-[28px] p-[30px]", tileTones[s.tone])}>
              <span className="text-[84px] leading-[0.9] font-extrabold tracking-[-0.05em] tabular-nums laptop:text-[clamp(56px,5.8vw,84px)]">
                <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="label mt-3">{s.label}</span>
              <span className="mt-auto pt-4 text-[16px] leading-[1.45]">{s.line}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
