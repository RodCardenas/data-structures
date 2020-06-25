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

  contains(current, value) {
    if (current === null) {
      return false;
    }

    if (current.value === value) {
      return true;
    } else {
      if (value < current.value) {
        return this.contains(current.left, value);
      } else {
        return this.contains(current.right, value);
      }
    }
  }

  remove(value) {
    return;
  }

  preorderTraversal(current, cb) {
    if (current !== null) {
      cb(current.value);
      this.preorderTraversal(current.left, cb);
      this.preorderTraversal(current.right, cb);
    }
  }

  postorderTraversal(current, cb) {
    if (current !== null) {
      this.postorderTraversal(current.left, cb);
      this.postorderTraversal(current.right, cb);
      cb(current.value);
    }
  }

  inorderTraversal(current, cb) {
    if (current !== null) {
      this.inorderTraversal(current.left, cb);
      cb(current.value);
      this.inorderTraversal(current.right, cb);
    }
  }
}
