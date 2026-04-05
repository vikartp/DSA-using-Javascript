// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // Hint: When we do in-order traversal of BST, it always gives the sorted array
    let ans = null;
    let count = k;
    const traverse = (curr) => {
        // If we have already found the answer, we can stop traversing further.
        if (ans !== null) return;
        // Traverse the left subtree first, then visit the current node, and finally traverse the right subtree.
        curr.left && traverse(curr.left);
        count--;
        // If count becomes 0, it means we have found the k-th smallest element, which is the current node's value.
        if (count === 0) {
            ans = curr.val;
        }
        curr.right && traverse(curr.right);
    }
    traverse(root);
    return ans;
};

// Time Complexity: O(h + k) where h is the height of the tree. In the worst case, h can be equal to n (when the tree is skewed),
// so the time complexity can be O(n + k). In the best case, when the tree is balanced, h is log(n), so the time complexity is O(log(n) + k).
// Space Complexity: O(h) due to the recursive call stack. In the worst case, h can be equal to n (when the tree is skewed), 
// so the space complexity can be O(n). In the best case, when the tree is balanced, h is log(n), so the space complexity is O(log(n)).