class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BSTree {
  constructor() {
    this.root = null;
  }
  isTreeEmpty() {
    return this.root === null;
  }
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, sVal) {
    if (root === null) {
      return false;
    } else if (root.value === sVal) {
      return true;
    } else if (sVal < root.value) {
      return this.search(root.left, sVal);
    } else {
      return this.search(root.right, sVal);
    }
  }
  debugger;
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  bfsTraversing() {
    let que = [];
    que.push(this.root);
    while (que.length) {
      let current = que.shift();
      if (current.left) {
        que.push(current.left);
      }
      if (current.right) {
        que.push(current.right);
      }
      console.log(current.value);
    }
  }
  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }
  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }
  removeData(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return null;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node found
      if (!root.left && !root.right) {
        // Case 1: No children (leaf node)
        return null;
      } else if (!root.left) {
        // Case 2: Only right child
        return root.right;
      } else if (!root.right) {
        // Case 3: Only left child
        return root.left;
      }

      // Case 4: Two children
      root.value = this.minValue(root.right); // Use the already defined minValue function
      root.right = this.deleteNode(root.right, root.value); // Remove the inorder successor
    }

    return root; // Ensure the updated root is returned.
  }
}

let bst = new BSTree();
// console.log(bst.isTreeEmpty())
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(11);
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);

bst.removeData(5);
// bst.preOrder(bst.root)
// bst.bfsTraversing()
// console.warn(bst.search(bst.root, 5))
console.warn(bst.root);
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// console.log("minimum value", bst.minValue(bst.root))
// console.log("MAXIMUM value", bst.maxValue(bst.root))
