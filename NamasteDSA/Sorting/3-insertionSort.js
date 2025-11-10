/**
 * Insertion Sort Algorithm
 * @param {number[]} nums - Array of numbers to be sorted
 * @returns {number[]} - Sorted array
 */

var insertionSort = function(nums) {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        let key = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            j = j - 1;
        }
        nums[j + 1] = key;
    }
    return nums;
};

// Example usage:
console.log(insertionSort([12, 11, 13, 5, 6])); // Output: [5, 6, 11, 12, 13]
console.log(insertionSort([5,1,1,2,0,0])); // Output: [0,0,1,1,2,5]

// Time Complexity: O(n^2) in worst and average cases, O(n) in best case
// Space Complexity: O(1)