import { cn } from "@rosspower/ui/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  /** Render as a heading when the label is the only title of its section. */
  as?: "span" | "h2" | "h3";
};

/**
 * Section label in Andi's text style: the short rule, then a lowercase Bricolage 600 label.
 * Same props as the shared Eyebrow (packages/ui), which links.rosspower.ai keeps using.
 */
export function Eyebrow({ children, className, as: Tag = "span" }: EyebrowProps) {
  return (
    <Tag className={cn("inline-flex items-center gap-3 font-sans text-[15px] leading-none font-semibold lowercase", className)}>
      <span aria-hidden className="h-[1.5px] w-6 bg-current" />
      {children}
    </Tag>
  );
}
