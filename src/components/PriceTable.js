import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table";
import "../styles/tables.css";

export default function PriceTable({ data }) {

  const columns = [
    {
      accessorKey: "material",
      header: "Type"
    },
  {
  accessorKey: "price",
  header: "Price/lb.",
  cell: ({ getValue }) => {
    const value = getValue();

    const numberValue = Number(value);

    // If value isn't a valid price
    if (!value || isNaN(numberValue) || numberValue > 1000) {
      return (
        <span className="callForPrice">
          Please call or text for pricing
        </span>
      );
    }

    return `$${numberValue.toFixed(2)}`;
  }
}
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="tableWrapper">
    <table className="priceTable">
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

      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
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
    </div>
  );
}