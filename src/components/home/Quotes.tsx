import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { quotes } from "@/content/home";
import { StoryCards } from "./StoryCards";

export function Quotes() {
  return (
    <Section id="stories" tone="sand" aria-labelledby="stories-title" className="overflow-hidden">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        {/* Centred header. mb-6 adds 24px over the section's gap. */}
        <div className="mb-6 flex flex-col items-center gap-5 text-center">
          <Eyebrow>{quotes.eyebrow}</Eyebrow>
          <h2 id="stories-title">
            Real people, <span className="voice">real results</span>
          </h2>
          <p className="type-p-lg measure text-ink/70">{quotes.intro}</p>
        </div>

        <StoryCards items={quotes.items} />
      </Container>
    </Section>
  );
}
