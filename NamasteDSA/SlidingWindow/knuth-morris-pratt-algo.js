// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // Knuth–Morris–Pratt algorithm
    // Time Complexity: O(n)
    // Space Complexity: O(m);

    const n = haystack.length;
    const m = needle.length;

    // Build LPS array
    const lps = [0];
    let i = 0;
    let j = 1;
    while (j < m) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1;
            ++i; ++j;
        } else {
            if (i === 0) {
                lps[j] = 0;
                ++j;
            } else {
                i = lps[i-1];
            }
        }
    }

    // Compare both strings
    i = j = 0;
    while (i < n) {
        if (haystack[i] === needle[j]) {
            ++i; ++j;
        } else {
            if (j === 0) {
                ++i;
            } else {
                j = lps[j-1];
            }
        }
        if (j === m) {
            return i-m;
        }
    }

    return -1;
};