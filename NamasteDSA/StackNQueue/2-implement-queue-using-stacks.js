// https://leetcode.com/problems/implement-queue-using-stacks/description/


var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
// Note: Time Complexity: Worst Case: O(n), Average Case: O(1)
MyQueue.prototype.pop = function () {
    // Approach 1: Keep Stack 1 as main stack always
    // const n = this.s1.length;
    // for (let i = 0; i < n - 1; i++) {
    //     this.s2.push(this.s1.pop());
    // }
    // const elemToRemove = this.s1.pop();

    // for (let i = 0; i < n - 1; i++) {
    //     this.s1.push(this.s2.pop());
    // }
    // return elemToRemove;

    // Approach 2: Use both stack for queue operation
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // Approach 1: Keep Stack 1 as main stack always
    // const n = this.s1.length;
    // for (let i = 0; i < n - 1; i++) {
    //     this.s2.push(this.s1.pop())
    // }
    // const peek = this.s1[0];
    // for (let i = 0; i < n - 1; i++) {
    //     this.s1.push(this.s2.pop())
    // }
    // return peek;

    // Approach 2: Use both stack for queue operation
    if (this.s2.length === 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    return this.s2[this.s2.length -1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    // Approach 1: Keep Stack 1 as main stack always
    // return this.s1.length === 0;

    // Approach 2: Use both stack for queue operation
    return !this.s1.length && !this.s2.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */