/**
 * The problem 26. Remove Duplicates from Sorted Array requires removing duplicates 
 * from a sorted array in-place such that each element appears only once. 
 * The function should return the new length of the array,
 * and the elements up to that length should be unique.
 */

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let f = 1; // Pointer for the next unique position
    for (let s = 1; s < nums.length; s++) {
        if (nums[s] !== nums[s-1]) {
            nums[f] = nums[s]; // Place the unique element at position f
            f++; // Increment f
        }
    }
    return f; // f represents the number of unique elements
};

console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5
