import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Logo } from "@rosspower/ui/components/Logo";

// Next.js marks the 404 noindex itself; no canonical, so it isn't tied to the links page.
export const metadata: Metadata = {
  title: { absolute: "Page not found | Ross Power" },
  description: "This page doesn't exist on links.rosspower.ai. Head back to all of Ross Power's links.",
  alternates: { canonical: null },
};

/** The 404 page: the title and a way back to the links, in the same phone-width column. */
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[440px] flex-col items-center justify-center gap-8 bg-cream px-6 py-24 text-center min-[480px]:my-10 min-[480px]:min-h-[560px] min-[480px]:rounded-[36px] min-[480px]:border min-[480px]:border-ink/10 min-[480px]:shadow-[0_24px_80px_rgba(15,30,51,0.12)]">
      <h1 className="text-[44px] normal-case">
        This page <span className="voice">isn&apos;t here.</span>
      </h1>
      <Button href="/" variant="ink">
        Back to all links
      </Button>
      <Logo className="mt-6 w-[120px]" color="#0f1e33" />
    </main>
  );
}
