// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

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
var lowestCommonAncestor = function(root, p, q) {
    /**
     * This solution uses a bottom-up approach to find the lowest common ancestor (LCA) of two nodes in a binary tree.
     * The idea is to traverse the tree and count how many of the target nodes (p and q) are found in the current subtree.
     * If both nodes are found in the subtree rooted at the current node, then the current node is the LCA.
     * The function returns the count of target nodes found in the subtree, which helps in determining when we have found both nodes.
     */
    let lca = null;
    let traversal = (curr) => {
        let count = 0;
        if(!curr) return 0;
        let ansOnLeft = traversal(curr.left);
        let ansOnRight = traversal(curr.right);
        // If the current node is either p or q, we increment the count by 1.
        if(curr.val === p.val || curr.val === q.val) {
            ++count;
        } 
        count = count + ansOnLeft + ansOnRight;
        // If both p and q are found in the subtree rooted at the current node, then the current node is the LCA.
        if(count === 2 && !lca) {
            lca = curr;
        }
        // We return the count of target nodes found in the subtree rooted at the current node.
        return count;
    }
    traversal(root);
    return lca;
}; 

// Time Complexity: O(n) where n is the number of nodes in the binary tree, since we may need to visit all nodes in the worst case.
// Space Complexity: O(h) where h is the height of the tree, due to the recursive call stack.
// In the worst case, h can be equal to n (when the tree is skewed), so the space complexity can be O(n). In the best case, 
// when the tree is balanced, h is log(n), so the space complexity is O(log(n)).