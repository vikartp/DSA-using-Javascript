/**
 * You are given the head of a linked list. Delete the middle node, 
 * and return the head of the modified linked list.
 * The middle node of a linked list of size n is the ⌊n / 2⌋th node 
 * from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
 * For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 */

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

// Helper function to print a linked list
function printLinkedList(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Time Complexity: O(n), where n is the number of nodes in the list, as we traverse the list once.
// Space Complexity: O(1), as no extra space is used apart from pointers.
function deleteMiddle(head) {
    if (!head || !head.next) return null; // If the list is empty or has only one node, return null

    let slow = head;
    let fast = head;
    let prev = null;

    // Use two pointers: slow (moves one step) and fast (moves two steps)
    while (fast && fast.next) {
        prev = slow;         // Keep track of the node before the middle node
        slow = slow.next;    // Move slow one step
        fast = fast.next.next; // Move fast two steps
    }

    // Remove the middle node by skipping it
    prev.next = slow.next;
    return head;
}


// Example
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original List:", printLinkedList(list));

const updatedList = deleteMiddle(list);
console.log("After Deleting Middle Node:", printLinkedList(updatedList));
