/**
 * Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
 */


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const mapping = {};
    const sArr = s.split(' ');
    if (pattern.length !== sArr.length) return false;
    let i = 0;
    const usedVal = [];
    for (const char of pattern) {
        if (!mapping[char]) {
            if (usedVal.includes(sArr[i])) return false;
            mapping[char] = sArr[i];
            usedVal.push(sArr[i]);
        } else if (mapping[char] !== sArr[i]) {
            return false;
        }

        i++;
    }
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog")) // true
console.log(wordPattern("abba", "dog cat cat fish")) // false