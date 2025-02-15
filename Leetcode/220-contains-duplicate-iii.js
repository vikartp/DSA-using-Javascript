// Bucket Sort (Optimized O(n))
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    const k = indexDiff;
    const t = valueDiff;
    if (t < 0) return false;

    let bucket = new Map();
    let bucketSize = t + 1; // Bucket size to group numbers

    for (let i = 0; i < nums.length; i++) {
        let key = Math.floor(nums[i] / bucketSize);

        // Check the current bucket
        if (bucket.has(key)) return true;

        // Check the previous bucket
        if (bucket.has(key - 1) && Math.abs(nums[i] - bucket.get(key - 1)) <= t) {
            return true;
        }

        // Check the next bucket
        if (bucket.has(key + 1) && Math.abs(nums[i] - bucket.get(key + 1)) <= t) {
            return true;
        }

        // Insert the current number in its bucket
        bucket.set(key, nums[i]);

        // Maintain window size k
        if (i >= k) {
            bucket.delete(Math.floor(nums[i - k] / bucketSize));
        }
    }

    return false;
};

// Time Complexity: O(n)
// Space Complexity: O(k)

// Test Cases
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)); // true
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)); // true

