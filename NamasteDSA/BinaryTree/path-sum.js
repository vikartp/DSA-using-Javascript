// https://leetcode.com/problems/path-sum/description/

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    // Solution 1: Top-Down Approach, Time: O(n), Space: O(n)
    // let hasSum = false;
    // const traverse = (curr, lastSum) => {
    //     let newSum = lastSum + curr.val;
    //     // If it is a leaf node and newSum gets same value as targetSum, then it has the path sum
    //     if (!curr.left && !curr.right && newSum === targetSum) {
    //         hasSum = true;
    //     }
    //     curr.left && traverse(curr.left, newSum);
    //     curr.right && traverse(curr.right, newSum);
    // }

    // traverse(root, 0);
    // return hasSum;

    // Solution 2: Bottom Up Approach
    // If it is a leaf node and node value becomes equal to targetSum, then we have found the path sum
    if (!root.left && !root.right && root.val === targetSum) return true;
    let doesLeftContainPath = hasPathSum(root.left, targetSum - root.val);
    let doesRightContainPath = hasPathSum(root.right, targetSum - root.val);

    return doesLeftContainPath || doesRightContainPath;
};