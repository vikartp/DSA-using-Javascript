/**
 * 46. Permutations
 * https://leetcode.com/problems/permutations/
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input:nums = [1,2,3]

Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]

Output:[[0,1],[1,0]]

Example 3:

Input: nums = [1]

Output:[[1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const results = [];
    const n = nums.length;

    const backtrack = (path) => {
        if (path.length === n) {
            results.push([...path]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (path.includes(nums[i])) continue;
            path.push(nums[i]);
            backtrack(path);
            path.pop();
        }
    }

    backtrack([]);
    return results;
};

// Example usage:
console.log(permute([1, 2, 3]));
// Time Complexity: O(n * n!) where n is the length of nums. There are n! permutations and generating each permutation takes O(n) time.
// Space Complexity: O(n) for the recursion stack and path storage. The output space is O(n!) to store all permutations.
// If we consider the output space, the overall space complexity is O(n * n!).
// n! = n × (n - 1) × (n - 2) × ... × 1