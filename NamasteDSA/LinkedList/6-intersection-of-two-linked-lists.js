/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    /**
     * Approach 1: Brute Force - We'll iterate through one LinkedList. Then we'll check/compare for all the nodes in another LinkedList within first loop. 
     * So, we have a loop inside loop. It takes kind of O(n^2) of time complexity.
     * Time: O(m*n), Space: O(1)
     */
    // let temp = headA;
    // while (temp) {
    //     let tempB = headB;
    //     while (tempB) {
    //         if (tempB === temp) {
    //             return tempB;
    //         }
    //         tempB = tempB.next;
    //     }
    //     temp = temp.next;
    // }

    // return null;

    /**
     * Approach 2: Use Set - We'll iterate through one List and store all node in the Set.
     * Then we'll iterate through the second List and check if the Set has the node.
     * Time: O(m+n) -> O(n), Space: O(n) -> n is the larger of length between both.
     */
     const nodeSet = new Set();

     let tempA = headA;
     while (tempA) {
        nodeSet.add(tempA);
        tempA = tempA.next;
     }

     let tempB = headB;
     while (tempB) {
        if (nodeSet.has(tempB)) {
            return tempB;
        }
        tempB = tempB.next;
     }

     return null;
};
