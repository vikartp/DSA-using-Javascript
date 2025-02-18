/**
 * Given an integer array nums, return the third distinct maximum number 
 * in this array. 
 * If the third maximum does not exist, return the maximum number.
 */

var thirdMax = function (nums) {
    // Approach 1: Using Set and Sorting
    const sortedNums = [... new Set(nums)].sort((a, b) => b - a); // Descending
    return sortedNums.length > 2 ? sortedNums[2] : sortedNums[0];

    // Approach 2: using Brute-force, without any Set and sorting
    // let firstMax = null;
    // let secondMax = null;
    // let thirdMax = null;

    // for (const n of nums) {
    //     if (n === firstMax || n === secondMax || n === thirdMax) continue;
    //     if (firstMax === null) {
    //         firstMax = n;
    //         continue;
    //     }
    //     if (n > firstMax) {
    //         thirdMax = secondMax;
    //         secondMax = firstMax;
    //         firstMax = n;
    //     } else if (secondMax === null) {
    //         secondMax = n;
    //     } else if (n > secondMax) {
    //         thirdMax = secondMax;
    //         secondMax = n;
    //     } else if (thirdMax === null || n > thirdMax) {
    //         thirdMax = n;
    //     }  
    // }

    // return thirdMax !== null ? thirdMax : firstMax;
};

console.log(thirdMax([3, 2, 1]));  // 1
console.log(thirdMax([1, 2]));     // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1, 2, 2, 5, 3])); // 2