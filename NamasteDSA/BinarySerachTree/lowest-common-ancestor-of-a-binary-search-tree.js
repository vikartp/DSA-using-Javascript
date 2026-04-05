// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // If both p and q are greater than the root, then LCA lies in the right subtree.
    // If both p and q are smaller than the root, then LCA lies in the left subtree.
    // If one of p or q is on one side and the other is on the other side, then the current node is the LCA.
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};

// Time Complexity: O(h) where h is the height of the tree. In the worst case, h can be equal to n (when the tree is skewed),
// so the time complexity can be O(n). In the best case, when the tree is balanced, h is log(n), so the time complexity is O(log(n)).
// Space Complexity: O(h) due to the recursive call stack. In the worst case, h can be equal to n (when the tree is skewed), 
// so the space complexity can be O(n). In the best case, when the tree is balanced, h is log(n), so the space complexity is O(log(n)).