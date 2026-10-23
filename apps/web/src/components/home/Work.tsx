import { pillClass } from "@/components/ui/PillButton";
import { work } from "@/content/home";

/** v2 work with ross (step 13): one forest panel that sends people to AI Powered, in a new tab. */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto w-full max-w-site px-(--section-px) pb-16">
      <div className="flex flex-col items-start gap-8 rounded-[32px] bg-ink p-8 text-cream laptop:flex-row laptop:items-end laptop:justify-between laptop:p-20">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-sage px-4 py-1.5 text-[15px] font-semibold text-ink">{work.pill}</span>
          <h2 id="work-title" className="text-[54px] leading-[0.9] font-extrabold tracking-[-0.05em] laptop:text-[96px]">
            {work.heading.plain} <span className="serif-accent">{work.heading.accent}</span>
          </h2>
          <p className="font-serif text-[34px] leading-[1.1] text-wash italic">{work.line}</p>
        </div>
        <a href={work.cta.href} target="_blank" rel="noopener noreferrer" className={pillClass("cream")}>
          {work.cta.label}
        </a>
      </div>
    </section>
  );
}
