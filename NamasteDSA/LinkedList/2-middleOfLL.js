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
var middleNode = function(head) {
    // Solution 1: Iterative Approach
    // const arr = [];
    // let temp = head;
    // while (temp) {
    //     arr.push(temp.val);
    //     temp = temp.next;
    // }

    // const l = arr.length;
    // const m = Math.floor(l/2);
    // let index = 0;
    // let tempNode = head;
    // while (index !== m && tempNode) {
    //     tempNode = tempNode.next;
    //     index++;
    // }

    // return tempNode;

    // Solution 2: Two Pointer Approach
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};