/**
 * Write code that enhances all arrays such that you can call the 
 * array.last() method on any array and it will return the last element. 
 * If there are no elements in the array, it should return -1.
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (!this.length) return -1;

    const len = this.length;
    return this.at(len-1);
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */