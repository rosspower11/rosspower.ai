import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { proof } from "@/content/home";

/** v2 proof (step 11): one big number and three quotes, on pine. No carousel, no photos. */
export function Proof() {
  return (
    <Section id="stories" tone="pine" aria-labelledby="proof-title">
      <Container className="flex flex-col gap-12">
        <h2 id="proof-title" className="flex flex-col gap-4 tablet:flex-row tablet:items-end tablet:gap-10">
          <span className="text-[88px] leading-[0.82] font-extrabold tracking-[-0.05em] laptop:text-[160px]">
            {proof.number}
          </span>
          <span className="serif-accent text-[28px] leading-[1.1] laptop:text-[48px]">{proof.line}</span>
        </h2>
        <ul className="grid gap-5 laptop:grid-cols-3">
          {proof.quotes.map((q) => (
            <li key={q.name}>
              <figure className="flex h-full flex-col gap-4 rounded-[28px] bg-cream p-8 text-ink">
                <blockquote className="text-[22px] leading-[1.35]">{q.quote}</blockquote>
                <figcaption className="label mt-auto">{q.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
