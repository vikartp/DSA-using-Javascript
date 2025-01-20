/**
 * The problem 27. Remove Element involves removing all occurrences of a given value 
 * from an array in-place and returning the new length of the array. 
 * The order of elements can be changed, 
 * and the elements beyond the returned length are not important.
 */
var removeElement = function (nums, val) {
    let k = 0; // Pointer for the next position of a non-val element

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move the non-val element to the position k
            k++;               // Increment k for the next non-val element
        }
    }

    return k; // k represents the new length of the array
};


console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2

// Time complexity: O(n)
// Space complexity: O(1)