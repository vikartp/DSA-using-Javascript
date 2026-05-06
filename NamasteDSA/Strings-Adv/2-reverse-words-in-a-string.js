// https://leetcode.com/problems/reverse-words-in-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // return s.trim().split(/\s+/).reverse().join(' ')
    let revWords = [];
    let word = '';
    for (const c of s) {
        if (c !== ' ') {
            word = word + c;
        } else {
            word && revWords.unshift(word);
            word = '';
        }
    }
    word && revWords.unshift(word);

    return revWords.join(' ');
};

console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"

// Time: O(n) where n is the length of the string
// Space: O(n) where n is the length of the string (in the worst case when all characters are non-space)