"use client";

import { useRef, useState } from "react";
import { buttonClass } from "@/components/ui/Button";
import type { Talk } from "@/content/home";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import Link from "next/link";

const pad = (n: number) => String(n).padStart(2, "0");

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
 * The numbered talk rows and their pop-out (Andi's step 09 pattern, in our layout).
 * One native <dialog>, filled with the chosen talk. It closes on ×, a click on the overlay or Esc;
 * focus goes to the close button, then back to the row that opened it.
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
      <ol className="border-t-[1.5px] border-ink/15">
        {talks.map((t, i) => (
          <li key={t.slug} className="border-b-[1.5px] border-ink/15">
            <button
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              aria-haspopup="dialog"
              aria-label={`See the talk: ${t.title}`}
              className="group grid w-full gap-3 py-7 text-left transition-colors tablet:grid-cols-[80px_1fr_auto] tablet:items-start tablet:gap-8 laptop:grid-cols-[120px_minmax(0,5fr)_minmax(0,4fr)_auto] laptop:py-9"
            >
              <span className="font-sans text-[32px] leading-none font-extrabold tracking-[-0.05em] text-mid tabular-nums tablet:text-[44px]">
                {pad(i + 1)}
              </span>
              <span className="flex flex-col gap-2">
                <span className="type-label text-ink/60">{t.kind}</span>
                <span className="type-h3 transition-colors group-hover:text-mid">{t.title}</span>
              </span>
              <span className="flex flex-col gap-3 tablet:col-start-2 laptop:col-start-auto">
                <span className="type-p-sm text-ink/75">{t.body}</span>
                <span className="type-label inline-flex items-center gap-1.5 transition-colors group-hover:text-mid">
                  see the talk
                  <ArrowUpRight className="size-3.5" />
                </span>
              </span>
              <span className="hidden size-12 items-center justify-center rounded-full border-[1.5px] border-ink/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream tablet:col-start-3 tablet:row-start-1 tablet:flex laptop:col-start-4">
                <ArrowUpRight className="size-5" />
              </span>
            </button>
          </li>
        ))}
      </ol>

      <dialog
        ref={dialogRef}
        aria-labelledby="talk-title"
        onClose={() => triggerRef.current?.focus()}
        // A click on the overlay lands on the dialog itself (the panel inside covers the rest).
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[880px] overflow-y-auto rounded-panel bg-cream p-0 text-ink [--voice:currentColor] backdrop:bg-[rgba(23,51,42,0.6)]"
      >
        <div className="flex flex-col gap-6 p-6 laptop:p-12">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-sage px-4 py-1.5 text-[14px] font-semibold">
              {pad(index + 1)} · {talk.kind.toLowerCase()} · {talk.length}
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

          {talk.runs ? (
            <div className="grid gap-8 border-t-[1.5px] border-ink pt-6 tablet:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="type-label">how the talk runs</h3>
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
            book this talk
          </Link>
        </div>
      </dialog>
    </>
  );
}
