import { Eyebrow } from "@rosspower/ui/components/Eyebrow";
import { Logo } from "@rosspower/ui/components/Logo";
import { WhatsAppFloat } from "@rosspower/ui/components/WhatsAppFloat";
import { FeatureCard, PartnerButton, RowCard, SocialTile, TileCard } from "@/components/LinkCards";
import { Profile } from "@/components/Profile";
import { follow, live, partners, sections, type LinkItem, type TileLink } from "@/content/links";

type Live<T> = T & { href: string };

/** Group consecutive tiles into pairs so they sit two to a row. */
function blocks(items: Live<LinkItem>[]) {
  const out: (Live<LinkItem> | Live<TileLink>[])[] = [];
  for (const item of items) {
    const last = out[out.length - 1];
    if (item.kind === "tile" && Array.isArray(last)) last.push(item);
    else out.push(item.kind === "tile" ? [item] : item);
  }
  return out;
}

// Links without a URL yet are dropped, and so is any section left empty.
const liveSections = sections
  .map((section) => ({ ...section, items: live(section.items) }))
  .filter((section) => section.items.length > 0);
const partnerLinks = live(partners.links);

export default function LinksPage() {
  return (
    // Phones: full width. Wider than a phone (480px+): a bordered phone-width column floating on sand.
    <main className="mx-auto flex min-h-dvh w-full max-w-[440px] flex-col gap-10 bg-cream px-3 pt-3 pb-24 min-[480px]:my-10 min-[480px]:min-h-0 min-[480px]:rounded-[36px] min-[480px]:border min-[480px]:border-ink/10 min-[480px]:shadow-[0_24px_80px_rgba(16,19,23,0.12)]">
      <Profile />

      {liveSections.map((section) => (
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

      {/* Partner links, each with its disclosure line. Hidden until a link is in. */}
      {partnerLinks.length > 0 && (
        <section aria-label={partners.title} className="flex flex-col gap-3">
          <Eyebrow as="h2" className="px-3 pb-1">
            {partners.title}
          </Eyebrow>
          {partnerLinks.map((link) => (
            <PartnerButton key={link.title} title={link.title} href={link.href} disclosure={partners.disclosure} />
          ))}
        </section>
      )}

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
        <p className="text-[12px] text-ink/50">© {new Date().getFullYear()} Ross Power</p>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
