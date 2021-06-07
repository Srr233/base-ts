interface IntStack {
  [key: number]: any;
}

class MyQueue {
  private _stack: IntStack;
  public _length: number;
  constructor() {
    this._stack = {};
    this._length = 0;
  }
  enqueue(val: any): void {
    if (!this._length) {
      this._stack[0] = val;
      this._length += 1;
      return;
    }
    for (let i = this._length; i > -1; i--) {
      this._stack[i] = this._stack[i - 1];
    }
    this._stack[0] = val;
    this._length += 1;
  }
  dequeue() {
    const template = this._stack[this._length - 1];
    delete this._stack[this._length - 1];
    this._length -= 1;
    return template;
  }
  peek() {
    return this._stack[this._length - 1];
  }
  isEmpty() {
    return !!this._length;
  }
}

export { MyQueue };