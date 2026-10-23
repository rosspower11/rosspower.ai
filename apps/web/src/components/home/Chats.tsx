import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Accented } from "@/components/ui/Accented";
import { PillButton } from "@/components/ui/PillButton";
import { chats } from "@/content/home";

const pad = (n: number) => String(n).padStart(2, "0");

/** v2 chats (step 10): Ross as a podcast guest. Six topics (not links) and a podcast booking button. */
export function Chats() {
  return (
    <Section id="chats" tone="wash" aria-labelledby="chats-title">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-6 laptop:flex-row laptop:items-end laptop:justify-between">
          <div className="flex max-w-[720px] flex-col gap-4">
            <p className="label">{chats.label}</p>
            <h2 id="chats-title">
              <Accented {...chats.heading} />
            </h2>
            <p className="lead">{chats.body}</p>
          </div>
          <PillButton href={chats.cta.href}>{chats.cta.label}</PillButton>
        </div>

        <ol className="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
          {chats.topics.map((topic, i) => (
            <li key={topic} className="flex flex-col gap-3 rounded-[28px] border-[1.5px] border-ink bg-cream p-6">
              <span className="text-[14px] tabular-nums">{pad(i + 1)}</span>
              <span className="text-[22px] leading-[1.15] font-extrabold tracking-[-0.02em]">{topic}</span>
            </li>
          ))}
        </ol>
        <p className="max-w-[720px] text-[16px]">{chats.clips}</p>
      </Container>
    </Section>
  );
}
