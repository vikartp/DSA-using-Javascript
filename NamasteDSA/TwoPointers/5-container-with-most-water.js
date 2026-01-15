// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        const area = (j - i) * Math.min(height[i], height[j]);
        max = Math.max(area, max);
        height[i] <= height[j] ? i++ : j--;
    }
    return max;
};
// Two Pointer Approach:
// Time Complexity: O(n)
// Space Complexity: O(1)

// Brute-Force => O(n^2)