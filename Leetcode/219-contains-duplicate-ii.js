/**
 * Given an integer array nums and an integer k, 
 * return true if there are two distinct indices i and j in the array 
 * such that nums[i] == nums[j] and abs(i - j) <= k.
 */

var containsNearbyDuplicate = function (nums, k) {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if (!hashMap.has(curr)) {
            hashMap.set(curr, i);
        } else {
            const prev = hashMap.get(curr);
            const diff = i - prev;
            if (diff <= k) return true;
            else {
                hashMap.set(curr, i);
            }
        }
    }
    return false;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// Test Cases
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false