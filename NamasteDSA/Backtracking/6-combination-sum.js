/**
Given an array of distinct integers candidates and a target integer target,
return a list of all unique combinations of candidates where the chosen numbers sum to target.
You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.
The test cases are generated such that the number of unique combinations that sum up to target 
is less than 150 combinations for the given input.
Example 1:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:
Input: candidates = [2], target = 1
Output: []
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(arr, target) {
    const result = [];

    const backtrack = (remainingSum, path, start) => {
        // Base case: if remainingSum is 0, we found a valid combination
        if (remainingSum === 0) result.push([...path]);
        // If remainingSum is negative or zero, no need to proceed further(backtrack)
        if (remainingSum <= 0) return;

        for (let i = start; i < arr.length; i++) {
            path.push(arr[i]);
            // Recur with updated remainingSum and same start index (i) to allow reuse of the same element
            backtrack(remainingSum - arr[i], path, i);
            path.pop();
        }
    };

    backtrack(target, [], 0);

    return result;
};

// Time Complexity: O(N^(T/M + 1))), where N is the number of candidates, T is the target value, 
// and M is the minimum value among the candidates.
// Space Complexity: O(T/M), the maximum depth of the recursion tree can go up to T/M, 
// where M is the minimum value among the candidates.

// Example usage:
console.log(combinationSum([2, 3, 6, 7], 7)); // Output: [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // Output: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // Output: []
console.log(combinationSum([1], 1)); // Output: [[1]]
console.log(combinationSum([1], 2)); // Output: [[1,1]]

// The above code defines a function `combinationSum` that finds all unique combinations of numbers
// from the given array that sum up to the target value using backtracking.
// It includes example usages and comments on time and space complexity.
// Notes:
// 1. The function uses a helper function `backtrack` to explore all possible combinations.
// 2. The `path` array keeps track of the current combination being explored.
// 3. The `start` index ensures that we do not consider elements before the current index,
//    allowing for the reuse of the same element in combinations.
// 4. The base case checks if the remaining sum is zero (valid combination) or negative (invalid path).
// 5. T/M is used to estimate the maximum depth of the recursion tree, where M is the smallest candidate value.