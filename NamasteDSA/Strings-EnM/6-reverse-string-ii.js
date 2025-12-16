/**
 * Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    // Solution 1: Brute-Force
    // const reverseFirstK = (str) => {
    //     const firstK = str.slice(0, k);
    //     const remaining = str.slice(k);
    //     return firstK.split('').reverse().join('') + remaining;
    // };

    // let finalStr = '';
    // let index = 0;
    // let temp2k = '';
    // while (s[index]) {
    //     temp2k += s[index];
    //     if (temp2k.length === 2 * k) {
    //         finalStr += reverseFirstK(temp2k);
    //         temp2k = '';
    //     }
    //     index++;
    // }
    // finalStr += reverseFirstK(temp2k);

    // return finalStr;

    // Solution 2: Use smart 2k jump approach and better swap method
    // Time Complexity: O(n), Space Complexity: O(n)
    s = s.split(''); // Splitting string into array because we can't mutate string
    // Jump 2k for each iteration
    for (let i = 0; i < s.length; i = i + (2*k)) {
        // Swap first k elements in current iteration(contains max of 2k elements)
        const mid = Math.floor(k/2);
        for (let j = 0; j < mid; j++) {
            // Hint: Just think that we have to write simple swap logic and then add the jump(in this case it's 'i')
            let temp = s[j+i];
            s[j+i] = s[k+i-1-j];
            s[k+i-1-j] = temp;
        }
    }

    return s.join('')
};