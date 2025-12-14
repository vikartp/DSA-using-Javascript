// https://leetcode.com/problems/split-a-string-in-balanced-strings/
/**
 * Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
 * Given a balanced string s, split it into some number of substrings such that:
 * Each substring is balanced.
 * Return the maximum number of balanced strings you can obtain.
 */
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    // Solution 1: Using L and R counter
    // let count = 0;
    // let lCount = 0;
    // let rCount = 0;
    // for (const char of s) {
    //     if (char === 'L') {
    //         lCount++;
    //     } else {
    //         rCount++;
    //     }

    //     if (lCount === rCount) {
    //         count++;
    //         lCount = 0;
    //         rCount = 0;
    //     }
    // }
    // return count;

    // Solution 2: Using temp counter
    let temp = 0;
    let count = 0;
    for (const char of s) {
        if (char === 'L') {
            temp++;
        } else {
            temp--;
        }

        if (temp === 0) {
            count++;
        }
    }
    return count;
};