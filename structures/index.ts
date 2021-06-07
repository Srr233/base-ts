import { LinkedListOne } from "./list";
import { MyStack } from "./stack";
import { MyQueue } from './queue';
import { BinaryTree } from './binary_tree';
import { Hash } from './hash';

function test(MyConstructor: new () => any) {
  const instance = new MyConstructor();
  const values = [10, '10', true, null, undefined, {a: 'a'}, NaN];
  for (const key in instance) {
    const value = instance[key];
    if (typeof value === 'function') values.forEach(value => instance[key](value));
  }
}
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

// const stack = new MyStack();

// stack.push(1);
// stack.push('string');
// stack.push({});
// stack.push(true);
// stack.push(undefined);
// stack.push(NaN);
// stack.push(null);
// const stackLength = stack.length;

// for (let i = 0; i < stackLength; i += 1) {
//   console.log(stack.pop());
// }
// console.log(stack.length);

// const myTree = new BinaryTree();

// myTree.insert(1);
// myTree.insert(2);
// myTree.insert(3);
// myTree.insert(7);
// myTree.insert(5);
// myTree.insert(9);
// myTree.insert(6);

// console.log(myTree.search(2));

const myHash = new Hash();

myHash.set('Gay club', 'My big dic in ur ass');
myHash.set('club Gay', 1);
myHash.set('Gay www', {dorado: 20});
myHash.set('Null?', null);

myHash.set('Null?', 'No, it\'s not');
myHash.get('Null?');
myHash.get('Nul?');
myHash.get('club Gay');

myHash.set('Дима', 375291119900);
console.log(myHash.get('Дима'));
myHash.set('Дима', 375214125112);
myHash.set('иДма', 1241512512);
console.log(myHash.get('Дима'));
myHash.delete('иДма');
myHash.delete('Дима');


