/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.storage = [];
  }
  get size() {
    return this.storage.length;
  }
  add(item) {
    return this.storage.push(item)
  }

  retrieve() {
    if (this.size < 1) return undefined;
    return this.storage.pop();
  }
}

const newStack = new Stack;
console.log(newStack.size);
console.log(newStack.add('stuff'))
console.log(newStack.size);
console.log(newStack.retrieve())
console.log(newStack.retrieve())
module.exports = Stack;
