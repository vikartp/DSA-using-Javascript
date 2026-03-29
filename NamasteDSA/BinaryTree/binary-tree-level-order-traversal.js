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
var levelOrder = function (root) {
    /**
     * Using BFS - queue approach
     */
    // if (!root) return [];
    // const ans = [];
    // const q = [root];
    // while (q.length) {
    //     let levelArr = [];
    //     let levelSize = q.length;
    //     for (let i = 0; i < levelSize; i++) {
    //         const curr = q.shift();
    //         levelArr.push(curr.val);
    //         curr.left && q.push(curr.left);
    //         curr.right && q.push(curr.right);
    //     }
    //     ans.push(levelArr);
    // }
    // return ans;

    /**
     * Using DFS - recursive approach
     */
    if (!root) return [];
    const ans = [];
    const traverse = (curr, level) => {
        if (!ans[level]) {
            ans[level] = [];
        }
        ans[level].push(curr.val);
        curr.left && traverse(curr.left, level + 1);
        curr.right && traverse(curr.right, level + 1);
    };
    traverse(root, 0);
    return ans;
};