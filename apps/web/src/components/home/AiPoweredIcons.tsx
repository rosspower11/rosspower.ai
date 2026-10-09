/**
 * Small looping line icons for the AI Powered cards. Animation lives in
 * globals.css (.aip-*), pauses for reduced motion and speeds up on card hover.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Programmes: an open book whose right page keeps turning. */
export function BookIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-full" aria-hidden>
      <path {...stroke} d="M24 13c-4-2.5-9-3.5-15-3v26c6-.5 11 .5 15 3" />
      <path {...stroke} d="M24 13c4-2.5 9-3.5 15-3v26c-6-.5-11 .5-15 3V13Z" />
      <path {...stroke} d="M13 17h6M13 22h6M13 27h4" opacity="0.5" />
      {/* The turning page, hinged on the spine. */}
      <path {...stroke} className="aip-page" d="M24 13c4-2.5 9-3.5 15-3v26c-6-.5-11 .5-15 3" />
    </svg>
  );
}

/** Solutions: two meshing gears turning against each other. */
export function GearsIcon() {
  const teeth = (cx: number, cy: number, r: number, n: number) =>
    Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      const x1 = cx + Math.cos(a) * r;
      const y1 = cy + Math.sin(a) * r;
      const x2 = cx + Math.cos(a) * (r + 3);
      const y2 = cy + Math.sin(a) * (r + 3);
      return `M${x1.toFixed(2)} ${y1.toFixed(2)}L${x2.toFixed(2)} ${y2.toFixed(2)}`;
    }).join("");
  return (
    <svg viewBox="0 0 48 48" className="size-full" aria-hidden>
      <g className="aip-gear-a">
        <circle {...stroke} cx="18" cy="19" r="9.5" />
        <circle {...stroke} cx="18" cy="19" r="3" />
        <path {...stroke} d={teeth(18, 19, 9.5, 9)} />
      </g>
      <g className="aip-gear-b">
        <circle {...stroke} cx="33" cy="33" r="6.5" />
        <circle {...stroke} cx="33" cy="33" r="2" />
        <path {...stroke} d={teeth(33, 33, 6.5, 7)} />
      </g>
    </svg>
  );
}

/** Events: a person with rings pulsing out, like a room coming alive. */
export function PulseIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-full" aria-hidden>
      <circle {...stroke} className="aip-ring" cx="24" cy="24" r="10" />
      <circle {...stroke} className="aip-ring aip-ring-2" cx="24" cy="24" r="10" />
      <circle {...stroke} cx="24" cy="20.5" r="3.5" />
      <path {...stroke} d="M17.5 31.5c1.2-3.6 3.6-5.5 6.5-5.5s5.3 1.9 6.5 5.5" />
    </svg>
  );
}
