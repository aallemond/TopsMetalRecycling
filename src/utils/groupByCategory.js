export default function groupByCategory(data) {

  return data.reduce((acc, item) => {

    if (!acc[item.category]) {
      acc[item.category] = [];
    }

    acc[item.category].push(item);

    return acc;

  }, {});
}