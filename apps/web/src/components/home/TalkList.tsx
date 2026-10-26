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
 * The talk cards and their pop-out (Andi's steps 08 and 09).
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
      {/* Andi's talk cards: four across on laptops, two on tablets, one on phones. Sand, turning forest on hover. */}
      <ul className="grid gap-5 tablet:grid-cols-2 laptop:grid-cols-4">
        {talks.map((t, i) => (
          <li key={t.slug} className="flex">
            <button
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              aria-haspopup="dialog"
              aria-label={`See the talk: ${t.title}`}
              className="group flex min-h-[330px] w-full flex-col gap-4 rounded-card border-[1.5px] border-ink bg-sand p-7 text-left text-ink transition-colors duration-300 hover:bg-ink hover:text-cream focus-visible:bg-ink focus-visible:text-cream"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="text-[14px] whitespace-nowrap tabular-nums">
                  {pad(i + 1)} / {pad(talks.length)}
                </span>
                <span className="rounded-full bg-sage px-3 py-1 text-[13px] font-semibold whitespace-nowrap text-ink">{t.tag}</span>
              </span>
              <span className="type-h3">{t.title}</span>
              <span className="text-[16px] leading-[1.5] opacity-85">{t.card}</span>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[16px] font-semibold">
                see the talk
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
        className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[880px] overflow-y-auto rounded-panel bg-cream p-0 text-ink [--voice:currentColor] backdrop:bg-[rgba(23,51,42,0.6)]"
      >
        <div className="flex flex-col gap-6 p-6 laptop:p-12">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-sage px-4 py-1.5 text-[14px] font-semibold">
              {pad(index + 1)} · {talk.tag} · {talk.length}
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
