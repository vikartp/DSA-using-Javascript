/**
 * Given a string s consisting of words and spaces, 
 * return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // Solution 1: Using JS in-built functions
    // const splitted = s.trim().split(' ');
    // const last = splitted.at(splitted.length - 1);
    // return last.length;

    // Solution 2: Using for-loop
    // let temp = '';
    // let isLastStr = true;
    // for (const char of s) {
    //     if (char === ' ') {
    //         isLastStr = false;
    //         continue;
    //     }
    //     if (!isLastStr) {
    //         isLastStr = true;
    //         temp = '';
    //     }
    //     temp += char;
    // }

    // return temp.length;

    // Solution 3: Use one loop from last
    let n = s.length - 1;
    let count = 0;
    while (n >= 0) {
        if (s[n] !== ' ') {
            count++;
        } else if (count > 0) {
            break;
        }
        n--;
    }

    return count;
};