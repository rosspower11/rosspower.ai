import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { Logo } from "@rosspower/ui/components/Logo";
import { WhatsAppFloat } from "@rosspower/ui/components/WhatsAppFloat";
import { FeatureCard, RowCard, SocialTile, TileCard } from "@/components/LinkCards";
import { Profile } from "@/components/Profile";
import { follow, footer, sections, type LinkItem, type TileLink } from "@/content/links";

/** Group consecutive tiles into pairs so they sit two to a row. */
function blocks(items: LinkItem[]) {
  const out: (LinkItem | TileLink[])[] = [];
  for (const item of items) {
    const last = out[out.length - 1];
    if (item.kind === "tile" && Array.isArray(last)) last.push(item);
    else out.push(item.kind === "tile" ? [item] : item);
  }
  return out;
}

export default function LinksPage() {
  return (
    // Phones: full width. Wider than a phone (480px+): a bordered phone-width column floating on sand.
    <main className="mx-auto flex min-h-dvh w-full max-w-[440px] flex-col gap-10 bg-cream px-3 pt-3 pb-24 min-[480px]:my-10 min-[480px]:min-h-0 min-[480px]:rounded-[36px] min-[480px]:border min-[480px]:border-ink/10 min-[480px]:shadow-[0_24px_80px_rgba(16,19,23,0.12)]">
      <Profile />

      {sections.map((section) => (
        <section key={section.title} aria-label={section.title} className="flex flex-col gap-3">
          <Eyebrow as="h2" className="px-3 pb-1">
            {section.title}
          </Eyebrow>
          {blocks(section.items).map((block) =>
            Array.isArray(block) ? (
              <div key={block[0].href} className="grid grid-cols-2 gap-3">
                {block.map((link) => (
                  <TileCard key={link.href} link={link} />
                ))}
              </div>
            ) : block.kind === "feature" ? (
              <FeatureCard key={block.href} link={block} />
            ) : block.kind === "row" ? (
              <RowCard key={block.href} link={block} />
            ) : null,
          )}
        </section>
      ))}

      <section aria-label="Follow along" className="flex flex-col gap-3">
        <Eyebrow as="h2" className="px-3 pb-1">
          Follow along
        </Eyebrow>
        <div className="grid grid-cols-2 gap-3">
          {follow.map((s) => (
            <SocialTile key={s.label} {...s} />
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-center gap-4 border-t border-ink/10 px-3 pt-8 text-center">
        <Logo className="w-[120px]" color="#101317" />
        <div className="flex items-center gap-4 text-[14px]">
          <a href={footer.site.href} className="font-semibold underline-offset-4 hover:underline">
            {footer.site.label}
          </a>
          <span aria-hidden className="text-ink/30">
            ·
          </span>
          <a href={`mailto:${footer.email}`} className="font-semibold underline-offset-4 hover:underline">
            Email Ross
          </a>
        </div>
        <p className="text-[12px] text-ink/50">© {new Date().getFullYear()} Ross Power</p>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
