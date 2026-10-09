import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { book } from "@/content/home";
import { contact } from "@/content/nav";
import { BookingEmbed } from "./BookingEmbed";

export function Book() {
  return (
    <Section id="book" tone="ice" aria-labelledby="book-title">
      {/* Vertical: centred title block, then the calendar. */}
      <Container className="flex flex-col gap-10 tablet:gap-14">
        <div className="mx-auto mb-6 flex max-w-[640px] flex-col items-center gap-5 text-center">
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
        <div className="mx-auto w-full max-w-[960px]">
          <BookingEmbed
            iframeSrc={book.discovery.iframeSrc}
            iframeId={`${book.discovery.calendarId}_rosspower-home`}
            scriptSrc={book.discovery.scriptSrc}
            title="Book a discovery call with Ross"
            fullPageHref={book.discovery.url}
          />
        </div>
      </Container>
    </Section>
  );
}
