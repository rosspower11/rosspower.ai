import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { bookLink } from "@/content/nav";
import { keynotesIntro, talks } from "@/content/home";
import { TalkList } from "./TalkList";

/** Keynotes (Andi's feedback, step 04): a wide stage photo, the heading, then the four keynote cards. */
export function Talks() {
  return (
    <Section id="keynotes" aria-labelledby="keynotes-title">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        <div className="relative aspect-[16/10] overflow-hidden rounded-panel bg-sage tablet:aspect-[16/7]">
          <Image
            src={keynotesIntro.photo.src}
            alt={keynotesIntro.photo.alt}
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover object-[35%_50%]"
          />
        </div>

        <div className="mb-6 grid gap-5 laptop:grid-cols-12 laptop:gap-x-10">
          <h2 id="keynotes-title" className="laptop:col-span-8">
            Keynotes Ross is ready to give <span className="voice">on your stage</span>
          </h2>
          <div className="flex flex-col items-start gap-6 laptop:col-span-4 laptop:col-start-9 laptop:self-end">
            <p className="type-p-lg measure">{keynotesIntro.body}</p>
            <Button href={bookLink.href} variant="ink">
              {bookLink.label}
            </Button>
          </div>
        </div>
        <TalkList talks={talks} />
      </Container>
    </Section>
  );
}
