"use client";

import { useCallback, useEffect } from "react";

type BookingEmbedProps = {
  iframeSrc: string;
  iframeId: string;
  scriptSrc: string;
  title: string;
  /** Full-page booking link shown under the embed. */
  fullPageHref: string;
};

/** Tall enough for the GHL calendar grid. */
const MIN_HEIGHT_PX = 900;

function revealIframe(iframe: HTMLIFrameElement) {
  iframe.removeAttribute("data-iframe-resizer-initialized");
  iframe.removeAttribute("data-initial-iframe-hidden");
  iframe.style.visibility = "visible";
  iframe.style.opacity = "1";
  iframe.style.display = "block";
  iframe.style.pointerEvents = "auto";
  // form_embed.js can also park the iframe off-screen (position absolute, left -9999px).
  iframe.style.position = "relative";
  iframe.style.left = "";
  iframe.style.height = `${MIN_HEIGHT_PX}px`;
  iframe.style.minHeight = `${MIN_HEIGHT_PX}px`;
}

/**
 * GoHighLevel booking widget, ported from aipowered-website (BookingEmbed):
 * official iframe + form_embed.js, kept visible if the script hides it.
 */
export function BookingEmbed({ iframeSrc, iframeId, scriptSrc, title, fullPageHref }: BookingEmbedProps) {
  const syncIframe = useCallback(() => {
    const iframe = document.getElementById(iframeId);
    if (iframe instanceof HTMLIFrameElement) revealIframe(iframe);
  }, [iframeId]);

  useEffect(() => {
    syncIframe();

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }

    // GHL can hide the iframe until form_embed.js finishes; keep it visible.
    const timers = [0, 100, 500, 1500, 3000].map((ms) => window.setTimeout(syncIframe, ms));

    // It can also re-hide it later, so undo that whenever it happens.
    const iframe = document.getElementById(iframeId);
    const observer =
      iframe instanceof HTMLIFrameElement
        ? new MutationObserver(() => {
            if (iframe.style.visibility === "hidden" || iframe.style.left === "-9999px") revealIframe(iframe);
          })
        : null;
    observer?.observe(iframe as HTMLIFrameElement, { attributes: true, attributeFilter: ["style"] });

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      observer?.disconnect();
    };
  }, [iframeId, scriptSrc, syncIframe]);

  return (
    <div className="overflow-hidden rounded-panel border border-ink/10 bg-white">
      <iframe
        src={iframeSrc}
        id={iframeId}
        title={title}
        className="block w-full border-0 bg-white"
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: MIN_HEIGHT_PX, height: MIN_HEIGHT_PX }}
        scrolling="no"
        loading="lazy"
        allow="payment *"
        onLoad={syncIframe}
      />
      <p className="type-p-sm border-t border-ink/10 px-4 py-3 text-center text-ink/70">
        Prefer a full page?{" "}
        <a
          href={fullPageHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ink underline underline-offset-4 hover:text-blue"
        >
          Open booking in a new tab
        </a>
      </p>
    </div>
  );
}
