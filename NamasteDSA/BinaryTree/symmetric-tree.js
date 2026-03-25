// https://leetcode.com/problems/symmetric-tree/

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
var isSymmetric = function (root) {
    // Solution 1: Recursive Bottom Up Approach
    // const isMirror = (left, right) => {
    //     // If leaf, return true
    //     if (!left && !right) return true;
    //     // If one is missing from left and right, return false;
    //     if (!left || !right) return false;

    //     return left.val === right.val &&
    //         isMirror(left.left, right.right) &&
    //         isMirror(left.right, right.left)
    // }

    // return isMirror(root.left, root.right);

    // Solution 2: Iterative Approach - Using Queue - Level Order Traversal
    const q = [root.left, root.right]; // keep the root's left and right node initially in the queue
    while (q.length) {
        const p1 = q.shift();
        const p2 = q.shift();
        // If both p1 and p2 node are not available, it's not an issue so just continue
        if (!p1 && !p2) continue;
        // If one of p1 and p2 is null then it means there is no symmetry
        if (!p1 || !p2) return false;
        // If value of p1 and p2 node doesn't match then there is no symmetry
        if (p1.val !== p2.val) return false;
        // In the end, just throw new comparision nodes in pair into the queue
        q.push(p1.left, p2.right);
        q.push(p1.right, p2.left);
    }

    return true;
};