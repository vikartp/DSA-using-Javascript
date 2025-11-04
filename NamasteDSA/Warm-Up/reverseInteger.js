// https://leetcode.com/problems/reverse-integer/description/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;

    const limit = Math.pow(2, 31);
    let reversed = 0;
    x = Math.abs(x);

    while (x > 0) {
        const rem = x % 10;
        if (reversed < -limit || reversed > limit - 1) return 0;

        reversed = reversed * 10 + rem;
        x = Math.floor(x / 10);
    }

    if (reversed < -limit || reversed > limit - 1) return 0;

    return isNegative ? -reversed : reversed;
};


// Example usage:
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
// Time Complexity: O(log10(n)) where n is the input number
// Space Complexity: O(1)