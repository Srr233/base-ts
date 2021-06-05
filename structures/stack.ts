interface IntStack {
  [key: number]: any;
}
class MyStack {
  private _stack: IntStack;
  public _length: number;
  constructor() {
    this._stack = {};
    this._length = 0;
  }
  push(val: any): void {
    this._stack[this._length] = val;
    this._length += 1;
  }
  pop(): any {
    const template = this._stack[this._length - 1];
    delete this._stack[this._length - 1];
    this._length -= 1;
    return template;
  }
  get length(): number {
    return this._length;
  }
  set length(v) {return}
}

export { MyStack };