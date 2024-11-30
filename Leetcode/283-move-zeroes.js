/**
 * Given an integer array nums, move all 0's to the end of it 
 * while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */

// Time complexity: O(n)
// Space complexity: O(1)
function moveZeroes(nums) {
    let i = 0;
    let j = 0;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            const temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
        }
        i++;
    }
    return nums;

    // Alternate solution
    // let i = 0;
    // let j = 0;

    // while (i < nums.length - 1) {
    //     if (nums[i] === 0) {
    //         while (nums[i] === 0 && i < nums.length - 1) {
    //             i++;
    //         }
    //         nums[j++] = nums[i];
    //         nums[i] = 0;
    //     } else {
    //         i++;
    //         j++;
    //     }
    // }

    // return nums;
}

// Test cases
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([1])); // [1]
console.log(moveZeroes([0, 0, 0, 0])); // [0, 0, 0, 0]
console.log(moveZeroes([1, 2, 3, 4])); // [1, 2, 3, 4]
console.log(moveZeroes([1, 0, 1])); // [1, 1, 0]    
console.log(moveZeroes([1, 0, 0, 1])); // [1, 1, 0, 0]