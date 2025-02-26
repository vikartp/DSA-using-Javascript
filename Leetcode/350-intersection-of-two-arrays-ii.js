/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays 
 * and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // Approach 1: HashMap (Frequency Count) – O(n + m) Time, O(n) Space
    // let map1 = new Map();
    // let result = [];

    // // Count occurrences in nums1
    // for (let num of nums1) {
    //     map1.set(num, (map1.get(num) || 0) + 1);
    // }

    // // Check against nums2
    // for (let num of nums2) {
    //     if (map1.has(num) && map1.get(num) > 0) {
    //         result.push(num);
    //         map1.set(num, map1.get(num) - 1);
    //     }
    // }

    // return result;

    // Approach 2: Two Pointers (Optimized for Sorted Arrays) – O(n log n + m log m)
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0, j = 0;
    let result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};

console.log(intersect([1,2,2,1], [2,2])); // Output: [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // Output: [9,4]