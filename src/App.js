import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import copperData from "./COPPER.json";

const columns = [

  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "price",
    header: "Price/lb.",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

export default function ScrapTable() {
  const table = useReactTable({
    data: copperData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
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
}




