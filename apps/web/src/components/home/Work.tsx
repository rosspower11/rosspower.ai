import { buttonClass } from "@/components/ui/Button";
import { work } from "@/content/home";

/** "Work with ross" (from Andi's board): one forest panel above the footer that sends people to AI Powered. */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto w-full max-w-site px-(--section-px) pt-(--section-py) pb-16">
      <div className="flex flex-col items-start gap-8 rounded-panel bg-ink p-8 text-cream laptop:flex-row laptop:items-end laptop:justify-between laptop:p-20">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-sage px-4 py-1.5 text-[15px] font-semibold text-ink">{work.pill}</span>
          <h2 id="work-title" className="text-[54px] laptop:text-[96px]">
            {work.heading.plain} <span className="voice">{work.heading.accent}</span>
          </h2>
          <p className="font-serif text-[28px] leading-[1.1] text-wash italic laptop:text-[34px]">{work.line}</p>
        </div>
        <a href={work.cta.href} target="_blank" rel="noopener noreferrer" className={buttonClass("cream")}>
          {work.cta.label}
        </a>
      </div>
    </section>
  );
}
