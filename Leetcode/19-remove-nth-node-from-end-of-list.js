/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Use Sentinel Node: One pass approach
    // Time: O(n), Space: O(1)
    const sentinel = new ListNode();
    sentinel.next = head;
    let first = sentinel;
    for(let i = 0; i < n; i++) {
        first = first.next;
    }

    let second = sentinel;

    while (first.next) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return sentinel.next;

    // Use Sentinel Node: Two Pass Approach
    // Time: O(n+n) -> O(n), Space: O(1)
    // const sentinel = new ListNode();
    // sentinel.next = head;

    // let length = 0;
    // while (head) {
    //     head = head.next;
    //     length++;
    // }

    // const pos = length - n; // prev index position
    // let prev = sentinel;
    // for (let i = 0; i < pos; i++) {
    //     prev = prev.next;
    // }

    // prev.next = prev.next.next;

    // return sentinel.next;

    // First thought solution.
    // let count = 0;
    // let curr = head;
    // while (curr) {
    //     count++;
    //     curr = curr.next;
    // }
    // const index = count - n;

    // count = 0;
    // curr = head;
    // let prev = null;
    // while (index !== count) {
    //     prev = curr;
    //     curr = curr.next;
    //     count++;
    // }
    // if (index === 0 && !curr.next) {
    //     return null;
    // } else if (index === 0 && curr.next) {
    //     return head.next;
    // }
    // prev.next = curr.next;

    // return head;
};