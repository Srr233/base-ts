// Interfaces are shape of instructions how it have to be
interface User {
  name: string;
  age: number;
}
// Optional props (it means that properties can be exists or not) use "?"
interface User1 extends User {
  car?: string;
}

// Readonly properties (only for reading)
interface User2 extends User1 {
  readonly soul: string;
  readonly children: Array<number>;
}
/* 
  Excess property checks: we should use "as" when we try to put an argument in a func with same values.
*/
function showUser1(user: User1) {
  console.log(`${user.name} \n ${user.age} \n ${user.car}`);
}
showUser1({name: 'Sergey', age: 26, car: 'Infinity g37'} as User1);

// If an object can have extra properties, we can add "[propName: T]: any"

interface User3 extends User1 {
  [propName: string]: any
}

// functions type
interface User4 extends User1 {
  (getName: string): string;
  func(nameOfFunc: string): void;
}

//indexable types: it means that we can use "[0]: number"
interface StringArray {
  [index: number]: string;
}
const myArray: StringArray = ["Bob", "Fred"];
const myStr: string = myArray[1];
// if we do like this ['something'], we will get an error

//Class types
interface ClockInterface {
  currentTime: Date;
}
class Clock implements ClockInterface {
  currentTime: Date = new Date();
}
