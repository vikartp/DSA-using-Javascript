/**
 * The problem 88. Merge Sorted Array involves merging two sorted arrays, 
 * nums1 and nums2, into one sorted array in-place. The first array, nums1, 
 * has enough space to hold all the elements of both arrays.
 */

var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1; // Pointer for the last element in nums1's valid part
    let p2 = n - 1; // Pointer for the last element in nums2
    let p = m + n - 1; // Pointer for the last position in nums1

    // Compare and merge from the back
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If any elements remain in nums2, copy them
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};


let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

let nums1b = [1];
let nums2b = [];
merge(nums1b, 1, nums2b, 0);
console.log(nums1b); // Output: [1]

let nums1c = [0];
let nums2c = [1];
merge(nums1c, 0, nums2c, 1);
console.log(nums1c); // Output: [1]
