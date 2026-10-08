"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icon";
import { bookLink, contact, mainNav } from "@/content/nav";

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-3">
      <span className="relative size-9 overflow-hidden rounded-full bg-stone ring-1 ring-current/20">
        <Image src="/images/ross/ross-headshot-bw.jpg" alt="" fill sizes="36px" className="object-cover object-[50%_20%]" />
      </span>
      <span className="text-[17px] font-semibold tracking-[-0.01em]">Ross Power</span>
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
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-cream/90 text-ink backdrop-blur-md">
      <div className="mx-auto flex h-18 w-full max-w-site items-center justify-between gap-6 px-(--section-px)">
        <Brand />

        <nav aria-label="Main" className="hidden items-center gap-8 laptop:flex">
          {mainNav.map((link) => (
            <Link key={link.href} href={link.href} className="text-[15px] text-ink/70 transition-colors hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden tablet:contents">
            <Button href={bookLink.href} variant="ink" size="sm">
              {bookLink.label}
              <ArrowUpRight />
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label="Open menu"
            className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-ink/20 laptop:hidden"
          >
            <span className="h-px w-5 bg-ink" />
            <span className="h-px w-5 bg-ink" />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={close}
        aria-label="Site menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-ink p-0 text-cream backdrop:bg-ink"
      >
        <div className="mx-auto flex h-full w-full max-w-site flex-col px-(--section-px)">
          <div className="flex h-18 items-center justify-between">
            <Brand onClick={close} />
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close menu"
              className="relative flex size-11 items-center justify-center rounded-xl border border-cream/20"
            >
              <span className="absolute h-px w-5 rotate-45 bg-cream" />
              <span className="absolute h-px w-5 -rotate-45 bg-cream" />
            </button>
          </div>

          <nav aria-label="Menu" className="my-auto flex flex-col py-10">
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

          <div className="flex flex-col gap-4 pb-8 tablet:flex-row tablet:items-center tablet:justify-between">
            <a href={`mailto:${contact.email}`} className="type-p-sm text-cream/70 hover:text-cream">
              {contact.email}
            </a>
            <Button href={bookLink.href} onClick={close} variant="accent">
              {bookLink.label}
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </dialog>
    </header>
  );
}
