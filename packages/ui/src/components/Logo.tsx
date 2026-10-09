import { asset } from "../lib/asset";
import { cn } from "../lib/cn";

const LOGO_MASK = `url(${asset("images/brand/ai-powered-logo.png")})`;

type LogoProps = { className?: string; color?: string };

/**
 * The "ai powered" wordmark (1024×176 PNG, in the R2 assets bucket), used as a mask so it can be any colour.
 * Cross-origin masks need CORS: the bucket allows GET from any origin.
 * White by default; pass `color` to recolour it for light grounds.
 */
export function Logo({ className, color = "#ffffff" }: LogoProps) {
  return (
    <span
      aria-hidden
      className={cn("block aspect-[1024/176] transition-colors duration-300", className)}
      style={{
        backgroundColor: color,
        maskImage: LOGO_MASK,
        WebkitMaskImage: LOGO_MASK,
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
