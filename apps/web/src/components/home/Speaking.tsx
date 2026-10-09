import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@rosspower/ui/components/Button";
import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { formats, speaking } from "@/content/home";
import { bookLink } from "@/content/nav";
import { SpeakingFormats } from "./SpeakingFormats";

export function Speaking() {
  return (
    <Section id="speaking" tone="wash" aria-labelledby="speaking-title">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        {/* Centred header: eyebrow and title only. mb-6 adds 24px over the section's gap. */}
        <div className="mb-6 flex flex-col items-center gap-5 text-center">
          <Eyebrow>{speaking.eyebrow}</Eyebrow>
          <h2 id="speaking-title">
            Pick the format that <span className="voice">fits your stage</span>
          </h2>
        </div>

        <SpeakingFormats formats={formats} />

        <Button href={bookLink.href} variant="ink" className="self-center">
          Book for speaking
          <ArrowUpRight />
        </Button>
      </Container>
    </Section>
  );
}
