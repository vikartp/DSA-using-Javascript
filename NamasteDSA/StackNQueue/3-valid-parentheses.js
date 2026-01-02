// https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    //    const stack = [];
    //    const parenMap = {
    //     ')': '(',
    //     ']': '[',
    //     '}': '{'
    //    };

    //    for (const char of s) {
    //         if (char === '(' || char === '{' || char === '[') {
    //             stack.push(char);
    //         } else if (char === ')' || char === '}' || char === ']') {
    //             if (stack.length === 0 || stack.pop() !== parenMap[char]) {
    //                 return false;
    //             }
    //         }
    //    }

    //    return stack.length === 0;

    // Second Attempt Solution

    // const stack = [];
    // const pairMap = {
    //     ')': '(',
    //     ']': '[',
    //     '}': '{'
    // };

    // for (const char of s) {
    //     if (char === ')' || char === ']' || char === '}') {
    //         const lastChar = stack.pop();
    //         if (pairMap[char] !== lastChar) {
    //             return false;
    //         }
    //     } else {
    //         stack.push(char);
    //     }
    // }

    // return stack.length === 0;

    // Another solution
    // Time Complexity: O(n)
    // Space Complexity: O(n); Stack used
    const stack = [];
    const map = {
        '{': '}',
        '(': ')',
        '[': ']'
    };

    for (const char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (!top || map[top] !== char) return false;
        }
    }

    return stack.length === 0;
};