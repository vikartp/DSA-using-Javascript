// https://leetcode.com/problems/diameter-of-binary-tree/description/

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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    const findDepth = (curr) => {
        if (!curr) return 0;
        const leftDepth = findDepth(curr.left);
        const rightDepth = findDepth(curr.right);
        // Sum of max depth from left and right will always be the diameter of current node
        let currDia = leftDepth + rightDepth;
        // Update the max dia in each node iteration
        diameter = Math.max(currDia, diameter);

        return 1 + Math.max(leftDepth, rightDepth);
    }
    findDepth(root);
    return diameter;
};

// Time Complexity: O(n) - where n is the number of nodes in the tree, as we visit each node exactly once
// Space Complexity: O(h) - where h is the height of the tree, due to recursion call stack 

