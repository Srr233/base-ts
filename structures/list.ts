interface OneListNode {
  next: OneListNode | null;
  value: any;
}

class LinkedListNodeOne implements OneListNode {
  next: OneListNode | null;
  value: any;
  constructor(value: any, next: OneListNode | null = null) {
    this.next = next;
    this.value = value;
  }
}
class LinkedListOne {
  private head: null | OneListNode;
  private tail: null | OneListNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(val: any) {
    this.head = new LinkedListNodeOne(val, this.head);
    if (!this.tail) this.tail = this.head;
    return this;
  }

  append(val: any) {
    const newNode = new LinkedListNodeOne(val);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  delete(val: any) {
    if (!this.head) return null;

    let valForDelete = null;
    while(this.head && this.head.value === val) {
      valForDelete = this.head;
      this.head = this.head.next;
    }

    let currNode = this.head;

    if (currNode !== null) {
      while(currNode.next) {
        if (currNode.next.value === val) {
          valForDelete = currNode.next;
          currNode.next = currNode.next.next;
        } else {
          currNode = currNode?.next;
        }
      }
    }

    if (this.tail && this.tail.value === val) {
      this.tail = currNode;
    }
    return valForDelete;
  }

  find(val: any) {
    if (!this.head) return null;

    let currNode: OneListNode | null = this.head;

    while(currNode) {
      if (currNode?.value === val) return currNode;
      currNode = currNode.next;
    }
    return null;
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    }
    const valForDelete = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return valForDelete;
    }

    let currNode = this.head;

    while(currNode?.next) {
      if (!currNode?.next.next) {
        currNode.next = null;
      } else {
        currNode = currNode.next;
      }
    }

    this.tail = currNode;
    return valForDelete;
  }

  deleteHead() {
    if (!this.head) return null;
    const valForDelete = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return valForDelete;
  }

  fromArray(arr: any[]) {
    arr.forEach(i => this.append(i));
  }

  toArray() {
    const result: any[] = [];
    let currNode = this.head;
    while(currNode) {
      result.push(currNode.value);
      currNode = currNode.next;
    }
    return result;
  }

  toString() {
    return this.toArray().join(', ');
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }
}

export { LinkedListOne };