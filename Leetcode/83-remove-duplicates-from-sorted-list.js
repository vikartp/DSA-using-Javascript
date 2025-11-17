/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // Approach 1: Using just one pointer
    // Time: O(n) , Space: O(1)
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
    // Approach 2: Using Sentinal Node
    // const sentinel = new ListNode(200); // Can't keep it blank as we have 0 as number
    // sentinel.next = head;

    // let first = sentinel.next;
    // let second = sentinel;

    // while (first) {
    //     if (first.val === second.val) {
    //         first = first.next;
    //         second.next = second.next.next;
    //     } else {
    //         first = first.next;
    //         second = second.next;
    //     }
    // }

    // return sentinel.next;
};