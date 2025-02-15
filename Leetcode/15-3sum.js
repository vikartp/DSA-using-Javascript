/**
 * The problem 15. 3Sum requires finding all unique triplets in an array 
 * that sum up to zero. 
 * The solution must avoid duplicate triplets.
 */
var threeSum = function (nums) {
    let result = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first element

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the second and third elements
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Move left pointer to increase the sum
            } else {
                right--; // Move right pointer to decrease the sum
            }
        }
    }

    return result;
};

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 0, 0, 0]));
// Output: [[0, 0, 0]]

console.log(threeSum([]));
// Output: []



// var threeSum = function(nums) {
//     const resArr = [];
//     const hashMap = {};
//     for(let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             for (let k = 2; k < nums.length; k++) {
//                 if (i !== j && j !== k && i !== k) {
//                     const sum = nums[i] + nums[j] + nums[k];
//                     if (sum === 0) {
//                         const arr = [nums[i] , nums[j] , nums[k]];
//                         arr.sort((a,b) => a - b);
//                         const joinedStr = arr.join('');
//                         if (!hashMap[joinedStr]) {
//                             resArr.push(arr);
//                             hashMap[joinedStr] = true;
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     return resArr;
// };