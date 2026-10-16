"use client";

import { useEffect } from "react";

/**
 * Smooth scroll for every link to a section of the current page (nav, menu, footer),
 * done in code so it works in every browser and whatever the visitor's motion setting.
 * Links to another page (e.g. /#about from /bio) navigate normally and land on the section.
 */
export function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href*='#']");
      if (!(a instanceof HTMLAnchorElement) || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      // Take over from the browser and Next's link handling for this click.
      e.preventDefault();
      // Wait a frame so a closing menu can release the page scroll first.
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          if (url.hash !== window.location.hash) history.pushState(null, "", url.hash);
        }),
      );
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
