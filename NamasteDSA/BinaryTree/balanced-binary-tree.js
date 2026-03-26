// https://leetcode.com/problems/balanced-binary-tree/

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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let ans = true; // By default, let's assume it's a balanced binary tree

    const calculateHt = (curr) => {
        if (!curr) return 0;

        let leftHt = calculateHt(curr.left);
        let rightHt = calculateHt(curr.right);
        // Check if anytime the difference is more than 1, make the answer false
        if (Math.abs(leftHt - rightHt) > 1) {
            ans = false;
        }

        return 1 + Math.max(leftHt, rightHt); // Bottom Up approach to get max height of a node
    }
    calculateHt(root);

    return ans;
};

// Time Complexity: O(n) where n is the number of nodes in the tree, as we need to visit each node once to calculate its height and check balance.
// Space Complexity: O(h) where h is the height of the tree, due to recursive stack space. In worst case (skewed tree), it can be O(n).