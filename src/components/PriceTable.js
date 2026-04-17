import "../styles/tables.css";

// Format price values
function formatPrice(value) {
  const numberValue = Number(value);

  // If price is invalid or missing
  if (!value || isNaN(numberValue) || numberValue > 1000) {
    return (
      <span className="callForPrice">
        Please call or text for pricing
      </span>
    );
  }

  return `$${numberValue.toFixed(2)}`;
}

export default function PriceTable({ data }) {
  return (
    <div className="tableWrapper">
      <table className="priceTable">

        <thead>
          <tr>
            <th>Type</th>
            <th>Price/lb.</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.material}</td>
              <td>{formatPrice(item.price)}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}