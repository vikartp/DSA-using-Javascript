/**
 * Given a binary array nums and an integer k, 
 * return the maximum number of consecutive 1's in the array if you can flip 
 * at most k 0's.
 */

function longestOnes(nums, k) {
    let left = 0;
    let right = 0;
    let max = 0;
    let zeroCount = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        max = Math.max(max, right - left + 1);
        right++;
    }

    return max;
}

console.log(longestOnes([1, 1, 0, 0, 1, 1, 1, 0, 1], 2)); // 7
console.log(longestOnes([1, 0, 1, 0, 1, 0, 1], 2)); // 5
console.log(longestOnes([0, 0, 0, 0, 0, 0, 0], 2)); // 2
console.log(longestOnes([1, 1, 1, 1, 1, 1, 1], 2)); // 7