/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // If there is no/single element in the list, return the head
    if (!head || !head.next) return head;

    // Find the length of list so that we can get the mod of that with k, which will be lowest and actual rotation needed
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++;
    }
    k = k % length; // Now k becomes the actual/least rotation needed
    if (k === 0) return head;

    // Find the kth element from last, so that we can break the list and get a new head
    let slow = head;
    let fast = head;

    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    let newHead = slow.next; // kth element from last
    slow.next = null; // Make slow pointer points to null
    fast.next = head; // Make fast pointer points to the head

    return newHead;
};