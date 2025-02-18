/**
 * Given a binary array nums, 
 * return the maximum number of consecutive 1's in the array.
 */

var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let temp = 0;
    for (const n of nums) {
        if (n === 1) {
            temp++;
        } else {
            maxCount = Math.max(maxCount, temp);
            temp = 0;
        }
    }
    return Math.max(maxCount, temp);
};