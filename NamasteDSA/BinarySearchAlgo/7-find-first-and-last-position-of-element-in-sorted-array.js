/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // Solution 1: Find target with simple approach and then get left and right count 
    // let l = 0;
    // let r = nums.length - 1;
    // while (l <= r) {
    //     const m = l + Math.floor((r - l) / 2);

    //     if (nums[m] === target) {
    //         let leftCount = 0;
    //         while (nums[m - leftCount - 1] === target) {
    //             leftCount++;
    //         }
    //         let rightCount = 0;
    //         while (nums[m + rightCount + 1] === target) {
    //             rightCount++;
    //         }

    //         return [m - leftCount, m + rightCount];
    //     }

    //     if (target > nums[m]) {
    //         l = m + 1;
    //     } else {
    //         r = m - 1;
    //     }
    // }
    // return [-1, -1];

    // Solution 2: Find left and right index separately in two search iteration
    // Find left index
    // let l = 0;
    // let r = nums.length - 1;
    // const ans = [-1, -1];
    // while (l < r) {
    //     const m = l + Math.floor((r - l) / 2);
    //     if (target > nums[m]) {
    //         l = m + 1;
    //     } else {
    //         r = m;
    //     }
    // }
    // if (target === nums[l]) ans[0] = l;
    // // Find right index
    // l = 0;
    // r = nums.length - 1;
    // while (l < r) {
    //     const m = l + Math.ceil((r - l) / 2); // Note: using ceil to avoid infinite loop
    //     if (target < nums[m]) {
    //         r = m - 1;
    //     } else {
    //         l = m;
    //     }
    // }
    // if (target === nums[l]) ans[1] = l;

    // return ans;

    // Solution 3: Find the target and keep going with the loop- once left and once write
    const ans = [-1, -1];

    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) {
            ans[0] = m;
            r = m - 1; // We are finding left side index, so we move 'r' towards left
        } else if (target > nums[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    l = 0;
    r = nums.length - 1;
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) {
            ans[1] = m;
            l = m + 1; // We are now finding right side index, so we move 'l' towards right
        } else if (target > nums[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return ans;
};