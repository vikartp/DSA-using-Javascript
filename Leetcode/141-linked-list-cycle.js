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
    // Floyd's Cycle Detection Algorithm (Tortoise and Hare)
    // Time: O(n), Space: O(1)
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;        // Move 1 step
        fast = fast.next.next;   // Move 2 steps
        
        if (slow === fast) {
            return true;  // Cycle detected
        }
    }

    return false;  // No cycle
};

// Alternative solution using Set - O(n) space
var hasCycleWithSet = function(head) {
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