/**
 * Maximum Twin Sum of a Linked List involves finding the maximum 
 * twin sum of nodes in a singly linked list. 
 * A twin sum is defined as the sum of the first and last nodes, 
 * second and second last nodes, and so on.
 * Approach:
To solve this problem efficiently, we can:

Use a two-pointer approach to identify the pairs of nodes to sum.
Reverse the second half of the linked list to compare it directly with the first half.
Calculate the twin sums and track the maximum.
 */

// Time complexity: O(n), where n is the number of nodes in the linked list.
// Space complexity: O(1), as the reversal is done in place.
function pairSum(head) {
    if (!head) return 0;

    // Step 1: Use a slow and fast pointer to find the middle of the list
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    let current = slow;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Step 3: Calculate twin sums
    let maxTwinSum = 0;
    let first = head;
    let second = prev; // Start from the reversed second half

    while (second) {
        maxTwinSum = Math.max(maxTwinSum, first.val + second.val);
        first = first.next;
        second = second.next;
    }

    return maxTwinSum;
}

// Definition for singly-linked list node
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Example
const list = createLinkedList([5, 4, 2, 1]);
console.log(pairSum(list)); // Output: 6 (5+1, 4+2)
