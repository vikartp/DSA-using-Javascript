/**
 * Given a non-empty array of integers nums, 
 * every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity 
 * and use only constant extra space.
 */

function singleNumber(nums) {
    let result = 0;

    for (const num of nums) {
        result ^= num; // XOR each number with the result
    }

    return result;

    // Simple solution without using XOR
    // const countMap = {};
    // for (const n of nums) {
    //     countMap[n] = (countMap[n] || 0) + 1;
    // }
    // for (const key of Object.keys(countMap)) {
    //     if (countMap[key] === 1) return parseInt(key);
    // }
}

console.log(singleNumber([2, 2, 1]));         // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2]));   // Output: 4
console.log(singleNumber([1]));               // Output: 1
console.log(singleNumber([1, 1, 2, 2, 3]));   // Output: 3  