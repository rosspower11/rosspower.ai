import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { quotes } from "@/content/home";
import { StoryCards } from "./StoryCards";

export function Quotes() {
  return (
    <Section id="stories" tone="sand" aria-labelledby="stories-title" className="overflow-hidden">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        {/* Centred heading. mb-6 adds 24px over the section's gap. */}
        <h2 id="stories-title" className="mx-auto mb-6 max-w-[1000px] text-center">
          {quotes.heading.plain} <span className="voice">{quotes.heading.accent}</span>
        </h2>

        <StoryCards items={quotes.items} />
      </Container>
    </Section>
  );
}
