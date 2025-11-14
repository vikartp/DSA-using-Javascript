/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const seenNode = new Set();
    let curr = head;

    while (curr) {
        if (seenNode.has(curr)) {
            return true;
        }
        seenNode.add(curr);
        curr = curr.next;
    }

    return false;
};

// Time Complexity: O(n)
// Space Complexity: O(n)


// Alternative solution using Floyd's Cycle Detection Algorithm (Tortoise and Hare)
var hasCycleFloyd = function(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};