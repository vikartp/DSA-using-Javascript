/**
 * Write a function that returns the count of digits in a given integer.
 * 
 * @param {number} n - The integer whose digits are to be counted.
 * @returns {number} - The count of digits in the integer.
 */

function countDigits(n) {
    // Solution 1: Convert the number to string and get its length
    // return Math.abs(n).toString().length;

    // Solution 2: Using a loop to count digits
    let tempNum = Math.abs(n);
    if (tempNum === 0) return 1;
    let count = 0;
    while (tempNum > 0) {
        count++;
        tempNum = Math.floor(tempNum / 10);
    }
    return count;
}

// Example usage:
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(0)); // Output: 1
console.log(countDigits(-6789)); // Output: 4