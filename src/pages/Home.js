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
import whole from "../data/whole.json";


export default function Home() {

  const metals = [
    { id:"copper", title: "Copper", data: copper },
    { id: "brass", title: "Brass", data: brass },
    { id: "aluminium",title: "Aluminum", data: aluminum },
    { id:"stainless",title: "Stainless Steel", data: stainless },
    { id:"whole", title: "Whole Scrap", data: whole },
    { id:"circuit",title: "Circuit Boards", data: circuitBoards },
    { id:"cpus",title: "CPUs", data: cpus },
    { id:"ram", title: "RAM", data: ram },
    { id:"misc",title: "Misc.", data: misc }

  ];

  return (
    <div>

    <Hero />
    <About />

    <div id="prices">
    {metals.map((metal) => (
  
    <Section
      key={metal.id}
      id={metal.id}
      title={metal.title}
    >
    <PriceTable data={metal.data} />
   </Section>
))}
    </div>

     <Contact />

    </div>
  );
}