/**
 * Given the head of a singly linked list, group all the nodes with odd indices together 
 * followed by the nodes with even indices, and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the even 
 * and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
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
  
  function oddEvenList(head) {
    if (!head || !head.next) return head; // If the list has 0 or 1 node, no rearrangement is needed
  
    let odd = head;          // Pointer to odd nodes
    let even = head.next;    // Pointer to even nodes
    let evenHead = even;     // Keep track of the head of the even nodes
  
    while (even && even.next) {
      odd.next = even.next;  // Link current odd node to the next odd node
      odd = odd.next;        // Move the odd pointer forward
      even.next = odd.next;  // Link current even node to the next even node
      even = even.next;      // Move the even pointer forward
    }
  
    odd.next = evenHead; // Append even nodes after the odd nodes
  
    return head; // Return the rearranged list
  }
  
  // Example
  const list = createLinkedList([1, 2, 3, 4, 5]);
  console.log("Original List:", printLinkedList(list));
  
  const rearrangedList = oddEvenList(list);
  console.log("Odd-Even Rearranged List:", printLinkedList(rearrangedList));
  