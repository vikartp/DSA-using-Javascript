/**
 * Given two integer arrays nums1 and nums2, 
 * return an array of their intersection. 
 * Each element in the result must be unique 
 * and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Approach 1: Time Complexity -> O(n*m), Space Complexity -> O(n+m)
    // const res = new Set();
    // for (const num of nums1) {
    //     if (nums2.indexOf(num) !== -1) {
    //         res.add(num);
    //     }
    // }
    // return Array.from(res);

    // Approach 2: Converting one array as Set for O(1) search lookup
    // Time Complexity => O(n+m)
    // Space Complexity => O(n + min(n, m)), which simplifies to O(n) in the worst case.
    const set1 = new Set(nums1);
    const result = new Set();

    for(const n of nums2) {
        if (set1.has(n)) {
            result.add(n);
        }
    }
    return Array.from(result);
};

console.log(intersection([1,2,2,1], [2,2])); // Output: [2]
console.log(intersection([4,9,5], [9,4,9,8,4])); // Output: [9,4]
console.log(intersection([1,2,3,4,5], [6,7,8,9,10])); // Output: []
console.log(intersection([1,2,3,4,5], [5,4,3,2,1])); // Output: [1,2,3,4,5]