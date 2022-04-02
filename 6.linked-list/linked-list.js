class LinkedList {
    constructor() {
        this.list = [];
    }

    addHead(element) {
        return this.list.unshift(element);
    }

    addTail(element) {
        return this.list.push(element);
    }

    removeHead() {
        return this.list.shift();
    }

    removeTail() {
        return this.list.pop();
    }

    peekHead() {
        return this.list[this.list.length - this.list.length];
    }

    peekTail() {
        return this.list[this.list.length - 1];
    }

    // check if the list is empty
    isEmpty() {
        return this.list.length == 0;
    }

    clear() {
        return this.list = [];
    }
}

let linkedList = new LinkedList;

linkedList.addHead(2);
linkedList.addHead(8);
linkedList.addTail(6);
linkedList.addTail(4);

console.log(linkedList.list);

console.log(linkedList.peekHead());
console.log(linkedList.peekTail());

linkedList.removeHead();
linkedList.removeTail();

console.log(linkedList.list);

console.log(linkedList.clear());
console.log(linkedList.isEmpty());