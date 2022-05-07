/**************************\
    ARRAY - Intermediate
\**************************/
const items = [
  { name: "Bike", price: 300 },
  { name: "TV", price: 200 },
  { name: "Computer", price: 150 },
  { name: "Phone", price: 50 },
  { name: "Book", price: 5 },
  { name: "Car", price: 1000 },
];

// Map through items
const itemNames = items.map((item) => {
  return item.price;
});

// Find an exact item
const foundItems = items.find((item) => {
  return item.name === "Book";
});

// Check if there is any item which is less than $100,
// If yes, return 'true'. Else, return 'false'
const someInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});

// Check if  all items are less than $100,
// If yes, return 'true'. Else, return 'false'
const everyInexpensiveItems = items.every((item) => {
  return item.price <= 100;
});

// Return the total value/price
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

// Loop through items
items.forEach((item) => {
  console.log(item.name);
});

// Feel free to uncomment and check it in the console
// console.log(itemNames);
// console.log(foundItems);
// console.log(someInexpensiveItems);
// console.log(everyInexpensiveItems);
// console.log(total);
