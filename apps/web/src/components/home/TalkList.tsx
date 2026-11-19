"use client";

import { useRef, useState } from "react";
import { buttonClass } from "@/components/ui/Button";
import type { Talk } from "@/content/home";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { cn } from "@rosspower/ui/lib/cn";
import Link from "next/link";

/** A talk title with its accent words in Instrument Serif italic ("The Humans *Decide*"). */
function AccentTitle({ title, accent }: { title: string; accent: string }) {
  const at = title.indexOf(accent);
  if (at < 0) return <>{title}</>;
  return (
    <>
      {title.slice(0, at)}
      <span className="voice">{accent}</span>
      {title.slice(at + accent.length)}
    </>
  );
}

/**
 * The keynote cards and their pop-out (Andi's steps 08 and 09).
 * One native <dialog>, filled with the chosen talk. It closes on ×, a click on the overlay or Esc;
 * focus goes to the close button, then back to the card that opened it.
 */
export function TalkList({ talks }: { talks: Talk[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState(0);
  const talk = talks[index];

  const open = (i: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      {/* Andi's keynote cards: four across on laptops, two on tablets, one on phones.
          The signature keynote is dark green (pine on hover); the rest are sand, turning dark green on hover. */}
      <ul className="grid gap-5 tablet:grid-cols-2 laptop:grid-cols-4">
        {talks.map((t, i) => (
          <li key={t.slug} className="flex">
            <button
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              aria-haspopup="dialog"
              aria-label={`See the keynote: ${t.title}`}
              className={cn(
                "group flex min-h-[330px] w-full flex-col items-start gap-4 rounded-card border-[1.5px] border-ink p-7 text-left transition-colors duration-300",
                i === 0
                  ? "bg-ink text-cream hover:border-pine hover:bg-pine focus-visible:bg-pine"
                  : "bg-sand text-ink hover:bg-ink hover:text-cream focus-visible:bg-ink focus-visible:text-cream",
              )}
            >
              <span className="rounded-full bg-sage px-3 py-1 text-[13px] font-semibold whitespace-nowrap text-ink">{t.tag}</span>
              <span className="text-[22px] leading-[1.4] font-medium tracking-[-0.02em] text-balance laptop:text-[24px]">{t.title}</span>
              <span className="text-[16px] leading-[1.5] opacity-85">{t.card}</span>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[16px] font-semibold">
                See the keynote
                <ArrowUpRight className="size-3.5" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="talk-title"
        onClose={() => triggerRef.current?.focus()}
        // A click on the overlay lands on the dialog itself (the panel inside covers the rest).
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[880px] overflow-y-auto rounded-panel bg-cream p-0 text-ink [--voice:var(--color-mid)] backdrop:bg-[rgba(15,30,51,0.6)]"
      >
        <div className="flex flex-col gap-6 p-6 laptop:p-12">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-sage px-4 py-1.5 text-[14px] font-semibold">
              {talk.tag} · {talk.length}
            </span>
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close"
              className="relative flex size-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink transition-colors hover:bg-ink hover:text-cream"
            >
              <span className="absolute h-[1.5px] w-4 rotate-45 bg-current" />
              <span className="absolute h-[1.5px] w-4 -rotate-45 bg-current" />
            </button>
          </div>

          <h2 id="talk-title" className="text-[34px] laptop:text-[56px]">
            <AccentTitle title={talk.title} accent={talk.accent} />
          </h2>
          <p className="type-p-lg">{talk.body}</p>

          {talk.runs.length ? (
            <div className="grid gap-8 border-t-[1.5px] border-ink pt-6 tablet:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="type-label">how the keynote runs</h3>
                <ol className="flex list-decimal flex-col gap-2 pl-5 marker:font-semibold marker:text-mid">
                  {talk.runs.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="type-label">the room walks away with</h3>
                <p>{talk.walksAway}</p>
              </div>
            </div>
          ) : null}

          <Link href={`/contact?talk=${talk.slug}`} className={`${buttonClass("ink")} self-start`}>
            Book Ross
          </Link>
        </div>
      </dialog>
    </>
  );
}
