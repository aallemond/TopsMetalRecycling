import Section from "../components/Section";
import About from "../components/About";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import useScrapPrices from "../hooks/useScrapPrices";
import groupByCategory from "../utils/groupByCategory";
import { lazy, Suspense } from "react";

const PriceTable = lazy(() => import("../components/PriceTable"));



function formatCategory(name) {

  if (!name) return "";

  const specialCases = {
    escrap: "E-Scrap",
    cpu: "CPUs",
    ram: "RAM"
  };

  if (specialCases[name]) {
    return specialCases[name];
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
}

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
    Prices Updated Regularly (Actual pricing may vary.)
  </p>

   {Object.entries(groupedPrices).map(([category, items]) => (

  <Section
    key={category}
    id={category}
   title={formatCategory(category)}
  >

   <Suspense fallback={<div>Loading prices...</div>}>
  <PriceTable data={items} />
</Suspense>

  </Section>

))}
    </div>

     <Contact />

    </div>
  );
}