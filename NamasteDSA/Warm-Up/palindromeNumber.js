// https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    let reversed = 0;
    let num = x;
    while (num > 0) {
        const rem = num % 10;
        reversed = reversed * 10 + rem;
        num = Math.floor(num / 10);
    }

    return reversed === x;
};

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

// Time Complexity: O(log10(n)) where n is the input number
// Space Complexity: O(1)