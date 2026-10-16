"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@rosspower/ui/lib/cn";

/**
 * Full-bleed background video for the hero: muted, looping, inline.
 * The poster shows until the video is actually playing, then the video fades in over it.
 * Visitors who ask for reduced motion only get the poster.
 */
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

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
        onPlaying={() => setPlaying(true)}
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-700 motion-reduce:hidden",
          playing ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
