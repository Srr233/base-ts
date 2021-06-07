interface KeyValue {
  key: string;
  value: any;
}
interface ObjInterface {
  value: KeyValue;
  next: ObjInterface | null;
}
class MyNode implements ObjInterface {
  value: KeyValue;
  next: ObjInterface | null;
  constructor(key: string, value: any, next?: ObjInterface) {
    this.value = {
      key,
      value
    };
    this.next = next || null;
  }
}
interface Root {
  [key: number]: any;
}
class Hash {
  private root: Root;
  public length: number;
  constructor() {
    this.root = {};
    this.length = 0;
  }
  set(key: string, val: any) {
    this.length += 1;

    const hashedKey = this.H(key);
    const node = new MyNode(key, val);
    if (!this.root[hashedKey]) {
      this.root[hashedKey] = node;
      return this;
    }

    let currCase = this.root[hashedKey];
    do {
      // change value of correct key
      if (currCase?.value.key === key) {
        currCase.value.value = val;
        return
      }
      currCase = currCase.next ? currCase.next: currCase;
    } while(currCase.next) 
    currCase.next = node;
  }
  get(key: string) {
    console.log(this.H(key));
    let currCase = this.root[this.H(key)] as ObjInterface | null;

    if (!currCase) return undefined;

    do {
      if (currCase.value.key === key) return currCase.value.value;
      currCase = currCase.next;
    } while (currCase);
    return undefined;
  }
  delete(key: string) {
    const hash = this.H(key);
    let currCase = this.root[hash] as ObjInterface | null | undefined;

    if (!currCase) return;
    if (currCase.value.key === key) {
      // if the root has only one node, so delete key
      if (!this.root[hash].next) {
        delete this.root[hash];
        return
      }
      this.root[hash] = this.root[hash].next;
      return;
    }

    while(currCase?.next) {
      if (currCase.next.value.key === key) {
        currCase.next = currCase.next.next;
        return;
      }
      currCase = currCase.next;
    }
  }
  H(key: string): number {
    return +key.split('')
    .map(n => +n.charCodeAt(0))
    .reduce((all, n) => all + n);
  }
}

export { Hash };