/**
 * You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // Solution 1: Using for loop
    // if (num.length === 0) return '';

    // for(let i = num.length - 1; i >= 0; i--) {
    //     const lastChar = parseInt(num[i]);
    //     if (lastChar % 2 === 0) continue;

    //     return num.substring(0, i+1);
    // }
    // return '';

    // Solution 2: Using while loop
    let i = num.length - 1;
    while (i >= 0) {
        if (num[i] % 2 === 0) {
            i--;
            continue;
        }
        return num.substring(0, i+1);
    }

    return '';
};

// Time Complexity: O(n);
// Space Complexity: O(1);