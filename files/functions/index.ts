interface Square extends Object{
  size: number;
  width: number;
  height: number;
  rotate(str: 'left' | 'right'): void;
}
interface MyProxy {
  [key: string]: any;
}
interface MyConstructor {
  new (...arg: any[]): Square;
}
function myProxy(fn: MyConstructor, ...arg: any[]) {
  const objForWrap = new fn(...arg) as MyProxy;
  const result: MyProxy = {};
  for (const key of Object.keys(objForWrap)) {
    if (typeof objForWrap[key] === 'function') {
      result[key] = (...rest: any[]) => {
        console.log(`Call ${key}, func with ${rest} values`);
        return objForWrap[key](...rest);
      }
      continue;
    }
    Object.defineProperty(result, key, {
      get() {
        console.log(`Use ${key}, property`);
        return objForWrap[key];
      },
      set(val: any) {
        console.log(`Change ${key} to ${val}, property`);
        objForWrap[key] = val;
      }
    });
  }
  return result;
}

class CreateSquare implements Square {
  public height;
  public width;
  public size;
  public rotate: (str: 'left' | 'right') => void;
  
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.size = height * width;
    this.rotate = function (str: 'left' | 'right') {
      if (str === 'left') {
        const template = this.width;
        this.width = this.height;
        this.height = template;
      }
    }
  }
}
const myProxyObj = myProxy(CreateSquare, 100, 200) as Square;
myProxyObj.height
myProxyObj.height = 140;
myProxyObj.height
myProxyObj.width
myProxyObj.rotate('left');