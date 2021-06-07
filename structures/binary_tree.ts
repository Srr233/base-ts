interface IntTree {
  value: number;
  right: IntTree | null;
  left: IntTree | null;
}
class MyNode implements IntTree {
  value: number;
  right: IntTree | null;
  left: IntTree | null;
  constructor(val: number) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}
class BinaryTree {
  tree: IntTree | null;
  constructor() {
    this.tree = null;
  }
  insert(val: number) {
    const newNode = new MyNode(val);

    if (this.tree === null) {
      this.tree = newNode;
    } else {
      this.insertNode(this.tree, newNode);
    }
  }
  insertNode(tree: IntTree, node: IntTree) {
    const valTree = tree.value;
    const valNode = node.value;
    if (valTree < valNode) {
      if (!tree.right) {
        tree.right = node;
        return;
      }
      if (tree.right) {
        this.insertNode(tree.right, node);
      }
      return;
    }

    if (valTree > valNode) {
      if (!tree.left) {
        tree.left = node;
        return;
      }
      if (tree.left) {
        this.insertNode(tree.left, node);
      }
      return;
    }
  }

  search(val: number) {
    return this.searchNode(this.tree, val);
  }

  searchNode(tree: IntTree | null | undefined, val: number): IntTree | null | undefined {
    const valTree = tree ? tree.value : null;
    const valNode = val;

    if (valTree === null) return null;
    if (valTree === valNode) return tree;
    if (valNode < valTree) return this.searchNode(tree?.left, val);
    return this.searchNode(tree?.right, val);
  }
}

export { BinaryTree };