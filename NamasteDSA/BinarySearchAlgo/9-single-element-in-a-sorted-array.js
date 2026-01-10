// https://leetcode.com/problems/single-element-in-a-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const m = l + Math.floor((r - l) / 2);

        // If mid is having pair with right side of mid
        if (nums[m] === nums[m + 1]) {
            // If even count of elements are available right of mid
            if ((r - m) % 2 === 0) {
                l = m + 2; // Moving 2 position because we are certain that single elem is on right side of mid and also it's beyonf the mid pair
            } else {
                r = m - 1; // Moving r before m, because m is having pair with right of mid
            }
        } else {
            // If mid is not having pair with right side of mid then mid could have pair in left or mid can be single
            // In this case, if right side count is even number then certainly we don't have single elem in the right side so we move r to m
            if ((r - m) % 2 === 0) {
                r = m;
            } else {
                l = m + 1;
            }
        }
    }
    return nums[l]
};