// https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    // If only one house is there
    if (n == 1) {
        return nums[0];
    }
    // Base case, dp[i] represents maximum robbery till ith index
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    for(let i = 2; i < n; i++) {
        dp[i] = Math.max(
            nums[i] + dp[i-2],
            dp[i-1]
        )
    }

    return dp[n-1]
};

/**
* The above solution has Time complexity- O(n), Space- O(n)
 */

var rob = function (nums) {
    const n = nums.length;
    // If only one house is there
    if (n == 1) {
        return nums[0];
    }
    // since we only need last two values of dp, we can optimize space by using two variables
    let p1 = nums[0];
    let p2 = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        const curr = Math.max(nums[i] + p1, p2)
        let temp = p2;
        p2 = curr;
        p1 = temp;
    }

    return p2;
};

/**
* The above solution has Time complexity- O(n), Space- O(1)
 */