
var array = [10, 20, 30, 40, 50];
// indexes   0   1   2   3   4

// if I want to get the number 30, and show it to console, I can do the following:
console.log(array[2]);

// which means that, I want to get the element that is under index no.2, which in our case is 30



// Array Example #1
// Adding numbers from array
let num1 = [57, 63, 89];
let num2 = [10, 25, 64, 71];

console.log(num1[2] + num2[1]);

// Array Example #2
// use of push
let studentScores = [50, 70, 90, 100];

studentScores.push(80, 40);

console.log(studentScores);


// Array Example #3
// use of pop
let subscribers = ["John", "James", "David", "Alexander"];

let unsubscribed = subscribers.pop();

console.log(unsubscribed);


// Array Example #4
// combination of push and pop
let fruits = ["apple", "orange", "banana", "grapes", "cherry", "pear"];

fruits.push("strawberry", "pineapple", "lemon");

fruits.pop();
fruits.pop();

console.log(fruits.length);


// Array Example #5
// 3 x 3 matrix calculator
let a = [
    // write the first matrix values
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let b = [
    // write the second matrix values
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let result;

if (a.length === 3 && b.length === 3) {
    console.log(a[0][0] + b[0][0], a[0][1] + b[0][1], a[0][2] + b[0][2]);
    console.log(a[1][0] + b[1][0], a[1][1] + b[1][1], a[1][2] + b[1][2]);
    console.log(a[2][0] + b[2][0], a[2][1] + b[2][1], a[2][2] + b[2][2]);

    // this nested for loop shows the output in one line rather than in matrix form
    /*
    for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
            result = a[row][col] + b[row][col];
            console.log(result);
        }
    }
    */
} else {
    console.log("It works only for 3x3 matrix");
}
