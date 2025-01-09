/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return root === null ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // Leetcode

// Test cases
// Input: [3,9,20,null,null,15,7]
// Output: 3
// Explanation: The maximum depth is 3.
// Expected: 3

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Create a sample binary tree: [3,9,20,null,null,15,7]
//      3
//     / \
//    9  20
//       / \
//      15  7
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log(maxDepth(root)); // Output: 3
