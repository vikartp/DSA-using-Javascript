/**
 * Given an integer array nums, return true if there exists 
 * a triple of indices (i, j, k) such that i < j < k and 
 * nums[i] < nums[j] < nums[k].
 * If no such indices exists, return false.
 */

function increasingTriplet(nums) { 
    let first = Infinity;
    let second = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= first) {
            first = nums[i];
        } else if (nums[i] <= second) {
            second = nums[i];
        } else {
            return true;
        }
    }
    return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true
console.log(increasingTriplet([1, 2, 1, 2, 1, 2])); // false
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // true
