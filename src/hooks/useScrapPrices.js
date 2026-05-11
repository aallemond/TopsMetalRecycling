import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import fallbackPrices from "../data/fallbackPrices";

export default function useScrapPrices() {
  const [prices, setPrices] = useState(fallbackPrices); // ← instant load

  useEffect(() => {

    async function fetchPrices() {
      try {
        const { data, error } = await supabase
          .from("scrap_prices")
          .select("*")
          .order("display_order", { ascending: true });

        if (!error && data) {
          setPrices(data);
        }
      } catch (err) {
        console.error("Supabase failed, using fallback data");
      }
    }

    fetchPrices();

  }, []);

  return prices;
}