/**
 * Given an integer array nums, return true if any value appears at 
 * least twice in the array, 
 * and return false if every element is distinct.
 */

// var containsDuplicate = function (nums) {
//     const hashMap = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (hashMap[nums[i]]) return true;
//         hashMap[nums[i]] = true;
//     }

//     return false;
// };

var containsDuplicate = function (nums) {
    let seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true; // Duplicate found
        }
        seen.add(num);
    }

    return false; // No duplicates found
};

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
console.log(containsDuplicate([1])); // Output: false