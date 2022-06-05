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
