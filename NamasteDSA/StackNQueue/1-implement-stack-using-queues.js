// https://leetcode.com/problems/implement-stack-using-queues/description/


/**
 * Using two queues to implement stack
 */

var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const n = this.q1.length;
    for (let i = 0; i < n-1; i++) {
        this.q2.push(this.q1.shift());
    }
    const last = this.q1.shift();
    // Swap q1 and q2
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return last;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const n = this.q1.length;
    for (let i = 0; i < n-1; i++) {
        this.q2.push(this.q1.shift());
    }
    const top = this.q1[0];
    this.q2.push(this.q1.shift());

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


/**
 * Using single queue to implement stack
 */


var MyStack = function () {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    const n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    const top = this.q.shift();
    return top;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    const n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift())
    }
    const top = this.q[0];
    this.q.push(this.q.shift())
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */