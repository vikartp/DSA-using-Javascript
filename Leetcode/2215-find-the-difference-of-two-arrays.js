/**
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
 */

function findDifference(nums1, nums2) {
    // Convert the arrays into Sets for faster lookups
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Find distinct integers in nums1 not present in nums2
    const diff1 = [...set1].filter(num => !set2.has(num));

    // Find distinct integers in nums2 not present in nums1
    const diff2 = [...set2].filter(num => !set1.has(num));

    // Return the result as an array of two lists
    return [diff1, diff2];
}

// Example usage:
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const result = findDifference(nums1, nums2);
console.log(result); // Output: [[1, 3], [4, 6]]
