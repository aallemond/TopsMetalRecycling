import React from "react";
import { useReactTable, getCoreRowModel,flexRender,} from "@tanstack/react-table";
import copperData from "./COPPER.json";
import brassData from "./BRASS.json";
import aluminumData from "./ALUMINUM.json"
import stainlessData from "./STAINLESS.json"
import miscData from "./MISC.json"

//Table Headers
const columns = [

  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "price",
    header: "Price/lb.",
  },
  
];
//Copper Table Data
export default function CopperTable() {
  const copperTable = useReactTable({
    data: copperData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  //Brass Table Data
  const brassTable = useReactTable({
    data: brassData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  //Alum Table Data
  const alumTable = useReactTable({
    data: aluminumData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  //Stainless Table Data
  const stainlessTable = useReactTable({
    data: stainlessData,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  //Misc Table Data
  const miscTable = useReactTable({
    data: miscData,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  //Function to render table for each dataset
   const renderTable = table => (
    <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: 32 }}>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th
                key={header.id}
                style={{ border: "1px solid #ccc", padding: "8px" }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td
                key={cell.id}
                style={{ border: "1px solid #ccc", padding: "8px" }}
              >
                {flexRender(
                  cell.column.columnDef.cell ??
                    cell.column.columnDef.accessorKey,
                  cell.getContext()
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );


  

  return (
   <div>

    <h1>Copper</h1>
    <h3>Prices As Of 12/15/25</h3>
    {renderTable(copperTable)}

    <h1>Other Scrap Categories</h1>
    <h2>Brass</h2>
    {renderTable(brassTable)}

    <h2>Aluminum & Coolers</h2>
    <h3>Cash paid at sale except A/C rads</h3>
    {renderTable(alumTable)}

    <h2>Common Stainless Steel</h2>
    {renderTable(stainlessTable)}

    <h2>Miscellaneous</h2>
    <h3>Cash Paid at Time of Sale</h3>
    {renderTable(miscTable)}

    <h4>Also buying specialty metals and super alloys like inconel and titanium etc. Text me for more info 337-381-2003</h4>


    </div>



    
  );
}




