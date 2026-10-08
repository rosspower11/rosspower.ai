import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { stats } from "@/content/home";
import { StatCounter } from "./StatCounter";

export function Stats() {
  return (
    <Section id="numbers" aria-label="Ross in numbers" className="border-b border-ink/15">
      <Container>
        <ul className="grid grid-cols-2 gap-y-10 laptop:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={[
                "flex flex-col gap-2 pr-4 tablet:pr-8",
                i % 2 === 1 ? "border-l border-ink/15 pl-4 tablet:pl-8" : "",
                i === 2 ? "laptop:border-l laptop:border-ink/15 laptop:pl-8" : "",
              ].join(" ")}
            >
              <span className="font-serif text-[52px] leading-none tracking-[-0.02em] tabular-nums tablet:text-[72px] desktop:text-[88px]">
                <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="type-h6">{s.label}</span>
              <span className="type-p-sm text-ink/70">{s.desc}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
