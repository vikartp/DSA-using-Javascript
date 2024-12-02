/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average 
 * value and return this value. 
 * Any answer with a calculation error less than 10-5 will be accepted.
 */

function findMaxAverage(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let max = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }
    return max / k;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
console.log(findMaxAverage([5, 6], 1)); // 6
console.log(findMaxAverage([5, 6], 2)); // 5.5
console.log(findMaxAverage([5, 6, 7], 2)); // 6.5
console.log(findMaxAverage([5, 6, 7, 8], 2)); // 7.5