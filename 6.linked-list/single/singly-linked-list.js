class SinglyLinked {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

// output all the elements
function output(element) {
  while (element != null) {
    console.log(element.data + "");
    element = element.next;
  }
}

let root = new SinglyLinked();
let second = new SinglyLinked();
let third = new SinglyLinked();

root.data = "Teams";
root.next = second;

second.data = "Word";
second.next = third;

third.data = "Excel";
third.next = null;

output(root);
// Teams
// Word
// Excel
