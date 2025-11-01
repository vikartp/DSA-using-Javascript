/**
 * Write a function that takes an array of integers as input
 * and return the smallest number from the array.
 * @param {number[]} arr - An array of integers
 * @returns {number} The smallest integer in the array
 */

function findSmallest(arr) {
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

// Example usage:
const numbers = [34, -2, 45, 0, 11, -9];
console.log(findSmallest(numbers)); // Output: -9