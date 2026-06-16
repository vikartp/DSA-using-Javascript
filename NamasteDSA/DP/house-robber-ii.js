// https://leetcode.com/problems/house-robber-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//     const n = nums.length;
//     if (n === 1) {
//         return nums[0];
//     }
//     if (n === 2) {
//         return Math.max(nums[0], nums[1]);
//     }

//     const rob = (first, last) => {
//         let p1 = nums[first];
//         let p2 = Math.max(nums[first], nums[first + 1]);

//         for (let i = first + 2; i <= last; i++) {
//             const curr = Math.max(nums[i] + p1, p2);
//             let temp = p2;
//             p2 = curr;
//             p1 = temp;
//         }

//         return p2;
//     }

//     return Math.max(rob(0, n - 2), rob(1, n - 1));
// };

var rob = function (val) {
    let n = val.length;
    if (n == 1) return val[0];
    var robHelper = function (start, end) {
        let p2 = 0, p1 = 0;
        for (let i = start; i <= end; i++) {
            const curr = Math.max(val[i] + p2, p1);
            let temp = p1;
            p1 = curr;
            p2 = temp;
        }
        return p1;
    };
    return Math.max(robHelper(0, n - 2), robHelper(1, n - 1));
};