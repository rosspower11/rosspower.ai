import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "@/components/ui/Icon";
import { aiPowered } from "@/content/home";
import { contact } from "@/content/nav";

export function AiPowered() {
  return (
    <Section id="ai-powered" aria-labelledby="aip-title">
      <Container className="grid gap-10 laptop:grid-cols-12 laptop:gap-x-10">
        <div className="flex flex-col gap-5 laptop:col-span-6">
          <Eyebrow>{aiPowered.eyebrow}</Eyebrow>
          <h2 id="aip-title">
            AI <span className="voice">Powered</span>
            <span className="text-blue">.</span>
          </h2>
          <p className="type-p-lg measure">{aiPowered.body}</p>
          <p className="type-h3 voice">{aiPowered.closing}</p>
          <Button href={contact.aiPowered} variant="ink" className="mt-2 self-start">
            Visit AI Powered
            <ArrowUpRight />
          </Button>
        </div>
        <ul className="flex flex-col laptop:col-span-5 laptop:col-start-8">
          {aiPowered.pillars.map((p, i) => (
            <li key={p.title} className="flex items-baseline gap-6 border-t border-ink/15 py-6 last:border-b">
              <span className="type-label text-ink/50 tabular-nums">0{i + 1}</span>
              <div className="flex flex-col gap-1">
                <span className="type-h3">{p.title}</span>
                <span className="type-p text-ink/70">{p.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
