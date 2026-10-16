import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { contactPage } from "@/content/contact";
import { contact } from "@/content/nav";
import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { asset } from "@rosspower/ui/lib/asset";

const shareImage = {
  url: asset("images/og/og-ross-power.jpg"),
  width: 1200,
  height: 630,
  alt: "Ross Power on stage at HR APAC Forum, Bali",
};

const { title, description } = contactPage.meta;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact", images: [shareImage] },
  twitter: { card: "summary_large_image", title, description, images: [shareImage] },
};

export default function ContactPage() {
  return (
    <Section aria-labelledby="contact-title">
      {/*
        Laptop up: title left (stays in view), form right. Phones: title, then form.
        Extra top space under the header from tablet up; phones keep it tighter.
      */}
      <Container flush="top" className="grid gap-10 pt-[calc(var(--section-py)+16px)] tablet:pt-[calc(var(--header-h)+var(--section-py))] laptop:grid-cols-12 laptop:gap-x-10">
        <div className="flex flex-col gap-5 laptop:col-span-5">
          <div className="flex flex-col gap-5 laptop:sticky laptop:top-28">
            <Eyebrow>{contactPage.eyebrow}</Eyebrow>
            <h1 id="contact-title" className="type-h2 normal-case">
              Bring AI to <span className="voice">your stage</span>
            </h1>
            <p className="type-p-lg measure">{contactPage.body}</p>
            <p className="type-p-sm text-ink/70">
              Rather email?{" "}
              <a href={`mailto:${contact.email}`} className="font-semibold text-ink underline underline-offset-4">
                {contact.email}
              </a>
            </p>
          </div>
        </div>
        <div className="laptop:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
