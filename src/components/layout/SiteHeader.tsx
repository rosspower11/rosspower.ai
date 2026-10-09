"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { bookLink, contact, mainNav } from "@/content/nav";
import { cn } from "@/lib/cn";

/** Pages whose first section is dark, so the header starts in its light-on-dark state. */
const DARK_TOP = new Set(["/"]);

/** AI Powered wordmark: white over dark sections, ink over light ones. */
function Brand({ onClick, light = true }: { onClick?: () => void; light?: boolean }) {
  return (
    <Link href="/" onClick={onClick} aria-label="Ross Power, home" className="flex items-center py-2">
      <Logo className="w-[116px] tablet:w-[128px]" color={light ? "#ffffff" : "#101317"} />
    </Link>
  );
}

export function SiteHeader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [overDark, setOverDark] = useState(() => DARK_TOP.has(pathname));

  // Match the section under the header: every Section carries data-tone.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const probe = 40; // vertical middle of the floating bar
        let dark = false;
        for (const el of document.querySelectorAll<HTMLElement>("[data-tone]")) {
          const r = el.getBoundingClientRect();
          if (r.top <= probe && r.bottom > probe) dark = el.dataset.tone === "ink";
        }
        setOverDark(dark);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

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
      <div
        className={cn(
          "pointer-events-auto flex h-14 w-full items-center justify-between gap-6 rounded-[14px] border py-1.5 pr-1.5 pl-5 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 tablet:w-auto tablet:justify-start laptop:gap-[60px]",
          overDark
            ? "border-cream/15 bg-ink/45 text-cream shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            : "border-ink/10 bg-cream/75 text-ink shadow-[0_8px_32px_rgba(16,19,23,0.10)]",
        )}
      >
        <Brand light={overDark} />

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
            <Button href={bookLink.href} variant={overDark ? "cream" : "ink"} size="sm">
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
                className="group flex items-baseline gap-4 border-b border-cream/10 py-3 font-display text-[44px] leading-none uppercase transition-colors hover:text-accent tablet:text-[72px]"
              >
                <span className="type-label font-sans text-cream/50 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Pinned to the bottom: contact, then a full-width Book Ross on phones. */}
          <div className="flex flex-col gap-5 pb-[max(20px,env(safe-area-inset-bottom))] tablet:flex-row tablet:items-center tablet:justify-between tablet:pb-8">
            <a href={`mailto:${contact.email}`} className="type-p-sm text-center text-cream/70 hover:text-cream tablet:text-left">
              {contact.email}
            </a>
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
