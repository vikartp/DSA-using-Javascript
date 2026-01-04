// https://leetcode.com/problems/next-greater-element-ii/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    /**
     * Hint: Whenever we need to iterate on a circular basis, We can simply double the list
     * For Both Solution => Time Complexity: O(n), Space Complexity: O(n)
     */
    
    // Solution 1: Use array of doubled list
    // const arr = [...nums, ...nums];
    // const n = arr.length;
    // const ans = new Array(n).fill(-1);

    // const s = [];
    // s.push(arr[n - 1]);

    // for (let i = n - 2; i >= 0; i--) {
    //     while (s.length) {
    //         const top = s[s.length - 1];
    //         if (arr[i] < top) {
    //             ans[i] = top;
    //             break;
    //         } else {
    //             s.pop();
    //         }
    //     }
    //     s.push(arr[i]);
    // }

    // return ans.slice(0, n / 2);

    // Solution 2: Use virtual doubled array, meaning we would just iterate on 2x length and take mod(%) on indexes
    const n = nums.length;
    const ans = new Array(n).fill(-1);

    const s = [];
    s.push(nums[n - 1]);

    for (let i = 2 * n - 2; i >= 0; i--) {
        while (s.length) {
            const top = s[s.length - 1];
            if (nums[i % n] < top) {
                ans[i % n] = top;
                break;
            } else {
                s.pop();
            }
        }
        s.push(nums[i % n]);
    }

    return ans.slice(0, n);
};