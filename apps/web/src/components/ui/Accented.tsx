import type { Accented as AccentedText } from "@/content/home";

/** A heading's text with one part in Instrument Serif italic ("meet your speaker, *ross power*"). */
export function Accented({ plain, accent, accentFirst }: AccentedText) {
  return accentFirst ? (
    <>
      <span className="serif-accent">{accent}</span> {plain}
    </>
  ) : (
    <>
      {plain} <span className="serif-accent">{accent}</span>
    </>
  );
}

/** A title with the given words in italic wherever they appear ("The Humans *Decide*"). */
export function AccentWords({ text, accent }: { text: string; accent: string }) {
  const at = text.indexOf(accent);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className="serif-accent">{accent}</span>
      {text.slice(at + accent.length)}
    </>
  );
}
