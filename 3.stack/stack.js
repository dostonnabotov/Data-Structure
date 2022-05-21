// program to implement stack data structure
class Stack {
  constructor() {
    this.array = [];
  }

  // add element at rear
  add(element) {
    return this.array.push(element);
  }

  // remove element at rear
  remove() {
    if (this.array.length != 0) {
      return this.array.pop();
    } else {
      console.log("empty array");
    }
  }

  // view the last element
  peek() {
    return this.array[this.array.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.array.length == 0;
  }

  // the size of the stack
  size() {
    return this.array.length;
  }

  // empty the stack
  clear() {
    this.array = [];
  }
}

let stack = new Stack();

stack.add("Word");
stack.add("Excel");
stack.add("PowerPoint");
stack.add("Teams");
// [ 'Word', 'Excel', 'PowerPoint', 'Teams' ]

stack.remove();
// [ 'Word', 'Excel', 'PowerPoint' ]

stack.peek();
// PowerPoint

stack.isEmpty();
// false

stack.size();
// 3

stack.clear();
// []

stack.isEmpty();
// true
