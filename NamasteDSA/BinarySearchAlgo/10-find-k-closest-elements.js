// https://leetcode.com/problems/find-k-closest-elements/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        const m = l + Math.floor((r - l) / 2);
        // If (m+k)th element has lesser difference to x(means that is closer than mth element), 
        // We move left pointer to next of m, else right pointer to m
        if ((arr[m + k] - x) < (x - arr[m])) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return arr.slice(l, l + k);
};