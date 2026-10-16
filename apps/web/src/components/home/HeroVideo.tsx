"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Full-bleed background video for the hero: muted, looping, inline.
 * The video element shows the same poster until its first frame, so there's never a blank gap.
 * (No fade on the "playing" event: autoplay can start before React attaches the listener.)
 * Visitors who ask for reduced motion only get the poster.
 */
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // Reduced motion: stop it (CSS also hides it), so only the poster shows.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    // Some browsers ignore autoPlay until play() is called; if it's blocked, the poster stays.
    video.play().catch(() => {});
  }, []);

  return (
    <div className="absolute inset-0 bg-ink">
      <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover" />
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 size-full object-cover motion-reduce:hidden"
      />
    </div>
  );
}
