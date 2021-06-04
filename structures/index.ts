import { LinkedListOne } from "./list";

const myList = new LinkedListOne();

myList.prepend(10);
myList.append(9);
myList.delete(10);
myList.find(9);
myList.deleteTail();
myList.prepend(30);

myList.fromArray([23,'aw',{w: 1}]);
console.log(myList.toString());
console.log(myList.toArray());