/**
 * The problem 450. Delete Node in a BST involves removing a node with a given value from a Binary Search Tree (BST) while maintaining the BST properties:

The left subtree of a node contains only nodes with keys smaller than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Approach:
To delete a node in a BST:

Search for the Node: Use BST properties to find the node to delete.
Delete the Node:
If the node has no children (a leaf node), simply remove it.
If the node has one child, replace it with its child.
If the node has two children:
Find the in-order successor (smallest node in the right subtree).
Replace the node’s value with the successor’s value.
Recursively delete the successor.
 */

function deleteNode(root, key) {
    if (!root) return null;

    // Step 1: Search for the node
    if (key < root.val) {
        root.left = deleteNode(root.left, key); // Search in the left subtree
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key); // Search in the right subtree
    } else {
        // Step 2: Node found, perform deletion
        // Case 1: No children or one child
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Case 2: Two children
        // Find the in-order successor (smallest in the right subtree)
        let successor = findMin(root.right);
        root.val = successor.val; // Replace root value with successor value
        // Recursively delete the successor
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
}

function findMin(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}

const tree = {
    val: 5,
    left: {
        val: 3,
        left: { val: 2, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 6,
        left: null,
        right: { val: 7, left: null, right: null }
    }
};

console.log(deleteNode(tree, 3));
// Output: BST with node 3 removed

`
      5
     / \
    3   6
   / \    \
  2   4    7


    //   to

   
      5
     / \
    4   6
   /      \
  2        7

`