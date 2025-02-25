/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) {
            return false; // We have seen this number before, so it's not a happy number
        }

        seen.add(n);

        // Calculate the sum of the squares of the digits
        let sum = 0;
        while (n > 0) {
            const digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);  // Remove the last digit
        }

        n = sum; // Update n to the sum of squares
    }

    return true; // If we reached 1, it's a happy number
};