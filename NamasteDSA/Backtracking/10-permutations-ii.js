/**
 Given a collection of numbers, nums, that might contain duplicates, 
 return all possible unique permutations in any order.

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    // Sort the array to handle duplicates
    nums.sort((a,b) => a - b);

    const backtrack = (path, choices) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < choices.length; i++) {
            // Skip duplicates recursion
            if (i > 0 && choices[i] === choices[i-1]) continue;
            path.push(choices[i]);
            // Recurse with remaining choices
            backtrack(path, [...choices.slice(0,i), ...choices.slice(i+1)]);
            path.pop();
        }
    };

    backtrack([], nums);
    
    return result;
};


// Example usage:
console.log(permuteUnique([1, 1, 2]));
// Time Complexity: O(n * n!) where n is the length of nums. There are at most n! unique permutations and generating each permutation takes O(n) time.
// Sorting the array takes O(n log n) time, which is dominated by O(n * n!) for larger n.
// Space Complexity: O(n) for the recursion stack and path storage. The output space is O(n!) to store all unique permutations.
// If we consider the output space, the overall space complexity is O(n * n!).