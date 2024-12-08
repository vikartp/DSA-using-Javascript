// Definition for singly-linked list.
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

function reverseList(head) {
    let prev = null; // Previous node pointer
    let current = head; // Current node pointer

    while (current !== null) {
        let next = current.next; // Save the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to the current node
        current = next; // Move to the next node
    }

    return prev; // New head of the reversed list
}


// Create and reverse a linked list
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original List:", printLinkedList(list));

const reversedList = reverseList(list);
console.log("Reversed List:", printLinkedList(reversedList));
