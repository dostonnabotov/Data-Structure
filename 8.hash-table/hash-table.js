const greeter = {
  firstName: "John",
  lastName: "Smith",
  greeting: function () {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  },
};

console.log(greeter["firstName"]); // John
console.log(greeter.lastName); // Smith
greeter.greeting(); // Hello, John Smith!
