/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // Use Sentinel node: This node will always stay behind head.
    // Time: O(n), Space: O(1)
    const sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;

    while (prev && prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    return sentinel.next;

    // Brute-Force
    // if (head === null) {
    //     return head;
    // }

    // let curr = head;
    // let prev = null;

    // while (curr) {
    //     if (curr.val === val) {
    //         if (prev) {
    //             prev.next = curr.next;
    //             curr.next = null;
    //             curr = prev.next;
    //         } else {
    //             const next = curr.next;
    //             curr.next = null;
    //             curr = next;
    //             head = curr;
    //         }
    //     } else {
    //         prev = curr;
    //         curr = curr.next;
    //     }
    // }
    // return head;
};