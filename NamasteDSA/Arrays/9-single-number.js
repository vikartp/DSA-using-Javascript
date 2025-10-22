/**
 Given a non-empty array of integers nums, every element appears twice except for one. 
 Find that single one.
 You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // Solution 1:
    // const countMap = new Map();

    // for (const num of nums) {
    //     countMap.set(num, (countMap.get(num) || 0) + 1);
    // }

    // for (const [key, value] of countMap) {
    //     if (value === 1) return key;
    // }

    // Solution 2:
    // const countMap = {};

    // for (const num of nums) {
    //     if (countMap[num]) {
    //         delete countMap[num];
    //     } else {
    //         countMap[num] = 1;
    //     }
    // }

    // return parseInt(Object.keys(countMap).at(0))

    // Solution 3: Using Bitwise XOR(^)
    let xor = 0;

    for (const num of nums) {
        xor = xor ^ num;
    }

    return xor;
};