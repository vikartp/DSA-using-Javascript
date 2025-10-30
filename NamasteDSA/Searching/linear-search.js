/**
 * Linear Search Algorithm
 * 
 * This function performs a linear search on an array to find the index of a target value.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage:
const nums = [4, 2, 7, 1, 3];
const target = 1;
console.log(linearSearch(nums, target)); // Output: 3

// Time Complexity: O(n)
// Space Complexity: O(1)