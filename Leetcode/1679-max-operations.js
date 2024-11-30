/**
 * You are given an integer array nums and an integer k.
 * In one operation, you can pick two numbers from the array
 * whose sum equals k and remove them from the array.
 * 
 * Return the maximum number of operations you can perform on the array.
 */

// Time complexity: O(n)
// Space complexity: O(n)

function maxOperations(nums, k) {
    const map = {};
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const diff = k - nums[i];
        if (map[diff] > 0) {
            count++;
            map[diff]--;
        } else {
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }
    }
    return count;
}

// Using the alternate solution
function maxOperationsAS(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let count = 0;
    while (left < right) {
        if (nums[left] + nums[right] === k) {
            count++;
            left++;
            right--;
        } else if (nums[left] + nums[right] < k) {
            left++;
        } else {
            right--;
        }
    }
    return count;
}

// Test cases
console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
