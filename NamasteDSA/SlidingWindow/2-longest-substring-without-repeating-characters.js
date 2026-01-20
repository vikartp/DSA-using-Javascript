// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const charMap = new Map();
    let maxLen = 0;
    let i = 0;
    let j = 0;

    while (j < s.length) {
        const char = s[j];
        if (charMap.has(char) && charMap.get(char) >= i) {
            i = charMap.get(char) + 1;
        }
        charMap.set(char, j);
        maxLen = Math.max(maxLen, j - i + 1);
        j++;
    }
    return maxLen;
};

// Time: O(N)

// Space: O(min(N,M)) where N is length of string and M is size of charset