/**
 * You are given a 0-indexed array of strings words and a character x.
 * Return an array of indices representing the words that contain the character x.
 * Note that the returned array may be in any order.
 */

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    // Time Complexity: O(m*n)
    // Space Complexity: O(1)
    const resultIndex = [];
    for (let i = 0; i < words.length; i++) {
        // Approach 1: Using JS in-built function
        if (words[i].includes(x)) {
            resultIndex.push(i)
        }

        // Approach 2: Using for-of loop
        // const word = words[i];
        // for (const c of word) {
        //     if (c === x) {
        //         resultIndex.push(i);
        //         break;
        //     }
        // }

        // Approach 3: Using for loop
        // for (let j = 0; j < words[i].length; j++) {
        //     if (words[i][j] === x) {
        //         resultIndex.push(i)
        //         break;
        //     }
        // }
    }
    return resultIndex;
};