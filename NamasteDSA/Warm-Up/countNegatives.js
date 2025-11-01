/**
 * Write a function that counts the number of negative integers in an array.
 * @param {number[]} arr - An array of integers
 * @returns {number} The count of negative integers in the array
 */
function countNegatives(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

// Example usage:
const numbers = [34, -2, 45, 0, 11, -9];
console.log(countNegatives(numbers)); // Output: 2