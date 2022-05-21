// Math Opeations
let math = {
  add: function (num1, num2) {
    return num1 + num2;
  },

  subtract: function (num1, num2) {
    return num1 - num2;
  },

  multiply: function (num1, num2) {
    return num1 * num2;
  },

  divide: function (num1, num2) {
    return num1 / num2;
  },

  sqrt: function (num) {
    return Math.sqrt(num);
  },

  sin: function (angle) {
    let degree = (Math.PI / 180) * angle;
    return Math.sin(degree);
  },

  cos: function (angle) {
    let degree = (Math.PI / 180) * angle;
    // if angle == 0, output: 6.123233995736766e-17,
    // so, round it off to get 0
    if (angle === 90) {
      return Math.round(Math.cos(degree));
    }
    return Math.cos(degree);
  },

  tan: function (angle) {
    let degree = (Math.PI / 180) * angle;
    // if angle == 0, output: 16331239353195370,
    // so, show that it is undefined
    if (angle === 90) {
      return "undefined";
    }
    return Math.tan(degree);
  },

  sqr: function (num) {
    return Math.pow(num, 2);
  },
};

console.log(math.divide(45, 5));
console.log(math.sqrt(49));
console.log(math.cos(60));
