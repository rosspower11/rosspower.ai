import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactPage } from "@/content/contact";
import { talks } from "@/content/home";
import { contactGraph } from "@/lib/structured-data";
import { ContactForm } from "@rosspower/ui/components/ContactForm";
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
    <>
      <JsonLd data={contactGraph} />
      <Section aria-labelledby="contact-title">
        {/* Laptop up: heading left (stays in view), form right. Phones: heading, then form. */}
        <Container className="grid gap-10 laptop:grid-cols-12 laptop:gap-x-12">
          <div className="laptop:col-span-5">
            <div className="flex flex-col items-start gap-5 laptop:sticky laptop:top-10">
              <span className="rounded-full bg-sage px-4 py-1.5 text-[15px] font-semibold">{contactPage.pill}</span>
              <h1 id="contact-title" className="heading normal-case">
                bring ai to <span className="serif-accent">your stage</span>
              </h1>
              <p className="lead">{contactPage.body}</p>
            </div>
          </div>
          <div className="laptop:col-span-7">
            <ContactForm source="website" look="v2" thanks={contactPage.thanks} talks={talks} />
          </div>
        </Container>
      </Section>
    </>
  );
}
