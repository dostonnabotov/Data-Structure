// Stack
const stack = [];

// inserting several elements in an array form
stack.push("laptop", "phone", "tv", "radio");

// popping or removing overall 3 elements
stack.pop(3);

// used if statement to pop several elements at a time
// of course, it needs some improvement as it now has bunch of lines of code
if (stack.pop(2) === true) {
    stack.pop();
    stack.pop();
}

if (stack.pop(3) === true) {
    stack.pop();
    stack.pop();
    stack.pop();
}
// when I run these, I got an error on 'expect'. So I used simple pop() function
// expect(stack.pop()).toBe("phone");
// expect(stack.isEmpty()).toBe(false);

stack.push("tablet", "headphones", "loud speaker");
stack.pop();

console.log(stack);


// Queue
const queue = new queue();

// inserting some elements into queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue("name");

expect(queue.toString()).toBe(1, 2, 'name');

// removing the first element
queue.dequeue(1);

// checking the head element
expect(queue.peek()).toBe(2);

// checking whether queue is empy or full
expect(queue.isEmpty()).toBe(false);


const example = [24, "laptop"];

console.log(example);