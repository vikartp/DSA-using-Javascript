// https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // Approach 1: Using selection sort algorithm
    // const n = nums.length;
    // for (let i = 0; i < n - 1; i++) {
    //     let min = i;
    //     for (let j = i + 1; j < n; j++) {
    //         if (nums[j] < nums[min]) {
    //             min = j;
    //         }
    //     }
    //     if (nums[min] !== nums[i]) {
    //         let temp = nums[i];
    //         nums[i] = nums[min];
    //         nums[min] = temp;
    //     }
    // }

    // Approach 2: Manipulate between 0, 1 and 2 count
    let zero = 0, one = 0, two = 0;
    for (const n of nums) {
        if (n === 0) zero++
        else if (n === 1) one++
        else two++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (zero > 0) {
            nums[i] = 0;
            zero--;
        } else if (one > 0) {
            nums[i] = 1;
            one--;
        } else {
            nums[i] = 2;
            two--;
        }
    }

};