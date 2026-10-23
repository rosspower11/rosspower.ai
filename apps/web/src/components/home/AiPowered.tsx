import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { aiPowered } from "@/content/home";
import { AiPoweredPillars } from "./AiPoweredPillars";

export function AiPowered() {
  return (
    <Section id="ai-powered" aria-labelledby="aip-title">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        {/* Centred header: eyebrow and title only. mb-6 adds 24px over the section's gap. */}
        <div className="mb-6 flex flex-col items-center gap-5 text-center">
          <Eyebrow>{aiPowered.eyebrow}</Eyebrow>
          <h2 id="aip-title">
            AI <span className="voice">Powered</span>
            <span className="text-blue">.</span>
          </h2>
        </div>

        <AiPoweredPillars pillars={aiPowered.pillars} />
      </Container>
    </Section>
  );
}
