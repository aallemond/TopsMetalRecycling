const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

// Supabase credentials
const supabaseUrl = "https://sloykbadfvvxghlnwhwt.supabase.co";
const supabaseKey = "sb_publishable_4FI8RvRej2fXrwFoLNq9Ag_QKFxGWUF";

const supabase = createClient(supabaseUrl, supabaseKey);

// folder containing json files
const dataFolder = "./src/data";

async function importData() {

  const files = fs.readdirSync(dataFolder);

  for (const file of files) {

    if (!file.endsWith(".json")) continue;

    const category = file.replace(".json", "");

    const raw = fs.readFileSync(path.join(dataFolder, file));
    const items = JSON.parse(raw);

   const rows = items
  .map(item => {

    const cleaned = parseFloat(
      (item.price || "").replace(/[^0-9.]/g, "")
    );

    if (isNaN(cleaned)) return null;

    return {
      category: category,
      material: item.type,
      price: cleaned
    };

  })
  .filter(Boolean);

    const { error } = await supabase
      .from("scrap_prices")
      .upsert(rows, { onConflict: ["category", "material"] })
    if (error) {
      console.error("Error inserting", category, error);
    } else {
      console.log("Imported", category);
    }

  }

}

importData();