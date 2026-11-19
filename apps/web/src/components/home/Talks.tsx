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

        {/* Centred header: title, the line under it, then book ross. */}
        <div className="mx-auto mb-6 flex max-w-[880px] flex-col items-center gap-6 text-center">
          <h2 id="keynotes-title">
            Keynotes Ross is ready to give <span className="voice">on your stage</span>
          </h2>
          <p className="type-p-lg measure">{keynotesIntro.body}</p>
          <Button href={bookLink.href} variant="ink">
            {bookLink.label}
          </Button>
        </div>
        <TalkList talks={talks} />
      </Container>
    </Section>
  );
}
