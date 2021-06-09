interface DirectionAndCost {
  direction: string;
  cost: number;
}
interface EForGr {
  [key: string ]: DirectionAndCost
}
interface GraphInt {
  V: string;
  E: EForGr
}

class GraphNode implements GraphInt {
  V: string;
  E: EForGr;
  constructor(V: string, E: EForGr = {}) {
    this.V = V;
    this.E = E;
  }
}
interface ArrInArr {
  [key: number]: DirectionAndCost[] | undefined;
}
interface Root {
  [key: string]: GraphInt
}

interface Loop {
  (from1: string | undefined, to1: string | undefined): DirectionAndCost[] | undefined;
}
class Graph {
  root: Root;
  constructor() {
    this.root = {};
  }
  _itExists(val: string) {
    return !!this.root[val];
  }
  set(from: string, cost: number, to: string) {
    const e: EForGr = {};
    e[to] = {
      direction: to,
      cost
    }

    if (this._itExists(from) && !this._itExists(to)) {
      this.root[from].E[to] = {
        direction: to,
        cost
      };
      this.root[to] = new GraphNode(to);
      return this;
    }

    this.root[from] = new GraphNode(from, e);
    this.root[to] = new GraphNode(to);
    return this;
  }
  _loopSearch(from: string, to: string): ArrInArr[] {
    const ways: ArrInArr[] = [];
    const search: Loop = (from1, to1) => {
      if (!from1 || !to1) return;
      for (const D of Object.keys(this.root[from1].E)) {
        const next = this.root[from1].E[D];
        if (next.direction === to) return [next];
        const searchNext = search(next.direction, to1);
        if (searchNext) return [next, ...searchNext];
        return;
      }
    }
    // search good way
    ways.push([search(from, to)]);
    for (const D of Object.keys(this.root[from].E)) {
      if (D === to) {
        ways.push([[this.root[from].E[D]]]);
        continue;
      }
      // add first way
      if (ways[0][0]) {
        const okWays = search(D, to);
        okWays?.unshift(ways[0][0][0]);
        ways.push([okWays]);
      }
    }
    // clean all undefined
    return ways.filter(w => w);
  }
  search(from: string, to: string) {
    if (!this._itExists(from) || !this._itExists(to)) throw new Error('From or to doesn\'t exist');
    const result = this._loopSearch(from, to);
    const rechangeInMoney = result.map(f => f[0]?.reduce((all, curr) => all + curr.cost, 0)) as number[];
    const indexOfMin = rechangeInMoney.indexOf(Math.min(...rechangeInMoney));
    return result[indexOfMin];
  }

  delete(point: string) {
    if (!this._itExists(point)) throw new Error('point doesn\'t exist');
    for (const D of Object.keys(this.root)) {
      if (D === point) {
        delete this.root[point];
        continue;
      }
      for (const B of Object.keys(this.root[D].E)) {
        if (this.root[D].E[B].direction === point) delete this.root[D].E[B];
      }
    }
    return this;
  }
}

export { Graph };