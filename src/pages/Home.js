import Section from "../components/Section";
import About from "../components/About";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import PriceTable from "../components/PriceTable";
import { useMemo } from "react";

import useScrapPrices from "../hooks/useScrapPrices";
import groupByCategory from "../utils/groupByCategory";

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



 // Manual category order
  const categoryOrder = [
    "aluminum",
    "brass",
    "stainless",
    "misc",
    "copper",
    "cpu",
    "ram",
    "escrap",
    "whole"
  ];

export default function Home() {

  const prices = useScrapPrices();

const groupedPrices = useMemo(() => {
  return groupByCategory(prices || []);
}, [prices]);

  return (
    <div>

      <Hero />

      <About />

      <div id="prices" className="pricingSection">

        <h1 className="pricingTitle">
          Scrap Pricing
        </h1>

        <p className="pricingSubtitle">
          Prices Updated Regularly (Actual pricing may vary.)
        </p>

        {Object.entries(groupedPrices)

          .sort(([a], [b]) => {

            const indexA = categoryOrder.indexOf(a);
            const indexB = categoryOrder.indexOf(b);

            return (
              (indexA === -1 ? 999 : indexA) -
              (indexB === -1 ? 999 : indexB)
            );
          })

          .map(([category, items]) => (

            <Section
              key={category}
              id={category}
              title={formatCategory(category)}
            >

              <PriceTable data={items} />

            </Section>
          ))}

      </div>

      <Contact />

    </div>
  );
}