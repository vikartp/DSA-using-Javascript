// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        const sum = arr[i] + arr[j];
        if (sum === target) {
            return [i+1, j+1]; //  Adding one to comply with 1-indexed
        } else if (sum > target) {
            --j;
        } else {
            ++i;
        }
    }
};