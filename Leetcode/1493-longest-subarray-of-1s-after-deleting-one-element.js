/**
 * Given a binary array nums, you should delete one element from it.
 * Return the size of the longest non-empty subarray containing only
 * 1's in the resulting array.
 * Return 0 if there is no such subarray.
 */

function longestSubarray(nums) {
    let left = 0; // Start of the sliding window
    let maxLength = 0; // Store the length of the longest subarray
    let zeroCount = 0; // Count of zeroes in the current window

    for (let right = 0; right < nums.length; right++) {
        // If the current element is 0, increase the zero count
        if (nums[right] === 0) {
            zeroCount++;
        }

        // If there are more than one zero in the window, shrink the window
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // Update the maximum length, excluding one element
        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
}

// Example Usage
console.log(longestSubarray([1, 1, 0, 1])); // Output: 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // Output: 5
console.log(longestSubarray([1, 1, 1])); // Output: 2
console.log(longestSubarray([0, 0, 0])); // Output: 0
console.log(longestSubarray([1, 0, 1])); // Output: 2