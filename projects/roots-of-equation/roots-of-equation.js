const a = parseInt(prompt('Enter the first number: '));
const b = parseInt(prompt('Enter the second number: '));
const c = parseInt(prompt('Enter the third number: '));
const disc = (b * b - 4 * a * c);
console.log(`The discriminant is equal to ${disc}`);
if (disc > 0){
  var root1 = ( -b + sqrt(disc)) / (2 * a);
  var root2 = ( -b - sqrt(disc)) / (2 * a);

  console.log(`The first root equals to ${root1}`);
  console.log(`The second root equals to ${root2}`);
}

else if (disc = 0) {
  root1 = -b / (2 *a);
  console.log(`The first root ${root1} equals to the second root ${root2}`);
}
else {
  var real = -b / (2 * a);
  var imaginary = sqrt(-disc) / (2 * a);
  console.log(`The first root ${root1} and the second root ${root2} are imaginary`);
  console.log(`Real equals to ${real}, imaginary equals to ${imaginary}`);
}