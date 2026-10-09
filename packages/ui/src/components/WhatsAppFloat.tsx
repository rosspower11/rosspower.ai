import { contact } from "../content/brand";
import { cn } from "../lib/cn";
import { WhatsApp } from "./Icon";

/**
 * Bottom-right "Speak to Ross directly" WhatsApp shortcut, matching the one on aipowered.xyz
 * (aipowered-website src/components/ui/whatsapp-floating-cta.tsx).
 */
export function WhatsAppFloat({ className }: { className?: string }) {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Speak to Ross directly on WhatsApp"
      className={cn(
        "fixed right-4 bottom-4 z-[60] flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-[14px] font-semibold text-ink shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] ring-1 ring-white/25 transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#2fe472] hover:shadow-[0_18px_40px_-10px_rgba(37,211,102,0.55)] tablet:right-6 tablet:bottom-6 tablet:gap-3 tablet:px-5 tablet:py-3.5 tablet:text-[16px]",
        className,
      )}
    >
      <WhatsApp className="size-6 shrink-0 tablet:size-7" />
      <span className="leading-none tracking-tight">Speak to Ross directly</span>
    </a>
  );
}
