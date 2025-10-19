/**
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];
    // Make sure that all duplicate integers are at adjacent place in array
    nums.sort((a,b) => a - b);
    const backtrack = (path, start) => {
        result.push([...path]);
        for(let i = start; i < nums.length; i++) {
            // Don't backtrack if the previous integer is same
            if (i > start && nums[i-1] === nums[i]) continue;
            path.push(nums[i]);
            backtrack(path, i+1);
            path.pop();
        }
    }

    backtrack([], 0);
    return result;
};

// Example usage:
console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Time Complexity: O(n*2^n) where n is the number of elements in nums. In the worst case, we may have to explore all subsets.
// Since we are sorting the array at the beginning, that takes O(n log n) time, but the dominant factor is O(n*2^n).
// Space Complexity: O(n) for the recursion stack and path storage. The output space is O(2^n) to store all subsets.