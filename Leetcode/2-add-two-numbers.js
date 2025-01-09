/**
 * The problem 2. Add Two Numbers involves adding two non-negative integers represented 
 * as linked lists, where each node contains a single digit. 
 * The digits are stored in reverse order, 
 * meaning the 1's digit is at the head of the list.
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0); // Dummy node to simplify edge cases
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10); // Create a new node with the remainder
        current = current.next;

        if (l1) l1 = l1.next; // Move to the next node in l1
        if (l2) l2 = l2.next; // Move to the next node in l2
    }

    return dummy.next; // Skip the dummy node and return the result
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array (for testing)
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Example
const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);
const result = addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); // Output: [7, 0, 8]