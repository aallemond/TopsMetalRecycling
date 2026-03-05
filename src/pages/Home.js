import Section from "../components/Section";
import PriceTable from "../components/PriceTable";
import About from "../components/About";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
// import {metals} from "../data/metals"
import useScrapPrices from "../hooks/useScrapPrices";
import groupByCategory from "../utils/groupByCategory";





export default function Home() {

  const prices = useScrapPrices();
  const groupedPrices = groupByCategory(prices);

  return (
    <div>

    <Hero />
    <About />

    <div id="prices" className="pricingSection">

       <h1 className="pricingTitle">Scrap Pricing</h1>

  <p className="pricingSubtitle">
    Prices Current as of 3/3/2026 (Actual pricing may vary.)
  </p>

   {Object.entries(groupedPrices).map(([category, items]) => (

  <Section
    key={category}
    id={category}
    title={category.toUpperCase()}
  >

    <PriceTable data={items} />

  </Section>

))}
    </div>

     <Contact />

    </div>
  );
}