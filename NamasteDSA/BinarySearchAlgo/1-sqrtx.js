// https://leetcode.com/problems/sqrtx/description/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;

    let l = 2;
    let r = Math.floor(x / 2);

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const sq = mid * mid;

        if (sq > x) {
            r = mid - 1;
        } else if (sq < x) {
            l = mid + 1;
        } else {
            return mid;
        }
    }

    return r;
};

// Time Complexity: O(logn)
// Space Complexity: O(1)