// https://leetcode.com/problems/min-stack/description/


var MinStack = function() {
    // Solution 1: Using two separate arrays for stack and min values
    // this.stack = [];
    // this.minStack = []; // Minimum value till the corresponding stack value

    // Solution 2: Use a single array
    this.s = []; // We'll push array to this stack in this format -> [val, minValue], minValue => Minimum value till the corresponding stack value
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // Solution 1: Using two separate arrays for stack and min values
    // if (this.minStack.length === 0) {
    //     this.minStack.push(val);
    // } else {
    //     const prev = this.minStack[this.minStack.length - 1];
    //     const min = prev < val ? prev : val;
    //     this.minStack.push(min);
    // }
    // this.stack.push(val);

    // Solution 2: Use a single array
    if (this.s.length === 0) {
        this.s.push([val, val])
    } else {
        const minVal = Math.min(val, this.s[this.s.length - 1][1]); // Minimum of current val and last min
        this.s.push([val, minVal])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // Solution 1: Using two separate arrays for stack and min values
    // this.stack.pop();
    // this.minStack.pop();

    // Solution 2: Use a single array
    this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Solution 1: Using two separate arrays for stack and min values
    // return this.stack[this.stack.length - 1];

    // Solution 2: Use a single array
    return this.s[this.s.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // Solution 1: Using two separate arrays for stack and min values
    // return this.minStack[this.minStack.length - 1];

    // Solution 2: Use a single array
    return this.s[this.s.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */