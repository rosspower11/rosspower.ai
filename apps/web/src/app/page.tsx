import { About } from "@/components/home/About";
import { Events } from "@/components/home/Events";
import { Hero } from "@/components/home/Hero";
import { Quotes } from "@/components/home/Quotes";
import { Stats } from "@/components/home/Stats";
import { Talks } from "@/components/home/Talks";
import { Work } from "@/components/home/Work";
import { Ticker } from "@/components/home/Ticker";
import { RossLine } from "@/components/home/RossLine";
import { Chats } from "@/components/home/Chats";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeGraph } from "@/lib/structured-data";

/** Andi's feedback: eight blocks with one job, booking Ross as a keynote speaker, with podcasts as the second route. */
export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph} />
      <Hero />
      <Ticker />
      <RossLine />
      <About />
      <Stats />
      <Talks />
      <Chats />
      <Events />
      <Quotes />
      <Work />
    </>
  );
}
