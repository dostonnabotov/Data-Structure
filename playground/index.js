// FizzBuzz game
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i}: Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i}: Buzz`);
  } else {
    console.log(i);
  }
}

// remove duplicate elements in an array
const removeDuplicates = (arr) => {
  const cache = {};
  const result = [];

  for (let i = 0; i <= result.length; i++) {
    if (!cache[arr[i]]) {
      result.push(arr[i]);
      cache[arr[i]] = true;
    }
  }

  return result.sort((a, b) => a - b);
};

removeDuplicates([4, 3, 1, 3, 4, 5, 3]);
// [ 1, 3, 4 ]

// find the factorial of a number
const findFactorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

findFactorial(5);
// 120

// multiply the number by 10,
// and save it in a cache
const demoTimes10 = () => {
  let cache = {};

  return (n) => {
    if (n in cache) {
      console.log("Fetched from cache: ", n);
      return cache[n];
    } else {
      let result = n * 10;
      cache[n] = result;
      console.log("Result: ", result);
      return result;
    }
  };
};

const times10 = demoTimes10();

times10(9);
times10(8);
times10(9);
// Result:  90
// Result:  80
// Fetched from cache:  9

// calculate sum of given input using argumnets
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

sum(5, 8, 2, 6);
// 21


// destructing object into a variable
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

// same as:
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// destructing object and assigning a new variable
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES

// same as:
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
