/**
 * Given an array of characters chars, compress it using the following algorithm:
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 * If the group's length is 1, append the character to s.
 * Otherwise, append the character followed by the group's length.
 * The compressed string s should not be returned separately, but instead,
 * be stored in the input character array chars. Note that group lengths that are 10 
 * or longer will be split into multiple characters in chars.
 * After you are done modifying the input array, return the new length of the array.
 * You must write an algorithm that uses only constant extra space.
 */

function compress(chars) {
    let i = 0;
    let j = 0;
    while (i < chars.length) {
        let count = 0;
        let currentChar = chars[i];
        while (i < chars.length && chars[i] === currentChar) {
            i++;
            count++;
        }
        chars[j++] = currentChar;
        if (count > 1) {
            for (let c of count.toString()) {
                chars[j++] = c;
            }
        }
    }
    return j;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

// Test cases
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a"])); // 1
console.log(compress()); // 0
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])); // 4