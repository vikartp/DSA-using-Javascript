// https://leetcode.com/problems/trapping-rain-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    // Calculate left max array
    const maxL = [];
    maxL[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        maxL[i] = Math.max(height[i], maxL[i-1]);
    }
    // Calculate right max array
    const maxR = [];
    maxR[n-1] = height[n-1];
    for (let i = n - 2; i >= 0; i--) {
        maxR[i] = Math.max(height[i], maxR[i+1])
    }
    // Calculate trapped height, can never be negative
    let ans = 0;
    for (let i =0; i < height.length; i++) {
        const trappedHeight = Math.min(maxL[i], maxR[i]) - height[i];
        ans += Math.max(trappedHeight, 0)
    }
    return ans;
};

// Time: O(N)

// Space: O(N)