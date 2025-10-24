/**
 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Solution 1:
    // let i = 0;
    // let j = 0;

    // while (j !== nums.length) {
    //     if (nums[j] !== 0) {
    //         let temp = nums[i];
    //         nums[i] = nums[j];
    //         nums[j] = temp;
    //         i++;
    //     }
    //     j++;
    // }

    // Solution 2:

    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// Example usage:
let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]

// Time Complexity: O(n)
// Space Complexity: O(1)

