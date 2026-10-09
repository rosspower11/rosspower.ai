import Image, { type ImageProps } from "next/image";
import { cn } from "@rosspower/ui/lib/cn";

type MediaFrameProps = Omit<ImageProps, "fill" | "className"> & {
  /** CSS aspect ratio, e.g. "4 / 5". */
  ratio: string;
  radius?: "card" | "panel";
  className?: string;
  imageClassName?: string;
};

/** Rounded, cropped photo at a fixed aspect ratio. */
export function MediaFrame({ ratio, radius = "card", className, imageClassName, alt, ...image }: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-stone",
        radius === "card" ? "rounded-card" : "rounded-panel",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <Image fill alt={alt} className={cn("object-cover", imageClassName)} {...image} />
    </div>
  );
}
