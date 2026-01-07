// https://leetcode.com/problems/find-peak-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const m = l + Math.floor((r-l) / 2);
        if (nums[m] < nums[m+1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return r;
};