import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { chats } from "@/content/home";

const pad = (n: number) => String(n).padStart(2, "0");

/** Chats (from Andi's guide): Ross as a podcast guest. Six topics, not links, and a podcast booking button. */
export function Chats() {
  return (
    <Section id="chats" tone="wash" aria-labelledby="chats-title">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        <div className="mb-6 grid gap-5 laptop:grid-cols-2 laptop:gap-x-10">
          <div className="flex flex-col gap-5">
            <Eyebrow>{chats.label}</Eyebrow>
            <h2 id="chats-title">
              Ready to <span className="voice">have a chat?</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 laptop:self-end">
            <p className="type-p-lg measure">{chats.body}</p>
            <Button href={chats.cta.href} variant="ink">
              {chats.cta.label}
            </Button>
          </div>
        </div>

        <ol className="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
          {chats.topics.map((topic, i) => (
            <li key={topic} className="flex flex-col gap-3 rounded-card border-[1.5px] border-ink bg-cream p-6">
              <span className="text-[14px] tabular-nums">{pad(i + 1)}</span>
              <span className="text-[22px] leading-[1.15] font-extrabold tracking-[-0.02em]">{topic}</span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
