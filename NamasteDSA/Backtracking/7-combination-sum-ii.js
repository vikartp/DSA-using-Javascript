/**
 Given a collection of candidate numbers (candidates) and a target number (target), 
 find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    // Make sure to sort the candidates to handle duplicates
    candidates.sort((a,b) => a - b);

    const backtrack = (remainingSum, path, start) => {
        // Base case: if remaining sum is zero, we found a valid combination
        if (remainingSum === 0) result.push([...path]);
        // If remaining sum is negative, no need to proceed further (backtrack)
        if (remainingSum <= 0) return;
        // Optionally, we can add a check to stop early if the smallest candidate exceeds remaining sum
        for (let i = start; i < candidates.length && candidates[i] <= remainingSum; i++) {
            // Skip duplicates in the same recursive level
            if (i > start && candidates[i-1] === candidates[i]) continue;

            path.push(candidates[i]);
            backtrack(remainingSum - candidates[i], path, i+1)
            path.pop();
        }
    };

    backtrack(target, [], 0);

    return result;
};

// Example usage:
console.log(combinationSum2([10,1,2,7,6,1,5], 8)); 
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2,5,2,1,2], 5)); 
// Output: [[1,2,2],[5]]

// Time Complexity: O(2^n) in the worst case, where n is the number of candidates
// Space Complexity: O(n) where n is the maximum depth of the recursion tree (not considering the output space)