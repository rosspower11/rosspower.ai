import { cn } from "@/lib/cn";

/** Small section label with a blue dot. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("type-label inline-flex items-center gap-2.5", className)}>
      <span aria-hidden className="size-1.5 rounded-full bg-blue" />
      {children}
    </span>
  );
}
