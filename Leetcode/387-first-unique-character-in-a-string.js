/**
 * Given a string s, find the first non-repeating character in it 
 * and return its index. 
 * If it does not exist, return -1.
 */

var firstUniqChar = function (s) {
    const charCount = new Map();

    // First pass: count occurrences of each character
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Second pass: find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }

    return -1; // No unique character found
}

// Test Cases
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1