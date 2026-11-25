import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

// Next.js marks the 404 noindex itself; no canonical, so it isn't tied to the homepage.
export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn't exist on rosspower.ai. Head back to the homepage to find Ross's keynotes, podcasts and story.",
  alternates: { canonical: null },
};

/** The 404 page: the title and a way back home, inside the usual header and footer. */
export default function NotFound() {
  return (
    <Section aria-labelledby="not-found-title" className="flex flex-1 items-center">
      <Container className="flex flex-col items-center gap-8 py-24 text-center tablet:py-32">
        <h1 id="not-found-title" className="type-h2 normal-case">
          This page <span className="voice">isn&apos;t here.</span>
        </h1>
        <Button href="/" variant="ink">
          Back to home
        </Button>
      </Container>
    </Section>
  );
}
