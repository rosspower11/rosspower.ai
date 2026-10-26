import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { talks, talksIntro } from "@/content/home";
import { TalkList } from "./TalkList";

/** The talks Ross gives. Each row opens its pop-out with the detail and "book this talk". */
export function Talks() {
  return (
    <Section id="talks" aria-labelledby="talks-title">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        <div className="mb-6 grid gap-5 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col gap-5 laptop:col-span-7">
            <Eyebrow>{talksIntro.eyebrow}</Eyebrow>
            {/* "ready to have a chat?" now heads the chats section, so the talks take Andi's title. */}
            <h2 id="talks-title">
              Talks Ross is <span className="voice">ready to give</span>
            </h2>
          </div>
          <p className="type-p-lg measure laptop:col-span-4 laptop:col-start-9 laptop:self-end">{talksIntro.body}</p>
        </div>
        <TalkList talks={talks} />
      </Container>
    </Section>
  );
}
