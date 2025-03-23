/**
 * Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
Solution Approach (Two Pointer - Fast & Slow)
We use two pointers:

Slow Pointer moves one step at a time.

Fast Pointer moves two steps at a time.

When the fast pointer reaches the end, the slow pointer is at the middle.
 */


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function middleNode(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;         // Moves 1 step
        fast = fast.next.next;     // Moves 2 steps
    }

    return slow;  // Slow pointer is now at the middle
}


// Time Complexity: O(n)
// Space Complexity: O(1)

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(middleNode(head)); // Output: 3
