/**
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenStart = even;

    while(odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next;
    }

    odd.next = evenStart;
    return head;

    // if (!head || !head.next) return head; // If the list has 0 or 1 node, no rearrangement is needed

    // let odd = head;          // Pointer to odd nodes
    // let even = head.next;    // Pointer to even nodes
    // let evenHead = even;     // Keep track of the head of the even nodes

    // while (even && even.next) {
    //     odd.next = even.next;  // Link current odd node to the next odd node
    //     odd = odd.next;        // Move the odd pointer forward
    //     even.next = odd.next;  // Link current even node to the next even node
    //     even = even.next;      // Move the even pointer forward
    // }

    // odd.next = evenHead; // Append even nodes after the odd nodes

    // return head; // Return the rearranged list
};