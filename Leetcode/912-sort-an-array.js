/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length === 1) return nums;

    const mid = Math.floor((nums.length)/2);
    const leftSide = sortArray(nums.slice(0, mid));
    const rightSide = sortArray(nums.slice(mid));

    return merge(leftSide, rightSide);
};

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let res = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    return [...res, ...arr1.slice(i), ...arr2.slice(j)]
}

// Time Complexity: O(n log n)
// Space Complexity: O(n)
