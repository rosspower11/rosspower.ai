"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/Button";

type ShortBio = { label: string; text: string };


/** The two short bios, each with a copy button, plus downloads for both bios and the portrait. */
export function ShortBios({ items, portrait }: { items: ShortBio[]; portrait: string }) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (bio: ShortBio) => {
    try {
      await navigator.clipboard.writeText(bio.text);
      setCopied(bio.label);
      window.setTimeout(() => setCopied((c) => (c === bio.label ? null : c)), 2000);
    } catch {
      // Clipboard blocked (e.g. insecure context): the text is still selectable.
    }
  };

  const downloadBios = () => {
    const body = ["Ross Power: short bios", "", ...items.flatMap((b) => [b.label, b.text, ""])].join("\n");
    const url = URL.createObjectURL(new Blob([body], { type: "text/plain;charset=utf-8" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "ross-power-short-bios.txt" });
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-4 tablet:grid-cols-2 tablet:gap-5">
        {items.map((bio) => (
          <article key={bio.label} className="flex flex-col gap-4 rounded-card border border-ink/10 bg-card p-6 laptop:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="type-label text-mid">{bio.label}</h3>
              <button
                type="button"
                onClick={() => copy(bio)}
                className={buttonClass("outline", "sm")}
                aria-label={`Copy the ${bio.label} bio`}
              >
                {copied === bio.label ? "Copied" : "Copy"}
              </button>
            </div>
            <p className="type-p text-ink/85">{bio.text}</p>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button type="button" onClick={downloadBios} className={buttonClass("ink", "sm")}>
          Download bios (.txt)
        </button>
        <a
          href={portrait}
          download="ross-power-portrait.jpg"
          className={buttonClass("outline", "sm")}
        >
          Download portrait (.jpg)
        </a>
      </div>
    </div>
  );
}
