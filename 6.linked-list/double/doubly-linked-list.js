class DoublyLinked {
  constructor() {
    this.data = 0;
    this.next = null;
    this.prev = null;
  }
}

// show elements in forward direction
function forward(element) {
  while (element != null) {
    console.log(element.data + "");
    element = element.next;
  }
}

// show elements in backward (reverse) direction
function backward(element) {
  while (element != null) {
    console.log(element.data + "");
    element = element.prev;
  }
}

let first = new DoublyLinked();
let second = new DoublyLinked();
let third = new DoublyLinked();

first.data = "Teams";
first.next = second;
first.prev = null;

second.data = "Word";
second.next = third;
second.prev = first;

third.data = "Excel";
third.next = null;
third.prev = second;

forward(first);
// Teams
// Word
// Excel

backward(third);
// Excel
// Word
// Teams
