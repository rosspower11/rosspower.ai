"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { Logo } from "@rosspower/ui/components/Logo";
import { bookLink, mainNav, menuNav } from "@/content/nav";

/** Ross Power wordmark: forest on the cream bar, cream inside the dark menu. */
function Brand({ onClick, light = true }: { onClick?: () => void; light?: boolean }) {
  return (
    <Link href="/" onClick={onClick} aria-label="Ross Power, home" className="flex items-center py-2">
      <Logo className="w-[148px] tablet:w-[176px]" color={light ? "#f1ece1" : "#17332a"} />
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
    // Full width, flat on the page, not fixed (scrolls away with it). Logo left, Ross's roles in the
    // centre, book ross right. Phones: logo and book ross, with the roles and the rest in the menu.
    <header className="w-full border-b-[1.5px] border-ink/10 bg-cream text-ink">
      <div className="mx-auto grid w-full max-w-site grid-cols-[1fr_auto] items-center gap-4 px-(--section-px) py-2 tablet:grid-cols-[1fr_auto_1fr] tablet:py-2.5">
        <Brand light={false} />

        <nav aria-label="Main" className="hidden tablet:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center text-[16px] font-semibold transition-colors hover:text-mid">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2">
          {/* Tablet up only: phones have no room, and the talks are in the menu there. */}
          <span className="hidden tablet:contents">
            <Button href="/#talks" variant="outline" size="sm">
              see the talks
            </Button>
          </span>
          <Button href={bookLink.href} variant="ink" size="sm">
            {bookLink.label}
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label="Open menu"
            className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-full tablet:hidden"
          >
            <span className="h-[1.5px] w-5 bg-current" />
            <span className="h-[1.5px] w-5 bg-current" />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={close}
        aria-label="Site menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-ink p-0 text-cream backdrop:bg-ink"
      >
        <div className="mx-auto flex h-full w-full max-w-site flex-col px-5 tablet:px-(--section-px)">
          {/* The same row as the header, so the close button sits where the menu button was. */}
          <div className="flex shrink-0 items-center justify-between py-4">
            <Brand onClick={close} />
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close menu"
              className="relative flex size-11 items-center justify-center rounded-full border-[1.5px] border-cream/30"
            >
              <span className="absolute h-px w-5 rotate-45 bg-cream" />
              <span className="absolute h-px w-5 -rotate-45 bg-cream" />
            </button>
          </div>

          <nav aria-label="Menu" className="my-auto flex flex-col py-8">
            {menuNav.map((link, i) => (
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
