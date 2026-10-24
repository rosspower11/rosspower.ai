"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { Logo } from "@rosspower/ui/components/Logo";
import { bookLink, mainNav } from "@/content/nav";

/** Ross Power wordmark: forest on the cream bar, cream inside the dark menu. */
function Brand({ onClick, light = true }: { onClick?: () => void; light?: boolean }) {
  return (
    <Link href="/" onClick={onClick} aria-label="Ross Power, home" className="flex items-center py-2">
      <Logo className="w-[116px] tablet:w-[128px]" color={light ? "#f1ece1" : "#17332a"} />
    </Link>
  );
}

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
    // A floating bar 16px from the top. Phones: full width, 20px from each side.
    // Tablet up: centred and only as wide as its contents. The outer strip ignores clicks.
    <header className="pointer-events-none fixed inset-x-5 top-4 z-50 flex justify-center tablet:inset-x-0 tablet:px-4">
      {/* A solid cream bar everywhere, over dark and light sections alike. */}
      <div className="pointer-events-auto flex h-14 w-full items-center justify-between gap-6 rounded-[14px] border border-ink/10 bg-cream py-1.5 pr-1.5 pl-5 text-ink shadow-[0_8px_32px_rgba(23,51,42,0.12)] tablet:w-auto tablet:justify-start laptop:gap-[60px]">
        <Brand light={false} />

        <nav aria-label="Main" className="hidden items-center gap-5 laptop:flex">
          {mainNav.map((link) => (
            <Link key={link.href} href={link.href} className="text-[15px] opacity-75 transition-opacity hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* No Book Ross button on phones: it lives at the bottom of the menu instead. */}
          <span className="hidden tablet:contents">
            <Button href={bookLink.href} variant="ink" size="sm">
              {bookLink.label}
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label="Open menu"
            className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-lg laptop:hidden"
          >
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={close}
        aria-label="Site menu"
        className="pointer-events-auto m-0 h-dvh max-h-none w-full max-w-none bg-ink p-0 text-cream backdrop:bg-ink"
      >
        <div className="mx-auto flex h-full w-full max-w-site flex-col px-5 tablet:px-(--section-px)">
          {/* Phones: the same bar, in the same spot, so the close button replaces the menu button. */}
          <div className="mt-4 flex h-14 shrink-0 items-center justify-between rounded-[14px] border border-cream/15 py-1.5 pr-1.5 pl-5 tablet:mt-0 tablet:h-18 tablet:rounded-none tablet:border-0 tablet:p-0">
            <Brand onClick={close} />
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close menu"
              className="relative flex size-11 items-center justify-center rounded-lg border border-cream/20"
            >
              <span className="absolute h-px w-5 rotate-45 bg-cream" />
              <span className="absolute h-px w-5 -rotate-45 bg-cream" />
            </button>
          </div>

          <nav aria-label="Menu" className="my-auto flex flex-col py-8">
            {mainNav.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="group flex items-baseline gap-4 border-b border-cream/10 py-3 font-sans text-[44px] leading-none font-extrabold tracking-[-0.05em] lowercase transition-colors hover:text-accent tablet:text-[72px]"
              >
                <span className="type-label font-sans text-cream/50 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Pinned to the bottom: Book Ross, full width on phones. */}
          <div className="flex flex-col pb-[max(20px,env(safe-area-inset-bottom))] tablet:flex-row tablet:justify-end tablet:pb-8">
            <Button href={bookLink.href} onClick={close} variant="cream" className="w-full tablet:w-auto">
              {bookLink.label}
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </dialog>
    </header>
  );
}
