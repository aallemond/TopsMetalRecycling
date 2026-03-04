// import Slider from "../components/Slider";
import Section from "../components/Section";
import PriceTable from "../components/PriceTable";
import About from "../components/About";
import Hero from "../components/Hero";
import Contact from "../components/Contact";


import copper from "../data/copper.json";
import brass from "../data/brass.json";
import aluminum from "../data/aluminum.json";
import stainless from "../data/stainless.json";
import circuitBoards from "../data/circuitBoard.json";
import cpus from "../data/cpu.json";
import misc from "../data/misc.json";
import ram from "../data/ram.json";
import whole from "../data/ram.json";


export default function Home() {

  const metals = [
    { title: "Copper", data: copper },
    { title: "Brass", data: brass },
    { title: "Aluminum", data: aluminum },
    { title: "Stainless Steel", data: stainless },
    { title: "Whole Scrap", data: whole },
    { title: "Circuit Boards", data: circuitBoards },
    { title: "CPUs", data: cpus },
    { title: "RAM", data: ram },
    { title: "Misc.", data: misc }

  ];

  return (
    <div>

    <Hero />
    <About />

    <div id="prices">
      {metals.map((metal) => (
        <Section key={metal.title} title={metal.title}>
          <PriceTable data={metal.data} />
        </Section>
      ))}
    </div>

     <Contact />

    </div>
  );
}