import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Accented } from "@/components/ui/Accented";
import { PillButton } from "@/components/ui/PillButton";
import { talks, talksIntro } from "@/content/home";
import { bookLink } from "@/content/nav";
import { TalkCards } from "./TalkCards";

/** v2 talks (step 08): the four keynotes Ross gives. "see the talk" opens each one's pop-out (step 09). */
export function Talks() {
  return (
    <Section id="talks" aria-labelledby="talks-title">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-6 laptop:flex-row laptop:items-end laptop:justify-between">
          <div className="flex max-w-[760px] flex-col gap-4">
            <h2 id="talks-title">
              <Accented {...talksIntro.heading} />
            </h2>
            <p className="lead">{talksIntro.body}</p>
          </div>
          <PillButton href={bookLink.href}>{bookLink.label}</PillButton>
        </div>
        <TalkCards talks={talks} />
      </Container>
    </Section>
  );
}
