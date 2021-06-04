// func as parameter
type GreetFunc = () => void;
function mainFunc(func: GreetFunc) {
  func();
}

// Call signatures: use for func and describe
type DescribeFunc = {
  describe: string;
  (someArg: string): boolean;
}
function describeFun (fn: DescribeFunc) {
  console.log(fn.describe + " returned " + fn('Hi'));
}
const myFunc: DescribeFunc = function (someArg) {
  return someArg.includes('A');
}
myFunc.describe = 'check for containing \'A\'';

describeFun(myFunc);

// Construct signatures. Noticed, we can combine new and usual call.
type SomeConstructor = {
  new(s: string): Array<string>;
  (s: string): Array<string>;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

//Generic functions
function fn1<Type> (arr: Type[]): Type {
  return arr[0];
}
//Extends our generic
function fn2<Type extends {length: number}>(arr: Type[]): Type {
  return arr[0];
}
fn2(['10', '12']);

/* There is a problem with return { length: minimum } because it's not a Type, even though that Type is extended.
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
}
*/

// Specifying Type Arguments
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
combine<string | number>(['hi'], [1]);

//Optional parameters for func or callback, it doesn't matter
function fn3<T>(b?: T) {
  return b;
}

//Function overloads: first two function declared a rule of arguments, the last func is an implementation
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
// but I think more better way is like this:
function greatLen(arg: string | any[]) {
  return arg.length;
}

// Declaration this in a func
interface ForThis {
  name: string;
}
function withThis(this: ForThis): ForThis {
  this.name = 'Dima';
  return Object.create(this);
}

//And others
function f(): never {
  throw new Error;
}
//rest
function foo(...rest: number[]) {
  rest;
}
//destruct
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}