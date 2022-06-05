let items = [
  { name: "TV", price: 200 },
  { name: "Car", price: 900 },
  { name: "Book", price: 15 },
  { name: "Bike", price: 300 },
  { name: "Phone", price: 50 },
  { name: "Computer", price: 150 },
];

let fruits = ["Apple", "Mango", "Cherry", "Banana"]

let numbers = [600, 5, 170, 230, 120, 50]

let mix = fruits.concat(numbers);

fruits.indexOf("Mango");
fruits.indexOf("Strawberry");

numbers.lastIndexOf(170);
numbers.lastIndexOf(80);

items.map((item) => item.price * 2);

numbers.filter((item) => item <= 150);

items.find((item) => item.name === "Book");

items.some((item) => item.price <= 100);

items.every((item) => item.price <= 100);

numbers.sort((a, b) => a - b);

numbers.sort((a, b) => b - a);

items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

fruits.forEach((item, index) => {
  // console.log(`${item} is in index of ${index}`);
});

fruits.includes("Mango");

fruits.includes("Strawberry");

