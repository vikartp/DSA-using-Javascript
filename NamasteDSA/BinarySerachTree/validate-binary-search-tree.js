// https://leetcode.com/problems/validate-binary-search-tree/description/

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
var isValidBST = function(root) {
    /**
     * Solution 1: Top Down approach
     * For each node, we will keep track of the low and high values which are the constraints for the current node's value. 
     * Initially, for the root node, there are no constraints, so low and high will be null. 
     * When we go to the left child, the high will be current node's value because all the values in left subtree should be less than current node's value. 
     * When we go to the right child, the low will be current node's value because all the values in right subtree should be greater than current node's value.
     */
    let ans = true;
    const traverse = (curr, low, high) => {
        // If low is not null and current node's value is less than or equal to low, then it's not a valid BST
        if (low !== null && curr.val <= low) {
            ans = false;
        }
        // If high is not null and current node's value is greater than or equal to high, then it's not a valid BST
        if (high !== null && curr.val >= high) {
            ans = false;
        }
        // When we go to left child, the high will be current node's value because all the values in left subtree should be less than current node's value
        curr.left && traverse(curr.left, low, curr.val);
        // When we go to right child, the low will be current node's value because all the values in right subtree should be greater than current node's value
        curr.right && traverse(curr.right, curr.val, high);
    }
    // In the beginning, low and high will be null because there is no constraint on the root node
    traverse(root, null, null);
    return ans;

    // Solution 2: Bottom Up Approach
    // const isBST = (curr, l, h) => {
    //     if (!curr) return true;
    //     if ((l !== null && curr.val <= l) || (h !== null && curr.val >= h)) {
    //         return false;
    //     }
    //     const isLeftBST = isBST(curr.left, l, curr.val);
    //     const isRightBST = isBST(curr.right, curr.val, h);
    //     // If both left and right subtree are BST, then current subtree is also BST
    //     return isLeftBST && isRightBST;
    // }

    // return isBST(root, null, null);
};

// Time Complexity: O(n) where n is the number of nodes in the tree
// Space Complexity: O(h) where h is the height of the tree, due to recursive stack space.
// In worst case (skewed tree), it can be O(n).