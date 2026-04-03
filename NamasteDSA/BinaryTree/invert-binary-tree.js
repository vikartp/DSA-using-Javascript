// https://leetcode.com/problems/invert-binary-tree/

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return root;
    // Swap both child node
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

var invertTree2 = function(root) {
    if (!root) return root;
    const traverse = (curr) => {
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;
        curr.left && traverse(curr.left);
        curr.right && traverse(curr.right);
    }
    traverse(root);
    return root;
};

// Time Complexity: O(n) where n is the number of nodes in the tree
// Space Complexity: O(h) where h is the height of the tree, due to recursive stack space. In worst case (skewed tree), it can be O(n).