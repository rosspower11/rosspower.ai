"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AccentWords } from "@/components/ui/Accented";
import { pillClass } from "@/components/ui/PillButton";
import { talkLength, type Talk } from "@/content/home";
import { cn } from "@rosspower/ui/lib/cn";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The four keynote cards and their pop-out (step 09): one native <dialog>, filled with the chosen talk.
 * Closes on ×, a click on the overlay or Esc; focus goes to the close button, then back to the card's link.
 */
export function TalkCards({ talks }: { talks: Talk[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState(0);
  const talk = talks[index];
  const total = pad(talks.length);

  const openTalk = (i: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <ul className="grid gap-5 tablet:grid-cols-2 laptop:grid-cols-4">
        {talks.map((t, i) => {
          const signature = i === 0;
          return (
            <li
              key={t.slug}
              className={cn(
                "flex min-h-[330px] flex-col gap-4 rounded-[28px] border-[1.5px] border-ink p-7",
                signature ? "bg-ink text-cream" : "bg-sand text-ink",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[14px] tabular-nums">
                  {pad(i + 1)} / {total}
                </span>
                <span className="rounded-full bg-sage px-3 py-1 text-[13px] font-semibold text-ink">{t.tag}</span>
              </div>
              <h3>{t.title}</h3>
              <p className="text-[16px] leading-[1.5]">{t.card}</p>
              <button
                type="button"
                onClick={(e) => openTalk(i, e.currentTarget)}
                aria-haspopup="dialog"
                className="mt-auto min-h-11 self-start text-[16px] font-semibold underline-offset-4 hover:underline"
              >
                see the talk<span className="sr-only">: {t.title}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="talk-title"
        onClose={() => triggerRef.current?.focus()}
        // A click on the overlay lands on the dialog itself (the panel inside covers the rest).
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[880px] overflow-y-auto rounded-[32px] bg-cream p-0 text-ink backdrop:bg-[rgba(23,51,42,0.6)]"
      >
        <div className="flex flex-col gap-6 p-6 laptop:p-12">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-sage px-4 py-1.5 text-[14px] font-semibold">
              {pad(index + 1)} · {talk.tag} · {talkLength}
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

          <h2 id="talk-title" className="text-[34px] leading-[0.95] font-extrabold tracking-[-0.04em] laptop:text-[56px]">
            <AccentWords text={talk.title} accent={talk.accent} />
          </h2>
          <p className="lead">{talk.intro}</p>

          <div className="grid gap-8 border-t-[1.5px] border-ink pt-6 tablet:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h3 className="label">how the talk runs</h3>
              <ol className="flex list-decimal flex-col gap-2 pl-5 text-[16px] leading-[1.5] marker:font-semibold marker:text-mid">
                {talk.runs.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="label">the room walks away with</h3>
              <p className="text-[16px] leading-[1.5]">{talk.walksAway}</p>
            </div>
          </div>

          <Link href={`/contact?talk=${talk.slug}`} className={cn(pillClass("forest"), "self-start")}>
            book this talk
          </Link>
        </div>
      </dialog>
    </>
  );
}
