/**
 * Given an integer array nums, 
 * rotate the array to the right by k steps, where k is non-negative.
 */

var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n; // Handle cases where k > n

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    // Step 1: Reverse the whole array
    reverse(0, n - 1);
    // Step 2: Reverse the first k elements
    reverse(0, k - 1);
    // Step 3: Reverse the remaining elements
    reverse(k, n - 1);
};


let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]

let nums2 = [-1, -100, 3, 99];
rotate(nums2, 2);
console.log(nums2); // Output: [3, 99, -1, -100]
