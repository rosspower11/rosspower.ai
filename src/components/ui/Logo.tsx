import { cn } from "@/lib/cn";

type LogoProps = { className?: string; color?: string };

/**
 * The "ai powered" wordmark (1024×176 PNG), used as a mask so it can be any colour.
 * White by default; pass `color` to recolour it for light grounds.
 */
export function Logo({ className, color = "#ffffff" }: LogoProps) {
  return (
    <span
      aria-hidden
      className={cn("block aspect-[1024/176] transition-colors duration-300", className)}
      style={{
        backgroundColor: color,
        maskImage: "url(/images/brand/ai-powered-logo.png)",
        WebkitMaskImage: "url(/images/brand/ai-powered-logo.png)",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "left center",
        WebkitMaskPosition: "left center",
      }}
    />
  );
}
