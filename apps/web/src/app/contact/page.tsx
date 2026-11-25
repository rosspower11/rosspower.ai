import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactPage, websiteEnquiryTypes } from "@/content/contact";
import { talks } from "@/content/home";
import { contactGraph } from "@/lib/structured-data";
import { ContactForm } from "@rosspower/ui/components/ContactForm";

const { title, description } = contactPage.meta;

export const metadata: Metadata = pageMetadata({ path: "/contact", title, description });

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactGraph} />
      <Section aria-labelledby="contact-title">
        {/*
          Laptop up: title left (stays in view), form right. Phones: title, then form.
        */}
        <Container className="grid gap-10 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col gap-5 laptop:col-span-5">
            <div className="flex flex-col gap-5 laptop:sticky laptop:top-28">
              <h1 id="contact-title" className="type-h2 normal-case">
                Bring AI to <span className="voice">your stage</span>
              </h1>
              <p className="type-p-lg measure">{contactPage.body}</p>
            </div>
          </div>
          <div className="laptop:col-span-7">
            <ContactForm source="website" thanks={contactPage.thanks} talks={talks} types={websiteEnquiryTypes} />
          </div>
        </Container>
      </Section>
    </>
  );
}
