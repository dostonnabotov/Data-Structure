class LinkedList {
  constructor() {
    this.list = [];
  }

  // add element from head
  addHead(element) {
    return this.list.unshift(element);
  }

  // add element from tail
  addTail(element) {
    return this.list.push(element);
  }

  // remove the first element
  removeHead() {
    return this.list.shift();
  }

  // remove the last element
  removeTail() {
    return this.list.pop();
  }

  // view the first element
  peekHead() {
    return this.list[this.list.length - this.list.length];
  }

  // view the last element
  peekTail() {
    return this.list[this.list.length - 1];
  }

  // the size of the list
  size() {
    return this.array.length;
  }

  // check if the list is empty
  isEmpty() {
    return this.list.length == 0;
  }

  // empty the list
  clear() {
    this.list = [];
  }
}

let linkedList = new LinkedList();

linkedList.addHead("Word");
linkedList.addHead("Excel");
linkedList.addTail("PowerPoint");
linkedList.addTail("Teams");
// ["Excel", "Word", "PowerPoint", "Teams"]

linkedList.peekHead();
// Excel

linkedList.peekTail();
// Teams

linkedList.isEmpty();
// false

linkedList.removeHead();
// [ "Word", "PowerPoint", "Teams"]

linkedList.size();
// 3

linkedList.removeTail();
// [ "Word", "PowerPoint" ]

linkedList.clear();
// []

linkedList.isEmpty();
// true
