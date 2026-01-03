// https://leetcode.com/problems/remove-outermost-parentheses/description/

/**
 * @param {string} s
 * @return {string}
 */
// var removeOuterParentheses = function(s) {
//     const stack = [];
//     let ans = '';

//     for(const char of s) {
//         // Approach 1: Maintain popped flag for nested ones
//         // let popped = false;
//         // if (char === '(') {
//         //     stack.push(char);
//         // } else {
//         //     stack.pop();
//         //     popped = true;
//         // }

//         // const len = stack.length;
//         // if (len > 1 || (popped && len === 1)) {
//         //     ans += char;
//         // }

//         // Approach 2: Check length in if else
//         if (char === '(') {
//             stack.push(char);
//             ans += stack.length > 1 ? char : '';
//         } else {
//             ans += stack.length > 1 ? char : '';
//             stack.pop();
//         }
//     }

//     return ans;
// };

// Solution: Without Stack, use str

// var removeOuterParentheses = function(s) {
//     let ans = '';
//     let str = '';
//     for (const char of s) {
//         if (char === '(') {
//             str += char;
//             ans += str.length > 1 ? char : '';
//         } else {
//             ans += str.length > 1 ? char : '';
//             str = str.substring(0, str.length-1);
//         }
//     }

//     return ans;
// };

// Solution: Without Stack, use level 
// It uses less memory, Time complexity remains O(n)
var removeOuterParentheses = function(s) {
    let ans = ''; // Space: o(n)
    let level = 0; // Space: O(1)
    for (const char of s) {
        if (char === '(') {
            ++level;
            ans += level > 1 ? char : '';
        } else {
            ans += level > 1 ? char : '';
            --level;
        }
    }

    return ans;
};