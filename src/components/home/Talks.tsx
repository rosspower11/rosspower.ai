import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "@/components/ui/Icon";
import { podcast, talks } from "@/content/home";
import { bookLink } from "@/content/nav";

export function Talks() {
  return (
    <Section id="talks" aria-labelledby="talks-title">
      <Container className="flex flex-col gap-10 tablet:gap-14">
        <div className="grid gap-5 laptop:grid-cols-12 laptop:gap-x-10">
          <div className="flex flex-col gap-5 laptop:col-span-6">
            <Eyebrow>Talks</Eyebrow>
            <h2 id="talks-title">
              Ready to <span className="voice">have a chat?</span>
            </h2>
          </div>
          <p className="type-p-lg measure laptop:col-span-5 laptop:col-start-8 laptop:self-end">
            On your stage, on your panel or on your podcast. Pick the conversation your audience needs and Ross will
            shape it around them.
          </p>
        </div>

        <ol className="border-t border-ink/15">
          {talks.map((t, i) => (
            <li key={t.title} className="border-b border-ink/15">
              <Link
                href={bookLink.href}
                className="group grid gap-3 py-7 transition-colors tablet:grid-cols-[80px_1fr_auto] tablet:items-start tablet:gap-8 laptop:grid-cols-[120px_minmax(0,5fr)_minmax(0,4fr)_auto] laptop:py-9"
              >
                <span className="font-serif text-[32px] leading-none text-blue tabular-nums tablet:text-[44px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="type-label text-ink/60">{t.kind}</span>
                  <h3 className="transition-colors group-hover:text-blue">{t.title}</h3>
                </div>
                <p className="type-p-sm text-ink/75 tablet:col-start-2 laptop:col-start-auto">{t.body}</p>
                <span className="hidden size-12 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream tablet:row-start-1 tablet:flex tablet:col-start-3 laptop:col-start-4">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-6 rounded-panel bg-ice p-7 tablet:flex-row tablet:items-center tablet:justify-between tablet:p-10 laptop:p-12">
          <div className="flex flex-col gap-3">
            <Eyebrow>{podcast.eyebrow}</Eyebrow>
            <h3 className="type-h3">
              Get Ross on <span className="voice">your show</span>
            </h3>
            <p className="measure">{podcast.body}</p>
          </div>
          <Link
            href={bookLink.href}
            className="inline-flex min-h-11 items-center gap-2.5 self-start rounded-xl bg-ink px-6 py-3.5 font-semibold whitespace-nowrap text-cream hover:bg-ink/85 tablet:self-auto"
          >
            Invite Ross on
            <ArrowUpRight />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
