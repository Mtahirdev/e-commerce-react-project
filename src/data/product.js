// src/data/product.js

const shoeNames = [
  "Classic Runner",
  "Urban Sneaker",
  "Street Walker",
  "Sport Pro",
  "Everyday Comfort",
  "Trail Master",
  "Casual Low Top",
  "Court Classic",
  "Air Light",
  "Flex Trainer",
  "Cloud Step",
  "Power Strike",
];

const electronicNames = [
  "Smart Phone",
  "Wireless Earbuds",
  "Smart Watch",
  "Bluetooth Speaker",
  "Power Bank",
  "Gaming Headset",
  "Tablet Pro",
  "LED Monitor",
  "Wireless Mouse",
  "Mechanical Keyboard",
  "Action Camera",
  "Fast Charger",
];

const shoeDecs = [
  "Lightweight and breathable for all-day comfort.",
  "Durable sole with strong grip on every surface.",
  "Stylish design that goes with any outfit.",
  "Soft cushioning for walking, running and daily use.",
];

const electronicDecs = [
  "High quality build with long battery life.",
  "Fast, reliable performance at a great price.",
  "Modern design with easy setup and use.",
  "Tested quality with 1 year warranty.",
];

const discounts = [10, 15, 20, 25, 30, 35, 40, 50];
const modules = import.meta.glob(
  "../assets/img/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG}",
  { eager: true, import: "default" },
);

// ... keep your shoeNames, electronicNames, shoeDecs, electronicDecs, discounts ...

// Fisher-Yates shuffle
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const files = Object.entries(modules).sort(([a], [b]) =>
  a.localeCompare(b, undefined, { numeric: true }),
);

const built = files.map(([path, img], i) => {
  const file = path.split("/").pop().toLowerCase();
  const isShoe = file.startsWith("shoes");

  const names = isShoe ? shoeNames : electronicNames;
  const decs = isShoe ? shoeDecs : electronicDecs;

  const name = names[i % names.length];
  const price = isShoe ? 3000 + (i % 10) * 500 : 5000 + (i % 12) * 2500;
  const discount = discounts[i % discounts.length];
  const salePrice = Math.round(price - (price * discount) / 100);

  return {
    id: i + 1,
    category: isShoe ? "shoes" : "electronic",
    name,
    title: name,
    heading: `${name} - ${isShoe ? "Footwear" : "Electronics"} Deal`,
    dec: decs[i % decs.length],
    price,
    discount,
    salePrice,
    img,
  };
});

// shuffled once when the app loads (not on every render)
const products = shuffle(built);

export const shoesProducts = products.filter((p) => p.category === "shoes");
export const electronicProducts = products.filter(
  (p) => p.category === "electronic",
);

export default products;
