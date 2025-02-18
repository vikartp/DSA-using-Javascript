/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], 
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 */

var findDisappearedNumbers = function (nums) {
    // const resultArray = [];
    // const numMap = {};

    // for (const n of nums) {
    //     numMap[n] = true;
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     if (!numMap[i+1]) resultArray.push(i+1);
    // }

    // return resultArray;

    const result = [];

    // Step 1: Mark the visited numbers
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;  // Convert number to index (0-based)
        if (nums[index] > 0) {
            nums[index] = -nums[index];  // Negate the number at the index
        }
    }

    // Step 2: Find the missing numbers
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);  // If the value is positive, the number (i+1) is missing
        }
    }

    return result;
};


console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));  // [5, 6]