// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const dummyNode = new ListNode();
    let curr = dummyNode;
    let carry = 0;
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        const digitNode = new ListNode(sum % 10);
        curr.next = digitNode;
        curr = curr.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummyNode.next;

    // let dummy = new ListNode(0); // Dummy node to simplify edge cases
    // let current = dummy;
    // let carry = 0;

    // while (l1 || l2 || carry) {
    //     const val1 = l1 ? l1.val : 0;
    //     const val2 = l2 ? l2.val : 0;

    //     const sum = val1 + val2 + carry;
    //     carry = Math.floor(sum / 10);

    //     current.next = new ListNode(sum % 10); // Create a new node with the remainder
    //     current = current.next;

    //     if (l1) l1 = l1.next; // Move to the next node in l1
    //     if (l2) l2 = l2.next; // Move to the next node in l2
    // }

    // return dummy.next; // Skip the dummy node and return the result
};