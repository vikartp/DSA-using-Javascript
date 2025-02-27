/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity -> O(mlogn)
// var longestConsecutive = function(nums) {
//     if (!nums.length) return 0;
//     const uniqSorted = [...new Set(nums)].sort((a,b) => a - b);
//     let max = 1;
//     let count = 1;
//     for (let i = 1; i < uniqSorted.length; i++) {
//         if (uniqSorted[i] === uniqSorted[i-1] + 1) {
//             count++;
//         } else {
//             max = Math.max(max, count);
//             count = 1;
//         }
//     }

//     return Math.max(max, count);
// };

// Time Complexity -> O(n)
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    // Create a set from the array to ensure unique elements and for O(1) lookups
    const numSet = new Set(nums);
    let longestStreak = 0;

    // Iterate through each number in the set
    for (let num of numSet) {
        // Only start counting from the number if it's the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Keep counting the consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update the longest streak
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // Output: 4 (The sequence is [1, 2, 3, 4])

