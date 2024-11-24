/**
 * Given an array of integers 'nums' and an integer 'target',
 * return indices of the two numbers such that they add up to 'target'.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 */

// Brute force approach
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// O(n) approach
function twoSum(nums, target) {
    const hashObj = {};
    for (let i=0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (hashObj[diff] !== undefined) {
            return [hashObj[diff], i];
        } else {
            hashObj[nums[i]] = i;
        }
    }
    // const map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     const diff = target - nums[i];
    //     if (map.has(diff)) {
    //         return [map.get(diff), i];
    //     }
    //     map.set(nums[i], i);
    // }
}

const nums1 = [2,7,11,15], target1 = 9;
console.log(twoSum(nums1, target1)); // [0, 1]

const nums2 = [3,2,4], target2 = 6;
console.log(twoSum(nums2, target2)); // [1, 2]

const nums3 = [3,3], target3 = 6;
console.log(twoSum(nums3, target3)); // [0, 1]