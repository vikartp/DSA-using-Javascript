/**
 * Longest Substring Without Repeating Characters requires 
 * finding the length of the longest 
 * substring of a given string that contains no repeating characters.
 * The best approach to solve this problem is using the Sliding Window Technique 
 * with a Hash Map (or Set). This allows us to efficiently track characters 
 * and their positions to ensure no repeats in the substring.
 */
var lengthOfLongestSubstring = function (s) {
    const map = new Map(); // Store the last seen index of each character
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If the character is already in the map and its index is within the current window
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1; // Move the left pointer to the right of the last occurrence
        }

        map.set(char, right); // Update the character's last seen index
        maxLength = Math.max(maxLength, right - left + 1); // Update the maximum length
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // Output: 0
console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3 ("vdf")
