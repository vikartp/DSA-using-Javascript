/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        // If looking range is already sorted
        if (nums[l] <= nums[r]) {
            return nums[l];
        }

        const m = l + Math.floor((r - l) / 2);
        // Base condition: if current mid element is less than previous one, that's the minimum one
        if (nums[m] < nums[m - 1]) {
            return nums[m];
        }
        // If middle is greater than last, it means we have minimum after mid
        if (nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
};