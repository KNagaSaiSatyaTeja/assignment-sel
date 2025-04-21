const groupByCategory = (arr, key) => {
  const result = {};
  arr.forEach((item) => {
    const category = item[key];
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(item);
  });
  return result;
};

const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "T-Shirt", category: "Apparel", price: 25 },
  { name: "Mouse", category: "Electronics", price: 30 },
  { name: "Jeans", category: "Apparel", price: 70 },
];
const grouped = groupByCategory(products, "category");
console.log(grouped);
