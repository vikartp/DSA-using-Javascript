/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j+1]) {
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            return nums;
        }
    }

    return nums;
};

// Example usage:
console.log(sortArray([5,2,3,1])); // Output: [1,2,3,5]
console.log(sortArray([5,1,1,2,0,0])); // Output: [0,0,1,1,2,5]

// Time Complexity: O(n^2) in the worst case
// Space Complexity: O(1)