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
var maxDepth = function(root) {
    // Solution 1: Top Down
    // if (!root) return 0;
    // let maxDepth = 0;
    // const traversal = (curr, depth) => {
    //     maxDepth = Math.max(maxDepth, depth);
    //     curr.left && traversal(curr.left, depth+1);
    //     curr.right && traversal(curr.right, depth+1);
    // }
    // traversal(root, 1);

    // return maxDepth;

    // Solution 2: Bottom Up
    if (!root) return 0;
    let leftMaxDepth = maxDepth(root.left);
    let rightMaxDepth = maxDepth(root.right);
    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};