// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    // We can use level order traversal and maintain a variable to keep track of the level order.
    // If it's even, we push the value in the end of the array, if it's odd, we unshift the value in the beginning of the array.
    if (!root) return [];
    const ans = [];
    const q = [root];
    let levelOrder = 0;

    while (q.length) {
        const levelSize = q.length;
        const levelArr = [];
        for (let i = 0; i < levelSize; i++) {
            const curr = q.shift();
            if (levelOrder % 2 === 0) {
                levelArr.push(curr.val);
            } else {
                levelArr.unshift(curr.val);
            }
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        ans.push(levelArr);
        levelOrder++;
    }

    return ans;
};

// Time Complexity: O(n) where n is the number of nodes in the tree, as we need to visit each node once.
// Space Complexity: O(n) in the worst case, when the tree is completely unbalanced and has n nodes. In the best case (balanced tree),
// it would be O(w) where w is the maximum width of the tree, which can be O(n/2) in the last level.