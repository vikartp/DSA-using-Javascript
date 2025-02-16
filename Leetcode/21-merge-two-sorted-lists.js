/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

// Define a ListNode class to represent each node in the linked list
class ListNodeClass {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

var mergeTwoLists = function (list1, list2) {
    // Create a dummy node to build the merged list
    let dummy = new ListNodeClass();
    let current = dummy; // Pointer to track the last node in the merged list
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If any elements are left in list1, append them
    if (list1 !== null) {
        current.next = list1;
    }

    // If any elements are left in list2, append them
    if (list2 !== null) {
        current.next = list2;
    }

    return dummy.next; // Return the merged list starting after the dummy node
};

// Solution in local:

// Define a ListNode class to represent each node in the linked list
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Function to merge two sorted linked lists
function mergeSortedLinkedLists(l1, l2) {
    // Create a dummy node to build the merged list
    let dummy = new ListNode();
    let current = dummy;  // Pointer to track the last node in the merged list

    // Traverse both lists and append the smaller node to the merged list
    while (l1 !== null && l2 !== null) {
        if (l1.value < l2.value) {
            current.next = l1; // Point to the smaller node
            l1 = l1.next;      // Move the pointer of list1 forward
        } else {
            current.next = l2; // Point to the smaller node
            l2 = l2.next;      // Move the pointer of list2 forward
        }
        current = current.next;  // Move current to the last node in the merged list
    }

    // If any elements are left in list1, append them
    if (l1 !== null) {
        current.next = l1;
    }

    // If any elements are left in list2, append them
    if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next;  // Return the merged list starting after the dummy node
}

// Function to print the linked list
function printList(list) {
    let current = list;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

// Example usage:
// Create two sorted linked lists: l1 = 1 -> 3 -> 5 and l2 = 2 -> 4 -> 6
let l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// Merge the two sorted linked lists
let mergedList = mergeSortedLinkedLists(l1, l2);

// Print the merged list
printList(mergedList);
