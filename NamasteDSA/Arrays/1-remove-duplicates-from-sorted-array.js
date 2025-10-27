/**
 * Given an integer array nums sorted in non-decreasing order, 
 * remove the duplicates in-place such that each unique element appears only once. 
 * The relative order of the elements should be kept the same.
 * Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. 
 * After removing duplicates, return the number of unique elements k.
 * Example => [0,0,1,1,1,2,2,3,3,4] -> Output=> 5, nums = [0,1,2,3,4,_,_,_,_,_]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x++;
            nums[x] = nums[i];
        }
    }
    return x + 1;
};

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(1) - We use constant extra space.

/**
 * Notes: 
 * - Non-decreasing order means the array is sorted in ascending order, allowing duplicates.
 */