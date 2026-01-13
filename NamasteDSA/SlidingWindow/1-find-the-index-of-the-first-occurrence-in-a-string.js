// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // Solution 0: Using indexOf
    // return haystack.indexOf(needle);
    // Solution 1: Using while loop and substring method(Sliding Window)
    // Time Complexity : O(n*m), Space: O(1)
    // const n = haystack.length;
    // const m = needle.length;
    // let i = 0;
    // while (i <= n - m) {
    //     if (haystack.substring(i, i + m) === needle) {
    //         return i;
    //     }
    //     i++;
    // }
    // return -1;

    // Solution 2: Using nested for loop for inner comparision(Sliding Window)
    const n = haystack.length;
    const m = needle.length;
    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        // Compare each character in the window
        for (j = 0; j < m; j++) {
            if (needle[j] !== haystack[i+j]) {
                break;
            }
        }
        // If the inner loop has run fully successfully, 
        // that means we have found the match and then we return the outer index because that is the starting point
        if (j === m) {
            return i;
        }
    }

    return -1;
};
// Time Complexity: O(n*m) where n is the length of haystack and m is the length of needle
// Space Complexity: O(1)