// var findMedianSortedArrays = function(nums1, nums2) {
//     const mergedArray = [...nums1, ...nums2].sort((a,b) => a - b);
//     if (mergedArray.length % 2 !== 0) {
//         return mergedArray[Math.floor(mergedArray.length / 2)];
//     } else {
//         const half = mergedArray.length / 2;
//         return (mergedArray[half] + mergedArray[half - 1]) / 2;
//     }

// };

var findMedianSortedArrays = function (nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0, right = m;

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;

        const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
        const minRight1 = i === m ? Infinity : nums1[i];
        const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
        const minRight2 = j === n ? Infinity : nums2[j];

        // Check partition condition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            right = i - 1; // Move partition in nums1 to the left
        } else {
            left = i + 1; // Move partition in nums1 to the right
        }
    }

    throw new Error("Input arrays are not valid");
};

console.log(findMedianSortedArrays([1, 3], [2]));         // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4]));      // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0]));      // Output: 0
console.log(findMedianSortedArrays([], [1]));             // Output: 1
console.log(findMedianSortedArrays([2], []));             // Output: 2
console.log(findMedianSortedArrays([1, 3], [2, 7]));      // Output: 2.5