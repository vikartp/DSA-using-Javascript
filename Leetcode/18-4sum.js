var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b); // Sort the array
    const n = nums.length;
    const result = [];

    for (let i = 0; i < n - 3; i++) {
        // Skip duplicates for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicates for the second number
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Skip duplicates for the third number
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicates for the fourth number
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++; // Move left pointer to increase the sum
                } else {
                    right--; // Move right pointer to decrease the sum
                }
            }
        }
    }

    return result;
};

// Test cases
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target));
// Result:
// [
//     [-2, -1, 1, 2],
//     [-2, 0, 0, 2],
//     [-1, 0, 0, 1]
// ]