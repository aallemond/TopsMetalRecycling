import Section from "../components/Section";
import PriceTable from "../components/PriceTable";
import About from "../components/About";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import {metals} from "../data/metals"





export default function Home() {

  return (
    <div>

    <Hero />
    <About />

    <div id="prices" className="pricingSection">

       <h1 className="pricingTitle">Scrap Pricing</h1>

  <p className="pricingSubtitle">
    Prices Current as of 3/3/2026 (Actual pricing may vary.)
  </p>

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