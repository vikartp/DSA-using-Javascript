/**
 * Given a linked list, swap every two adjacent nodes and return its head. 
 * You must solve the problem without modifying the values in the list's nodes
 *  (i.e., only nodes themselves may be changed.)
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
var swapPairs = function (head) {
    // Solution 3: Recursive Approach
    // Time Complexity: O(n)
    // Space Complexity: O(n)  (due to recursive call stack)

    if (!head || !head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next = l;

    return r;

    // Soultion 2: Iterative Approach with dummy node
    // Time Complexity: O(n)
    // Space Complexity: O(1)

    // if (!head || !head.next) return head;

    // let dummy = new ListNode();
    // dummy.next = head;

    // let p = dummy;
    // let c = head;
    // let n = head.next;

    // while (c && n) {
    //     p.next = n;
    //     c.next = n.next;
    //     n.next = c;

    //     p = c;
    //     c = c.next;
    //     n = c && c.next;
    // }

    // return dummy.next;

    // Solution 1: Iterative Approach with no dummy node
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    
    // if (!head || !head.next) return head;

    // let f = head;
    // let s = head.next;
    // let newHead = s;
    // let prevFirst;

    // while (f && s) {
    //     if (prevFirst) {
    //         prevFirst.next = s
    //     }
    //     f.next = s.next;
    //     s.next = f;
    //     prevFirst = f;
        
    //     f = f.next;
    //     if (f) {
    //         s = f.next;
    //     }
    // }

    // return newHead;

};