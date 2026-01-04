// https://leetcode.com/problems/next-greater-element-i/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // Solution 1: Using Stack for maintaining next greater
    const ngeMap = {}; // Stores the nge for each element of num2
    const s = []; // Keeps nge state

    const n = nums2.length;
    ngeMap[nums2[n - 1]] = -1; // Last element would always have -1 as there is no element next to that
    s.push(nums2[n - 1]);

    for (let i = n - 2; i >= 0; i--) {
        while (s.length) {
            if (nums2[i] < s[s.length - 1]) {
                ngeMap[nums2[i]] = s[s.length - 1];
                break;
            } else {
                s.pop();
            }
        }
        if (!s.length) {
            ngeMap[nums2[i]] = -1;
        }
        s.push(nums2[i]);
    }

    return nums1.map(x => ngeMap[x])

    // Solution 2: Brute-Force Approach
    // let res = [];
    // for (const n of nums1) {
    //     const index = nums2.findIndex(no => no === n);
    //     if (index === -1) {
    //         res.push(-1);
    //     } else {
    //         let found = false;
    //         for (let i = index+1; i < nums2.length; i++) {
    //             if (nums2[i] > n) {
    //                 res.push(nums2[i]);
    //                 found = true;
    //                 break;
    //             }
    //         }
    //         if (!found) {
    //             res.push(-1);
    //         }
    //     }
    // }
    // return res;
};