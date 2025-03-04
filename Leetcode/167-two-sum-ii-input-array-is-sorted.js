/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // Approach 1: Using Hash Map
    // const hashMap = {};
    // for (let i = 0; i < numbers.length; i++) {
    //     const curr = numbers[i];
    //     const diff = target - curr;
    //     if (hashMap[diff] !== undefined) {
    //         return [++hashMap[diff], ++i];
    //     } else {
    //         hashMap[curr] = i;
    //     }
    // }

    // Approach 2: Using two pointer(since it is sorted)
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [left + 1, right + 1]; // 1-based index
        }
    }

    return []; // No valid solution found
};

// Example Usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1,2]