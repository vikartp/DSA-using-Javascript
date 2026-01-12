// https://leetcode.com/problems/is-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0; // Tracks s
    let j = 0; // Tracks t
    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
};

// Time Complexity: O(n) where n is the length of string t
// Space Complexity: O(1)