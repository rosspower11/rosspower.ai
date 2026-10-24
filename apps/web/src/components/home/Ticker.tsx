import { Fragment } from "react";
import { ticker } from "@/content/home";

/** One run of the items, each followed by a green ✳. */
function Run() {
  return (
    <>
      {[...ticker, ...ticker].map((item, i) => (
        <Fragment key={i}>
          <span>{item}</span>
          <span className="text-mid">✳</span>
        </Fragment>
      ))}
    </>
  );
}

/**
 * Ticker under the hero (from Andi's guide): a sage band scrolling left, one loop every 30s.
 * Two identical runs side by side, so moving by half loops seamlessly. Still under reduced motion.
 */
export function Ticker() {
  return (
    <div className="overflow-hidden border-y-[1.5px] border-ink bg-wash py-[22px] text-ink">
      <p className="sr-only">{ticker.join(", ")}</p>
      <div
        aria-hidden
        className="ticker-track flex w-max gap-12 pr-12 text-[24px] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap tablet:text-[34px]"
      >
        <Run />
        <Run />
      </div>
    </div>
  );
}
