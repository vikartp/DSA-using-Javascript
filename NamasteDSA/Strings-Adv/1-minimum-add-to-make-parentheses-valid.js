// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let openCount = 0;
    let move = 0;

    for (const c of s) {
        if (c === '(') {
            openCount++;
        } else {
            if (openCount > 0) {
                openCount--;
            } else {
                move++;
            }
        }
    }
    return openCount + move;
};

// Example usage:
console.log(minAddToMakeValid("())")); // Output: 1
console.log(minAddToMakeValid("(((")); // Output: 3
console.log(minAddToMakeValid("()")); // Output: 0
console.log(minAddToMakeValid("()))((")); // Output: 4

// Time Complexity: O(n), where n is the length of the input string s.
// Space Complexity: O(1), as we are using only a constant amount of extra space.