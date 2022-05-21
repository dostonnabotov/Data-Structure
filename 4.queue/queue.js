// program to implement queue data structure
class Queue {
  constructor() {
    this.array = [];
  }

  // add element at front
  add(element) {
    return this.array.unshift(element);
  }

  // remove element at front
  remove() {
    if (this.array.length != 0) {
      return this.array.shift();
    } else {
      console.log("empty array");
    }
  }

  // view the first element
  peek() {
    return this.array[this.array.length - this.array.length];
  }

  // check if the queue is empty
  isEmpty() {
    return this.array.length == 0;
  }

  // the size of the queue
  size() {
    return this.array.length;
  }

  // empty the queue
  clear() {
    this.array = [];
  }
}

let queue = new Queue();

queue.add("Word");
queue.add("Excel");
queue.add("PowerPoint");
queue.add("Teams");
// [ 'Teams', 'PowerPoint', 'Excel', 'Word' ]

queue.remove();
// ["PowerPoint", "Excel", "Word"];

queue.peek();
// PowerPoint

queue.isEmpty();
// false

queue.size();
// 3

queue.clear();
// []

queue.isEmpty();
// true
