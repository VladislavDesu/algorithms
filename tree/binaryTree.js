class BinaryTree {
    constructor() {
        this.root = null
    }

    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value)
        } else {
            let node = this.root;
            let newNode = new TreeNode(value);

            while (node) {
                if (value > node.value) {
                    if (!node.right) break
                    node = node.right;
                } else {
                    if (!node.left) break
                    node = node.left;
                }
            }

            value > node.value ? node.right = newNode : node.left = newNode;
        }
    }

    print(root = this.root) {
        if (!root) return true;
        console.log(root.value);
        this.print(root.right);
        this.print(root.left);
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(7);
tree.add(1);
tree.add(15);
tree.print();