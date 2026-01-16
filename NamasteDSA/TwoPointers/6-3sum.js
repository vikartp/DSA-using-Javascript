// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // Time Complexity: O(n^2)
    // Space Complexity: O(1); Can consider ans as O(n)
    // Solution Approach: Sort the nums array, Start looping, Pick index element and apply two sum on right side of picked index
    nums.sort((a, b) => a - b);
    const ans = [];

    for (let x = 0; x < nums.length; x++) {
        // Avoid iteration if previous element is same
        if (nums[x] !== nums[x - 1]) {
            twoSum(nums, x, ans);
        }
    }

    return ans;
};

function twoSum(arr, x, ans) {
    let i = x + 1;
    let j = arr.length - 1;

    while (i < j) {
        // Make sure we are getting sum for all three elements
        const sum = arr[i] + arr[j] + arr[x];
        if (sum === 0) {
            ans.push([arr[i], arr[j], arr[x]]);
            i++; j--;
            // Avoid duplicates
            while (i < j && arr[i] === arr[i - 1]) {
                i++;
            }
        } else if (sum < 0) {
            i++;
        } else {
            j--;
        }
    }
}