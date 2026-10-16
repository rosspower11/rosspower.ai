import { About } from "@/components/home/About";
import { AiPowered } from "@/components/home/AiPowered";
import { Events } from "@/components/home/Events";
import { Hero } from "@/components/home/Hero";
import { Quotes } from "@/components/home/Quotes";
import { Speaking } from "@/components/home/Speaking";
import { Stats } from "@/components/home/Stats";
import { Talks } from "@/components/home/Talks";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeGraph } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph} />
      <Hero />
      <Stats />
      <About />
      <Speaking />
      <Talks />
      <Events />
      <AiPowered />
      <Quotes />
    </>
  );
}
