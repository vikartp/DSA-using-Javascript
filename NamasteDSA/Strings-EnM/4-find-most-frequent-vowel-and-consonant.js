// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    // Solution 1: Using Map
    // const vowels = ['a', 'e', 'i', 'o', 'u'];
    // const vowelSet = new Set(vowels);
    // const vowelMap = new Map();
    // const consonantMap = new Map();

    // for (const char of s) {
    //     if (vowelSet.has(char)) {
    //         vowelMap.set(char, (vowelMap.get(char) || 0) + 1);
    //     } else {
    //         consonantMap.set(char, (consonantMap.get(char) || 0) + 1);
    //     }
    // }
    // const maxVowelCount = vowelMap.size ? Math.max(...Array.from(vowelMap.values())) : 0;
    // const maxConsonantCount = consonantMap.size ? Math.max(...Array.from(consonantMap.values())) : 0;

    // return maxVowelCount + maxConsonantCount;

    // Solution 2: Using object
    const countStore = {};
    // Time complexity for running below loop is O(n)
    for(const char of s) {
        countStore[char] = !countStore[char] ? 1 : ++countStore[char];
    }

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vCount = 0;
    let cCount = 0;

    // Time complexity for running below loop is O(1), because this will always run max of 26 times
    for (const c of Object.keys(countStore)) {
        if (vowels.has(c)) {
            vCount = Math.max(vCount, countStore[c])
        } else {
            cCount = Math.max(cCount, countStore[c])
        }
    }

    return vCount + cCount;
};

// Time Complexity: O(n)
// Space Complexity: O(1)