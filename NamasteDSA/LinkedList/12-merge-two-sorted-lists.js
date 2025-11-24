/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // Create a sentinel node to track the final head
    const sentinel = new ListNode();
    let curr = sentinel;
    // Compare both list value, point next of curr to whichever is lesser
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    // Note: After the above while loop either one of them or none of them(l1 and l2) will have some soted elements left which we can just point to curr next

    // Check if l1 still has some elements, point curr's next to that
    if (l1) {
        curr.next = l1;
    }
    // Check if l2 still has some elements, point curr's next to that
    if (l2) {
        curr.next = l2;
    }

    return sentinel.next;
};

// Time Complexity: O(n + m) where n and m are the lengths of the two linked lists
// Space Complexity: O(1) as we are not using any extra space except for a few pointers