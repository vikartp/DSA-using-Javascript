// https://leetcode.com/problems/insert-into-a-binary-search-tree/description/

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
var insertIntoBST = function (root, val) {
    // Solution 1: Bottom Up
    // if (!root) return new TreeNode(val);
    // if (root.val < val) {
    //     root.right = insertIntoBST(root.right, val)
    // } else {
    //     root.left = insertIntoBST(root.left, val)
    // }
    // return root;

    // Solution 2: Top Down
    const node = new TreeNode(val);
    if (!root) return node;
    const traverse = (curr, parent, side) => {
        if (!curr && parent) {
            side === 'left' ? parent.left = node : parent.right = node;
        }
        curr && (curr.val > val ? traverse(curr.left, curr, 'left') : traverse(curr.right, curr, 'right'));
    }
    traverse(root, null, '');
    return root;
};

// Time Complexity: O(h) where h is the height of the tree. 
// In the worst case, h can be equal to n (when the tree is skewed), so the time complexity can be O(n). 
// In the best case, when the tree is balanced, h is log(n), so the time complexity is O(log(n)).
// Space Complexity: O(h) due to the recursive call stack. In the worst case, h can be equal to n (when the tree is skewed), 
// so the space complexity can be O(n). In the best case, when the tree is balanced, h is log(n),
// so the space complexity is O(log(n)).