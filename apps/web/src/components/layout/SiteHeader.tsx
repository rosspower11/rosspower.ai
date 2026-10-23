"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PillButton } from "@/components/ui/PillButton";
import { bookLink, mainNav, menuNav } from "@/content/nav";

/**
 * v2 nav (step 02): flat on the cream page, not fixed. Ross's three roles stacked on the left,
 * "book ross" and a "menu" text button on the right. Same layout on phones.
 */
export function SiteHeader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="mx-auto flex w-full max-w-site items-center justify-between gap-6 px-(--section-px) py-7">
      <nav aria-label="Main">
        {/* 16px links, 4px apart: each link fills its whole 24px row, so the tap target is as big as the spacing allows. */}
        <ul className="flex flex-col">
          {mainNav.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block py-0.5 text-[16px] leading-5 font-semibold transition-colors hover:text-mid">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4 tablet:gap-6">
        <PillButton href={bookLink.href} size="sm">
          {bookLink.label}
        </PillButton>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          className="min-h-11 text-[16px] font-semibold transition-colors hover:text-mid"
        >
          menu
        </button>
      </div>

      <dialog
        ref={dialogRef}
        onClose={close}
        aria-label="Site menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-cream p-0 text-ink backdrop:bg-ink/60"
      >
        <div className="mx-auto flex h-full w-full max-w-site flex-col px-(--section-px) py-7">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={close} className="text-[24px] font-extrabold tracking-[-0.03em]">
              ross power<span className="text-mid">.</span>
            </Link>
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close menu"
              className="relative flex size-11 items-center justify-center rounded-full border-[1.5px] border-ink transition-colors hover:bg-ink hover:text-cream"
            >
              <span className="absolute h-[1.5px] w-4 rotate-45 bg-current" />
              <span className="absolute h-[1.5px] w-4 -rotate-45 bg-current" />
            </button>
          </div>

          <nav aria-label="Menu" className="my-auto py-8">
            <ul className="flex flex-col">
              {menuNav.map((link) => (
                <li key={link.href} className="border-b-[1.5px] border-ink/15">
                  <Link
                    href={link.href}
                    onClick={close}
                    className="block py-3 text-[44px] leading-none font-extrabold tracking-[-0.05em] transition-colors hover:text-mid tablet:text-[64px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <PillButton href={bookLink.href} onClick={close} className="w-full tablet:w-auto tablet:self-start">
            {bookLink.label}
          </PillButton>
        </div>
      </dialog>
    </header>
  );
}
