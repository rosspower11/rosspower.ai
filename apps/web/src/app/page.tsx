import { About } from "@/components/home/About";
import { AiPowered } from "@/components/home/AiPowered";
import { Events } from "@/components/home/Events";
import { Hero } from "@/components/home/Hero";
import { Quotes } from "@/components/home/Quotes";
import { Speaking } from "@/components/home/Speaking";
import { Stats } from "@/components/home/Stats";
import { Talks } from "@/components/home/Talks";
import { Work } from "@/components/home/Work";
import { Ticker } from "@/components/home/Ticker";
import { RossLine } from "@/components/home/RossLine";
import { Chats } from "@/components/home/Chats";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeGraph } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph} />
      <Hero />
      <Ticker />
      <RossLine />
      <About />
      <Stats />
      <Speaking />
      <Talks />
      <Chats />
      <Events />
      <AiPowered />
      <Quotes />
      <Work />
    </>
  );
}
