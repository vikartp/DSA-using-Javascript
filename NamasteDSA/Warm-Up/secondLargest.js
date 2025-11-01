/**
 * Find the second largest number in an array
 * @param {number[]} arr - The input array of numbers
 * @returns {number|null} - The second largest number or null if it doesn't exist
 */
function secondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for a second largest
    }
    let first = -Infinity;
    let second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

// Example usage:
console.log(secondLargest([3, 5, 2, 9, 7])); // Output: 7
console.log(secondLargest([1, 1, 1])); // Output: null

// Time Complexity: O(n)
// Space Complexity: O(1)
