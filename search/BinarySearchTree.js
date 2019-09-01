class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  add(data) {
    let node = this.root;
    if(node == null){
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if(data < node.data) {
          if(node.left == null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left, data);
          }
        } else if (data > node.data) {
          if(node.right == null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right, data);
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }
    
  findMin() {
    let current = this.root;
    while(current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  
  findMax() {
    let current = this.root;
    while(current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  
  isPresent(data) {
    let current = this.root;
    while(current) {
      if(current.data == data) {
        return true;
      }
      if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

let bst = new BST();
bst.add(50);
bst.add(30);
bst.add(40);
bst.add(20);
bst.add(60);
bst.add(70);
bst.add(45);
console.log(bst.isPresent(40));
console.log(bst.findMax());
console.log(bst.findMin());

