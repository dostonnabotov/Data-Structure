/*--------------
  ARRAY - v2
  Layout: 
    1. Map
    2. Filter
    3. Find
    4. Some
    5. Every
    5. Reduce
    6. forEach
    7. Includes
----------------*/

const items = [
  { name: "TV", price: 200 },
  { name: "Car", price: 900 },
  { name: "Book", price: 15 },
  { name: "Bike", price: 300 },
  { name: "Phone", price: 50 },
  { name: "Computer", price: 150 },
];

// Map
const mapItems = items.map((item) => item.price * 2);
// [ 400, 1800, 30, 600, 100, 300 ]

// Filter
const filterItems = items.filter((item) => item.price <= 150);
// [
//   { name: "Book", price: 15 },
//   { name: "Phone", price: 50 },
//   { name: "Computer", price: 150 },
// ]

// Find
const findItems = items.find((item) => item.name === "Book");
// { name: 'Book', price: 15 }

// Some
const someItems = items.some((item) => item.price <= 100);
// true

// Every
const everyItems = items.every((item) => item.price <= 100);
// false

// Sort - ascending order
const sortItems_ascend = items.sort((a, b) => a.price - b.price);
// [
//   { name: "Book", price: 15 },
//   { name: "Phone", price: 50 },
//   { name: "Computer", price: 150 },
//   { name: "TV", price: 200 },
//   { name: "Bike", price: 300 },
//   { name: "Car", price: 900 },
// ]

// Sort - ascending order
const sortItems_descend = items.sort((a, b) => b.price - a.price);
// [
//   { name: "Car", price: 900 },
//   { name: "Bike", price: 300 },
//   { name: "TV", price: 200 },
//   { name: "Computer", price: 150 },
//   { name: "Phone", price: 50 },
//   { name: "Book", price: 15 },
// ]

// Reduce
const reduceItems = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
// 1615

// forEach
items.forEach((item, index) => {
  // console.log(`${item.name} in index of ${index} costs $${item.price}`);
});
// Car in index of 0 costs 900
// Bike in index of 1 costs 300
// TV in index of 2 costs 200
// e.t.c...

// Includes
const pets = ["car", "bike", "laptop"];
pets.includes("car");
// true

pets.includes("computer");
// false

pets.includes("Bike");
// false

// Check the result in the console
// console.log(variableName);
