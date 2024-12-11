/**
 * You are given a string s, which contains stars *.
 * In one operation, you can:
 * - Choose a star in s.
 * - Remove the closest non-star character to its left, 
 *   as well as remove the star itself.
 * Return the string after all stars have been removed.
 */

// Approach: Using a Stack
// Time Complexity: O(n)
// Space Complexity: O(n)
function removeStars(s) {
    const stack = [];

    for (const char of s) {
        if (char === "*") {
            stack.pop(); // Remove the most recent character
        } else {
            stack.push(char); // Add the current character
        }
    }

    return stack.join(""); // Convert the stack to a string
}

console.log(removeStars("leet**cod*e")); // Output: "lecoe"
console.log(removeStars("erase*****")); // Output: ""
