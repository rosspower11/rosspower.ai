import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { podcast } from "@/content/home";

/**
 * Podcast (Andi's feedback, step 05): Ross as a podcast guest, on sand. The text and booking button on the left,
 * the six topics as a plain numbered list beside them (stacked on phones and tablets). The topics aren't links.
 */
export function Chats() {
  return (
    <Section id="podcast" tone="sand" aria-labelledby="podcast-title">
      <Container className="grid gap-12 laptop:grid-cols-2 laptop:gap-x-10">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col gap-4">
            <h2 id="podcast-title">
              Hosting <span className="voice">a podcast?</span>
            </h2>
            <p className="text-[19px] leading-[1.4] font-semibold">{podcast.line}</p>
          </div>
          <p className="type-p-lg measure">{podcast.body}</p>
          <Button href={podcast.cta.href} variant="ink">
            {podcast.cta.label}
          </Button>
        </div>

        <ol className="flex list-decimal flex-col gap-4 pl-7 text-[19px] leading-[1.35] font-semibold marker:font-extrabold marker:text-mid laptop:self-center">
          {podcast.topics.map((topic) => (
            <li key={topic} className="pl-2">
              {topic}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
