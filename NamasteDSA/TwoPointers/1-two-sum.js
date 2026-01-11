// https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Solution 0: Brute Force Approach => Two Pointer Approach, Time: O(n^2), Space: O(1)
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }

    // Solution 1: Using Map, Time: O(n), Space: O(n)
    // const indexMap = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     const diff = target - nums[i];
    //     if (indexMap.has(diff)) {
    //         return [indexMap.get(diff), i];
    //     } else {
    //         indexMap.set(nums[i], i);
    //     }
    // }

    // Solution 2: Using object store, Time: O(n), Space: O(n)
    const store = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        // if (store[diff] !== undefined) {
        // if (store.hasOwnProperty(diff)) {
        if (Object.hasOwn(store, diff)) {
            return [store[diff], i]
        } else {
            store[nums[i]] = i;
        }
    }

};