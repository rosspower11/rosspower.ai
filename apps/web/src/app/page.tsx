import { Chats } from "@/components/home/Chats";
import { Hero } from "@/components/home/Hero";
import { MeetSpeaker } from "@/components/home/MeetSpeaker";
import { PastSpeeches } from "@/components/home/PastSpeeches";
import { Proof } from "@/components/home/Proof";
import { RossLine } from "@/components/home/RossLine";
import { Speaker } from "@/components/home/Speaker";
import { Talks } from "@/components/home/Talks";
import { Ticker } from "@/components/home/Ticker";
import { Work } from "@/components/home/Work";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeGraph } from "@/lib/structured-data";

/** v2 homepage, in the order of Andi's build guide (step 17). */
export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph} />
      <Hero />
      <Ticker />
      <RossLine />
      <MeetSpeaker />
      <Speaker />
      <Talks />
      <Chats />
      <Proof />
      <PastSpeeches />
      <Work />
    </>
  );
}
