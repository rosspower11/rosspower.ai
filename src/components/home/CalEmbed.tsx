"use client";

import { useEffect } from "react";

type Props = { calLink: string; namespace: string };

type CalFn = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, (...args: unknown[]) => void>;
  q?: unknown[];
};

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

/** Cal.com's official inline embed loader, run once on mount. */
function loadCal() {
  /* eslint-disable */
  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal; const ar = arguments;
      if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
      if (ar[0] === L) {
        const api: any = function () { p(api, arguments); };
        const namespace = ar[1]; api.q = api.q || [];
        if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  /* eslint-enable */
}

export function CalEmbed({ calLink, namespace }: Props) {
  const elementId = `cal-inline-${namespace}`;

  useEffect(() => {
    loadCal();
    const Cal = window.Cal!;
    Cal("init", namespace, { origin: "https://app.cal.com" });
    const ns = Cal.ns![namespace];
    ns("inline", {
      elementOrSelector: `#${elementId}`,
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink,
    });
    ns("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      theme: "light",
      cssVarsPerTheme: { light: { "cal-brand": "#101317" } },
    });
  }, [calLink, namespace, elementId]);

  return (
    <div className="overflow-hidden rounded-panel border-[1.5px] border-ink bg-card">
      <div id={elementId} className="min-h-[640px] w-full" />
      <noscript>
        <a href={`https://cal.com/${calLink}`}>Book a time with Ross on Cal.com</a>
      </noscript>
    </div>
  );
}
