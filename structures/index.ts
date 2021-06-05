import { LinkedListOne } from "./list";
import { MyStack } from "./stack";

// const myList = new LinkedListOne();

// myList.prepend(10);
// myList.append(9);
// myList.delete(10);
// myList.find(9);
// myList.deleteTail();
// myList.prepend(30);

// myList.fromArray([23,'aw',{w: 1}]);
// console.log(myList.toString());
// console.log(myList.toArray());

const stack = new MyStack();

stack.push(1);
stack.push('string');
stack.push({});
stack.push(true);
stack.push(undefined);
stack.push(NaN);
stack.push(null);
const stackLength = stack.length;
for (let i = 0; i < stackLength; i += 1) {
  console.log(stack.pop());
}
console.log(stack.length);
