import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function useScrapPrices() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {

    async function fetchPrices() {
      const { data, error } = await supabase
        .from("scrap_prices")
        .select("*")
        .order("display_order", { ascending: true })

      if (!error) setPrices(data);
    }

    fetchPrices();

    const channel = supabase
      .channel("scrap-prices")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "scrap_prices"
        },
        () => {
          fetchPrices(); // refresh data when anything changes
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };

  }, []);

  return prices;
}