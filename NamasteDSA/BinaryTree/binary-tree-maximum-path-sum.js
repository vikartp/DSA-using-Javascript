// https://leetcode.com/problems/binary-tree-maximum-path-sum/

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
var maxPathSum = function(root) {
    let ans = -Infinity;
    const traverse = (curr) => {
        if (!curr) return 0;
        // To avoid negative vals, we need to keep Math max with zero
        let leftMax = Math.max(0, traverse(curr.left));
        let rightMax = Math.max(0, traverse(curr.right));
        // For each node, we calculate current sum and update answer because maxPathSum can be anywhere in the tree
        const currSum = curr.val + leftMax + rightMax;
        ans = Math.max(ans, currSum);
        // When it will return to the parent, it can either take left or right path(along with current val)
        return curr.val + Math.max(leftMax, rightMax);
    }

    traverse(root);
    return ans;
};


// Time complexity: O(n) where n is the number of nodes in the tree
// Space complexity: O(h) where h is the height of the tree, in worst case it can be O(n) for skewed tree 
// and O(log n) for balanced tree