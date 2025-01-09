/**
 * Leaf-Similar Trees asks us to determine whether the leaf nodes of two binary trees 
 * are similar. Two trees are considered "leaf-similar" 
 * if their leaf nodes are in the same order when traversed from left to right.
 * Note: A node is a leaf node if it has no left or right child.
 */

var leafSimilar = function (root1, root2) {
    // Helper function to collect leaf values using DFS
    const getLeafValues = (node, leafValues) => {
        if (!node) return;
        if (!node.left && !node.right) {
            leafValues.push(node.val); // Add leaf value
            return;
        }
        getLeafValues(node.left, leafValues);
        getLeafValues(node.right, leafValues);
    };

    const leaves1 = [];
    const leaves2 = [];

    getLeafValues(root1, leaves1);
    getLeafValues(root2, leaves2);

    // Compare the two leaf sequences
    return leaves1.join(',') === leaves2.join(',');
};

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Tree 1: [3,5,1,6,2,9,8,null,null,7,4]
//       3
//      / \
//     5   1
//    / \ / \
//   6  2 9  8
//     / \
//    7   4
const root1 = new TreeNode(3);
root1.left = new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4)));
root1.right = new TreeNode(1, new TreeNode(9), new TreeNode(8));

// Tree 2: [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
//       3
//      / \
//     5   1
//    / \ / \
//   6  7 4  2
//            / \
//           9   8
const root2 = new TreeNode(3);
root2.left = new TreeNode(5, new TreeNode(6), new TreeNode(7));
root2.right = new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8)));

console.log(leafSimilar(root1, root2)); // Output: true

// Time Complexity: O(N1 + N2), where N1 and N2 are the number of nodes in the two trees.
// Space Complexity: O(H1 + H2), where H1 and H2 are the heights of the two trees.