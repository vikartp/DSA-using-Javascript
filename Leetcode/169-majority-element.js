/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 */

var majorityElement = function(nums) {
    const hashMap = {};
    const majorityLen = nums.length / 2;

    for (const n of nums) {
        hashMap[n] = (hashMap[n] || 0) + 1;
        if (hashMap[n] > majorityLen) return n;
    }
};

// Time complexity: O(n)
// Space complexity: O(n)

// Test cases
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([1])); // 1