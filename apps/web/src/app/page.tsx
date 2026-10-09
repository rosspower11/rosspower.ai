import { About } from "@/components/home/About";
import { AiPowered } from "@/components/home/AiPowered";
import { Book } from "@/components/home/Book";
import { Events } from "@/components/home/Events";
import { Hero } from "@/components/home/Hero";
import { Quotes } from "@/components/home/Quotes";
import { Speaking } from "@/components/home/Speaking";
import { Stats } from "@/components/home/Stats";
import { Talks } from "@/components/home/Talks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Speaking />
      <Talks />
      <Events />
      <AiPowered />
      <Quotes />
      <Book />
    </>
  );
}
