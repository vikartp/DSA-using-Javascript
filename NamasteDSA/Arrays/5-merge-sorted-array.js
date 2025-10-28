/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // let p1 = m - 1; // Pointer for the last element in nums1's valid part
    // let p2 = n - 1; // Pointer for the last element in nums2
    // let p = m + n - 1; // Pointer for the last position in nums1

    // // Compare and merge from the back
    // while (p1 >= 0 && p2 >= 0) {
    //     if (nums1[p1] > nums2[p2]) {
    //         nums1[p] = nums1[p1];
    //         p1--;
    //     } else {
    //         nums1[p] = nums2[p2];
    //         p2--;
    //     }
    //     p--;
    // }

    // // If any elements remain in nums2, copy them
    // while (p2 >= 0) {
    //     nums1[p] = nums2[p2];
    //     p2--;
    //     p--;
    // }

    // Another approach:
    // const n1Copy = nums1.slice(0, m);
    // let p1 = 0;
    // let p2 = 0;
    // for (let i = 0; i < m + n; i++) {
    //     if (n1Copy[p1] <= nums2[p2] || nums2[p2] === undefined) {
    //         nums1[i] = n1Copy[p1];
    //         p1++;
    //     } else {
    //         nums1[i] = nums2[p2];
    //         p2++
    //     }
    // }

    // Another solution:
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) break;

        if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
};
// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1,2,2,3,5,6]


// Time Complexity: O(m + n)
// Space Complexity: O(1)