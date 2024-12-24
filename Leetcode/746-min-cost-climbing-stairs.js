/**
 * You are given an integer array cost where cost[i] is the cost of ith step 
 * on a staircase. 
 * Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0 or the step with index 1.
 * Return the minimum cost to reach the top of the floor.
 */

/**
 * Solution1: Optimized Space Complexity (Using Variables):
 * Time Complexity: O(n), where n is the number of steps
 * Space Complexity: O(1), using only two variables
 */
var minCostClimbingStairs = function (cost) {
    let prev2 = 0; // Cost to reach two steps below
    let prev1 = 0; // Cost to reach one step below

    for (let i = 2; i <= cost.length; i++) {
        const current = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};


/**
 * Solution2: Using Dynamic Programming (Tabulation):
 * Time Complexity: O(n), where n is the number of steps
 * Space Complexity: O(n), using an array of size n
 */

var minCostClimbingStairs = function (cost) {
    const n = cost.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[n];
};

console.log(minCostClimbingStairs([10, 15, 20])); // Output: 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // Output: 6
