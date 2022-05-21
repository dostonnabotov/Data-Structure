/*--------------
  ARRAY - v1
  Layout: 
    1. Index
    2. Length
    3. Push
    4. Pop
    5. Shift
    6. Unshift
    7. Multidimensional Array
    8. Index
    9. Length
-----------------*/

var array = ["a", "b", "c", "d", "e"];
// indexes    0    1    2    3    4

// Index
console.log(array[2]); // c

// Length
console.log(array.length); // 5

// Pop
array.pop();
// [ 'a', 'b', 'c', 'd' ]

// Push
array.push("f");
// [ 'a', 'b', 'c', 'd', 'f' ]

// Shift
array.shift();
// [ 'b', 'c', 'd', 'f' ]

// Unshift
array.unshift("g");
// [ 'g', 'b', 'c', 'd', 'f' ]

// Multidimensianl array
let multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Index
console.log(multiArray[1]); // [ 4, 5, 6 ]
console.log(multiArray[0][2]); // 3

// Length
console.log(multiArray.length); // 3
