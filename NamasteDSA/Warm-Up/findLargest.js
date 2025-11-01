/**
 * Write a function that return the largest number from an array of integers.
 * @param {number[]} arr - An array of integers
 * @returns {number} The largest integer in the array
 */

function findLargest(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage:
const numbers = [34, -2, 45, 0, 11, -9];
console.log(findLargest(numbers)); // Output: 45