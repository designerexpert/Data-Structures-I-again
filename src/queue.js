class Stack {
  constructor() {
    this.storage = [];
  }
  get size() {
    return this.storage.length;
  }
  push(item) {
    return this.storage.push(item)
  }

  pop() {
    if (this.size < 1) return undefined;
    return this.storage.pop();
  }
}
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {

}

module.exports = Queue;
