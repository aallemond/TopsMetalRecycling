// Import TanStack React Table utilities
import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table";

// Import table styling
import "../styles/tables.css";

// Table component receives pricing data as a prop
export default function PriceTable({ data }) {

  // Formats table price values
function formatPrice(value) {

  const numberValue = Number(value);

  // If price is missing or invalid
  if (!value || isNaN(numberValue) || numberValue > 1000) {
    return (
      <span className="callForPrice">
        Please call or text for pricing
      </span>
    );
  }

  // Return formatted currency
  return `$${numberValue.toFixed(2)}`;
}

  // Define the columns for the table
  const columns = [

    // First column: material type
    {
      accessorKey: "material",
      header: "Type"
    },

    // Second column: price
    {
      accessorKey: "price",
      header: "Price/lb.",
      cell: ({ getValue }) => formatPrice(getValue())
    }

  ];

  // Initialize the table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  // Render the table
  return (
    <div className="tableWrapper">
      <table className="priceTable">

        {/* Table header */}
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Table body */}
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(
                    // Render custom cell if defined, otherwise raw value
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
    </div>
  );
}