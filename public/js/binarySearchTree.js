class BSTNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new BSTNode(value);
    } else {
      this._insertNode(this.root, value);
    }

    this.size += 1;
    return;
  }

  _insertNode = function (current, value) {
    if (value < current.value) {
      if (current.left) {
        this._insertNode(current.left, value);
      } else {
        current.left = new BSTNode(value);
      }
    } else {
      if (current.right) {
        this._insertNode(current.right, value);
      } else {
        current.right = new BSTNode(value);
      }
    }
    return;
  };

  remove(value) {
    return;
  }

  traverse() {
    let nodes = [];

    let current = this.head;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}
