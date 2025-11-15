/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    /**
     * Approach 1: Make an array out of the LinkedList and then check if it reads the same backwards as forwards
     * Time: O(n), Space: O(n)
     */

    // const arrayLL = [];
    // let temp = head;

    // while (temp) {
    //     arrayLL.push(temp.val);
    //     temp = temp.next;
    // }

    // let i = 0;
    // let j = arrayLL.length - 1;

    // while (i < j) {
    //     if (arrayLL[i] !== arrayLL[j]) {
    //         return false;
    //     }
    //     i++;
    //     j--;
    // }

    // return true;

    /**
     * Approach 2: Find the middle element, Reverse the second half & Check both Linked List if they match for all elements in same order
     * Time: O(n), Space: O(1)
     */
    // Step 1: Find the mid element, slow pointer will become mid
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half, prev will become head for the reversed one
    let prev = null;
    let curr = slow;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Step 3: Compare both LL
    let firstList = head;
    let secondList = prev;
    while (secondList) {
        if (firstList.val !== secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};