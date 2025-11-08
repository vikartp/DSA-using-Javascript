/**
 * Selection Sort Algorithm
 * @param {number[]} nums - Array of numbers to be sorted
 * @returns {number[]} - Sorted array
 */
var selectionSort = function(nums) {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }
    }
    return nums;
};

// Example usage:
console.log(selectionSort([64, 25, 12, 22, 11])); // Output: [11, 12, 22, 25, 64]
console.log(selectionSort([5,1,1,2,0,0])); // Output: [0,0,1,1,2,5]

// Time Complexity: O(n^2) in all cases
// Space Complexity: O(1)