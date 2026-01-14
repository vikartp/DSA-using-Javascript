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
    // Solution 1: Using Set to store all the node of one Linked List and then checking with other one
    // Time: O(n), Space: O(n)
    // const store = new Set();
    // while (headA) {
    //     store.add(headA);
    //     headA = headA.next;
    // }

    // while (headB) {
    //     if (store.has(headB)) {
    //         return headB;
    //     }
    //     headB = headB.next;
    // }

    // return null;

    // Solution 2: Get the length first for both, move the larger one with step difference and then just compare both simulatenously
    // Time: O(n+m), Space: O(1)
    // let nA = headA;
    // let cA = 0;
    // while (nA) {
    //     cA++;
    //     nA = nA.next;
    // }
    // let nB = headB;
    // let cB = 0;
    // while (nB) {
    //     cB++;
    //     nB = nB.next;
    // }

    // const diff = Math.abs(cB - cA);
    // let temp;

    // // We want second list to be longer one
    // if (cA > cB) { // If A count is greater then swap with B so that we always make node B as larger one
    //     temp = headA;
    //     headA = headB;
    //     headB = temp;
    // }
    // for (let i = 0; i < diff; i++) {
    //     headB = headB.next;
    // }
    // nA= headA;
    // nB= headB;
    // while (nA !== nB) {
    //     nA = nA.next;
    //     nB = nB.next;
    // }

    // return nA;

    // Solution 3: Just keep moving the nodes until we find a match. But also make sure to rotate the pointer between both LL;
    let pA = headA;
    let pB = headB;
    while (pA != pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};