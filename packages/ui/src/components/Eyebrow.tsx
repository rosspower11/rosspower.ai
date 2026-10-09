import { cn } from "../lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  /** Render as a heading when the label is the only title of its section. */
  as?: "span" | "h2" | "h3";
};

/** Section label: a short rule, then uppercase letter-spaced text. Takes the current text colour. */
export function Eyebrow({ children, className, as: Tag = "span" }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-3 font-sans text-[12px] leading-none font-semibold tracking-[0.22em] uppercase opacity-75",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current" />
      {children}
    </Tag>
  );
}
