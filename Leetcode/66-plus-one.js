/**
 * The problem 66. Plus One involves adding one to a non-negative 
 * integer represented as an array of its digits. 
 * The most significant digit is at the head of the array, 
 * and each element in the array contains a single digit.
 */

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] < 10) {
            return digits; // No carry, return the array
        }
        digits[i] = 0; // Handle carry
    }

    // If there's still a carry after the loop, prepend 1
    digits.unshift(1);
    return digits;
};


console.log(plusOne([1, 2, 3]));  // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1]));  // Output: [4, 3, 2, 2]
console.log(plusOne([9]));  // Output: [1, 0]
console.log(plusOne([9, 9]));  // Output: [1, 0, 0]
console.log(plusOne([9, 9, 9]));  // Output: [1, 0, 0, 0]