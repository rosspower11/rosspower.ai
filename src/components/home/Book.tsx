import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { book } from "@/content/home";
import { contact } from "@/content/nav";
import { CalEmbed } from "./CalEmbed";

export function Book() {
  return (
    <Section id="book" tone="ice" aria-labelledby="book-title">
      <Container className="grid gap-10 laptop:grid-cols-12 laptop:gap-x-10">
        <div className="flex flex-col gap-5 laptop:col-span-4">
          <Eyebrow>{book.eyebrow}</Eyebrow>
          <h2 id="book-title">
            Bring AI to <span className="voice">your stage</span>
          </h2>
          <p className="type-p-lg">{book.body}</p>
          <p className="type-p-sm text-ink/70">
            Rather email?{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-ink underline underline-offset-4">
              {contact.email}
            </a>
          </p>
        </div>
        <div className="laptop:col-span-8">
          <CalEmbed calLink={book.calLink} namespace={book.calNamespace} />
        </div>
      </Container>
    </Section>
  );
}
