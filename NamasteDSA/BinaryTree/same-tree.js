// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    return p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
};

// Time Complexity: O(n) where n is the number of nodes in the tree, as we need to compare each node.
// Space Complexity: O(h) where h is the height of the tree, due to recursive stack space. In worst case (skewed tree), it can be O(n).