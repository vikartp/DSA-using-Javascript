/**
 * Given two strings s and t, 
 * return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from 
 * the original string by deleting some (can be none) of the characters 
 * without disturbing the relative positions of the remaining characters. 
 * (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

// Time complexity: O(n)
// Space complexity: O(1)
function isSubsequence(s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;

    // let i = 0;
    // let j = 0;

    // while(i < s.length) {
    //     let currentMatch = false;
    //     while (j < t.length && !currentMatch) {
    //         if (t[j] === s[i]) {
    //             i++;
    //             currentMatch = true;
    //         }
    //         j++;
    //     }
    //     if (!currentMatch) return false;
    // }
    // return true;
}

// Test cases
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false

