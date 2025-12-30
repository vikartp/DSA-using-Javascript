/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * using all the original letters exactly once.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Approach 1: Time complexity- O(nlogn), Space: O(n)
    // if (s.length !== t.length) return false;
    // const sortedFirst = s.split('').sort().join('');
    // const sortedSecond = t.split('').sort().join('');
    // return sortedFirst === sortedSecond;

    // Approach 2: Time complexity- O(n), Space: O(1)
    if (s.length !== t.length) return false;

    const countMap = new Map();
    for (const char of s) {
        if (!countMap.has(char)) {
            countMap.set(char, 0);
        }
        countMap.set(char, countMap.get(char) + 1);
    }

    for (const char of t) {
        if (!countMap.has(char) || countMap.get(char) === 0) return false;
        countMap.set(char, countMap.get(char) - 1);
    }

    return true;
};