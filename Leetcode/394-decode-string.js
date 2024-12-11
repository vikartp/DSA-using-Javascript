/**
 * The problem 394. Decode String involves decoding a string with nested encoding 
 * patterns of the form k[encoded_string], where the encoded_string inside the 
 * square brackets is repeated k times.
 */

function decodeString(s) {
    const stack = []; // Stack to store strings and repeat counts
    let currentString = ""; // Tracks the current decoded string
    let currentNum = 0; // Tracks the current number (multiplier)

    for (const char of s) {
        if (!isNaN(char)) {
            // If the character is a digit, build the multiplier
            currentNum = currentNum * 10 + parseInt(char, 10);
        } else if (char === "[") {
            // Push the current string and multiplier onto the stack
            stack.push(currentString);
            stack.push(currentNum);
            currentString = ""; // Reset current string
            currentNum = 0; // Reset multiplier
        } else if (char === "]") {
            // Pop the multiplier and previous string from the stack
            const num = stack.pop();
            const prevString = stack.pop();
            // Decode the current substring and append it to the previous string
            currentString = prevString + currentString.repeat(num);
        } else {
            // Append the character to the current string
            currentString += char;
        }
    }

    return currentString;
}

console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]"));  // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"
