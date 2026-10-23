import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PillButton } from "@/components/ui/PillButton";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

/** The seven v2 colours (Andi's build guide, step 01). */
const colours = [
  ["ink (forest)", "#17332a"],
  ["cream", "#f1ece1"],
  ["wash (sage light)", "#cfdcc8"],
  ["mid (green)", "#2f5a4a"],
  ["sand", "#e6dfd0"],
  ["sage", "#a9b9a0"],
  ["pine", "#23473a"],
];

const scale = [
  { name: "Wordmark", cls: "wordmark", spec: "Anton 400 · 236 max · hero only", sample: "ROSS POWER" },
  { name: "Heading XL", cls: "heading-xl", spec: "Bricolage 800 · 96 / 58", sample: "speaker." },
  { name: "Heading", cls: "heading", spec: "Bricolage 800 · 84 / 52", sample: "talks ross is ready to give" },
  { name: "Card title", cls: "card-title", spec: "Bricolage 800 · 30 / 26", sample: "The Humans Decide" },
  { name: "Lead", cls: "lead", spec: "Bricolage 400 · 19 / 17", sample: "Keynotes for conferences and leadership teams." },
  { name: "Body", cls: "", spec: "Bricolage 400 · 17", sample: "Practical AI your listeners can use the same day." },
  { name: "Label", cls: "label", spec: "Bricolage 600 · 15", sample: "hosting a podcast?" },
  { name: "Accent", cls: "serif-accent text-[48px]", spec: "Instrument Serif italic", sample: "ready to give" },
];

export default function StyleguidePage() {
  return (
    <>
      <Section>
        <Container className="flex flex-col gap-4">
          <span className="label">internal · not indexed</span>
          <h2>
            rosspower.ai <span className="serif-accent">styleguide</span>
          </h2>
          <p>v2 tokens: forest and sage, Bricolage Grotesque, lowercase labels and pill buttons.</p>
        </Container>
      </Section>

      <Section aria-label="Type scale">
        <Container className="flex flex-col">
          {scale.map((s) => (
            <div key={s.name} className="grid gap-2 border-b border-ink/20 py-6 tablet:grid-cols-[180px_1fr] tablet:gap-8">
              <div className="flex flex-col">
                <span className="label">{s.name}</span>
                <span className="text-[14px]">{s.spec}</span>
              </div>
              <div className={`${s.cls} min-w-0 break-words`}>{s.sample}</div>
            </div>
          ))}
        </Container>
      </Section>

      <Section tone="sand" aria-label="Colours and buttons">
        <Container className="flex flex-col gap-10">
          <ul className="grid grid-cols-2 gap-4 tablet:grid-cols-4 laptop:grid-cols-7">
            {colours.map(([name, hex]) => (
              <li key={name} className="flex flex-col gap-2">
                <span className="block h-20 rounded-[28px] border-[1.5px] border-ink" style={{ background: hex }} />
                <span className="text-[14px]">
                  <b>{name}</b> {hex}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <PillButton href="#">forest</PillButton>
            <PillButton href="#" variant="outline">outline</PillButton>
            <PillButton href="#" size="sm">small</PillButton>
          </div>
          <div className="flex flex-wrap gap-3 rounded-[32px] bg-ink p-8">
            <PillButton href="#" variant="cream">cream</PillButton>
            <PillButton href="#" variant="outline-cream">outline cream</PillButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
