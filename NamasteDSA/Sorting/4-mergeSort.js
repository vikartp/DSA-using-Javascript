/**
 * Merge Sort Algorithm
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
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

// Example Usage
console.log(sortArray([5, 2, 3, 1])); // Output: [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // Output: [0, 0, 1, 1, 2, 5]

// Time Complexity: O(n log n)
// Space Complexity: O(n)
