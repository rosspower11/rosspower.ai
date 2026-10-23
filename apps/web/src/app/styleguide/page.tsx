import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@rosspower/ui/components/Button";
import { Eyebrow } from "@rosspower/ui/components/Eyebrow";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const colours = [
  ["cream", "#eee9df"],
  ["ink", "#101317"],
  ["ice", "#dde7f2"],
  ["sky", "#bfd7ea"],
  ["accent", "#8fb3d9"],
  ["blue", "#4f7fb3"],
  ["stone", "#c9cdd2"],
  ["sand", "#e1dccf"],
  ["card", "#f6f3ec"],
];

const scale = [
  { name: "H1", cls: "type-h1", spec: "Anton · 264 / 216 / 144 / 72", sample: "Ross Power" },
  { name: "H2", cls: "type-h2", spec: "Instrument Serif · 64 / 56 / 48 / 40", sample: "meet your speaker" },
  { name: "H3", cls: "type-h3", spec: "Helvetica 500 · 32 / 30 / 26 / 24", sample: "Confidence comes from doing." },
  { name: "H4", cls: "type-h4", spec: "Helvetica 700 · 26 / 24 / 22 / 20", sample: "AI for Private Equity" },
  { name: "H5", cls: "type-h5", spec: "Helvetica 700 · 24 / 22 / 20 / 18", sample: "making ai simple" },
  { name: "H6", cls: "type-h6", spec: "Helvetica 700 · 18 / 18 / 16 / 16", sample: "programmes that teach you" },
  { name: "Subtitle", cls: "type-p-lg", spec: "Helvetica 400 · 18 at all sizes · 1.5", sample: "Keynotes, workshops and panels for founders, teams and leaders." },
  { name: "P", cls: "type-p", spec: "Helvetica 400 · 17 / 17 / 16 / 16", sample: "Practical AI your listeners can use the same day, founder stories from Bali to London." },
  { name: "P sm", cls: "type-p-sm", spec: "Helvetica 400 · 15 / 15 / 14 / 14", sample: "Bali, September 2026" },
  { name: "Label", cls: "type-label", spec: "Helvetica 600 · 13 / 13 / 13 / 12", sample: "hosting a podcast?" },
];

export default function StyleguidePage() {
  return (
    <>
      <Section>
        <Container className="flex flex-col gap-4">
          <span className="type-label">Internal · not indexed</span>
          <h2>
            rosspower.ai <span className="voice">styleguide</span>
          </h2>
          <p className="measure">
            Each block on this page is a Section with a Container inside it. The striped band below shows the
            Container&apos;s padding at the current breakpoint: 1440 is 96/80, 1200 is 72/56, 810 is 56/42 and
            390 is 42/24.
          </p>
        </Container>
      </Section>

      <Section tone="ice" aria-label="Container padding">
        <div className="mx-auto w-full max-w-site bg-accent/40">
          <Container className="bg-cream">
            <div className="rounded-card border-[1.5px] border-dashed border-ink p-6 type-p-sm">
              Content box. The blue around it is the Container padding.
            </div>
          </Container>
        </div>
      </Section>

      <Section aria-label="Type scale">
        <Container className="flex flex-col">
          {scale.map((s) => (
            <div key={s.name} className="grid gap-2 border-b border-ink/20 py-6 tablet:grid-cols-[180px_1fr] tablet:gap-8">
              <div className="flex flex-col">
                <span className="type-label">{s.name}</span>
                <span className="type-p-sm text-ink/70">{s.spec}</span>
              </div>
              <div className={`${s.cls} min-w-0 break-words`}>{s.sample}</div>
            </div>
          ))}
        </Container>
      </Section>

      <Section tone="sand" aria-label="Colours and components">
        <Container className="flex flex-col gap-10">
          <ul className="grid grid-cols-2 gap-4 tablet:grid-cols-3 laptop:grid-cols-5">
            {colours.map(([name, hex]) => (
              <li key={name} className="flex flex-col gap-2">
                <span className="block h-20 rounded-card border border-ink/20" style={{ background: hex }} />
                <span className="type-p-sm">
                  <b>{name}</b> {hex}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button href="#" variant="accent">accent</Button>
            <Button href="#" variant="ink">ink</Button>
            <Button href="#" variant="outline">outline</Button>
            <Button href="#" variant="cream">cream</Button>
            <Button href="#" variant="accent" size="sm">small</Button>
          </div>
          <Eyebrow>Eyebrow label</Eyebrow>
        </Container>
      </Section>
    </>
  );
}
