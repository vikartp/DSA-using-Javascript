/**
 * Write a function that reverses a string. 
 * The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example 1 => Input: s = ["h","e","l","l","o"] -> Output: ["o","l","l","e","h"]
 * Example 2 => Input: s = ["H","a","n","n","a","h"] -> Output: ["h","a","n","n","a","H"]
 */
var reverseString = function(s) {

    // Solution 1: Two Pointers Approach
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        // Swap characters
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }

    // Solution 2: Using built-in functions (uncomment to use)
    // s.reverse();

    // Solution 3: half loop
    // for (let i = 0; i < Math.floor(s.length / 2); i++) {
    //     let temp = s[i];
    //     s[i] = s[s.length - 1 - i];
    //     s[s.length - 1 - i] = temp;
    // }
    return s;
};

// Time Complexity: O(n) - We traverse half of the array.
// Space Complexity: O(1) - We use constant extra space.