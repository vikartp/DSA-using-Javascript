/**
 * Given an integer array nums and an integer val, 
 * remove all occurrences of val in nums in-place. 
 * The order of the elements may be changed. 
 * Then return the number of elements in nums which are not equal to val.
 * 
 * Example 1 => nums = [3,2,2,3], val = 3 -> Output=> 2, nums = [2,2,_,_]
 * Example 2 => nums = [0,1,2,2,3,0,4,2], val = 2 -> Output=> 5, nums = [0,1,3,0,4,_,_,_]
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Two Pointers Approach
    let x = 0; // Pointer for the position of the next non-val element
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to val, we keep it
        if (nums[i] !== val) {
            // Move the non-val element to the first pointer position
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};
// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(1) - We use constant extra space.