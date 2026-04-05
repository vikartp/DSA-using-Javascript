// https://leetcode.com/problems/search-in-a-binary-search-tree/description/

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // Solution 1: Top Down 
    // let resNode = null;
    // const traverse = (curr) => {
    //     if (curr && curr.val === val) {
    //         resNode = curr;
    //     }
    //     curr && curr.val > val && traverse(curr.left);
    //     curr && curr.val < val && traverse(curr.right);
    // }
    // traverse(root);
    // return resNode;

    // Solution 2: Bottom Up 
    if (!root || root.val === val) return root;
    // If the value to search is greater than the current node's value, search in the right subtree; 
    // otherwise, search in the left subtree.
    return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val);
};

// Time Complexity: O(h) where h is the height of the tree. In the worst case, h can be equal to n (when the tree is skewed), so the time complexity can be O(n). In the best case, when the tree is balanced, h is log(n), so the time complexity is O(log(n)).
// Space Complexity: O(h) due to the recursive call stack. In the worst case, h can be equal to n (when the tree is skewed), so the space complexity can be O(n). In the best case, when the tree is balanced, h is log(n), so the space complexity is O(log(n)).