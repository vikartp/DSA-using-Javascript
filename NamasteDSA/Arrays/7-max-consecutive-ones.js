/**
 Given a binary array nums, return the maximum number of consecutive 1's in the array.
Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOneCount = 0;
    let tempCount = 0;

    for (const n of nums) {
        if (n === 0) {
            maxOneCount = Math.max(maxOneCount, tempCount)
            tempCount = 0;
        } else {
            tempCount++;
        }
    }
    maxOneCount = Math.max(maxOneCount, tempCount)

    return maxOneCount;
};

// Example usage:
let arr = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(arr)); // Output: 3
// Time Complexity: O(n)
// Space Complexity: O(1)