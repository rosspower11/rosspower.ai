import { rossLine } from "@/content/home";

/** v2 Ross's line (step 05): the quote in Instrument Serif italic, signed "ross power". */
export function RossLine() {
  return (
    <section aria-label="Ross's line" className="border-b-[1.5px] border-ink">
      <figure className="mx-auto flex w-full max-w-site flex-col gap-6 px-(--section-px) py-24 laptop:flex-row laptop:items-end laptop:justify-between">
        <blockquote className="max-w-[1000px] font-serif text-[42px] leading-none tracking-[-0.01em] italic laptop:text-[84px]">
          {rossLine.quote}
        </blockquote>
        <figcaption className="label">{rossLine.signature}</figcaption>
      </figure>
    </section>
  );
}
