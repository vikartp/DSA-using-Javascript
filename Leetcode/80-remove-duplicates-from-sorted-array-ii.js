/**
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let f = 1;  // Fast pointer to place next valid element
    let temp = 1; // Counter for occurrences

    for (let s = 1; s < nums.length; s++) {
        if (nums[s] === nums[s - 1]) {
            temp++;
        } else {
            temp = 1;
        }

        if (temp <= 2) {  // Allow up to 2 occurrences
            nums[f] = nums[s];
            f++;
        }
    }
    return f;
    // if (nums.length === 0) return 0;
    // let f = 1;
    // let temp = 1;
    // for (let s = 1; s < nums.length; s++) {
    //     if (nums[s] === nums[s - 1]) {
    //         if (temp < 2) {
    //             nums[f] = nums[s];
    //             f++;
    //         }
    //         temp++;
    //     } else {
    //         nums[f] = nums[s]
    //         temp = 1;
    //         f++;
    //     }
    // }
    // return f;
};

// time complexity is O(n)
// time complexity is O(n)
console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7
console.log(removeDuplicates([1, 2, 3])); // 3