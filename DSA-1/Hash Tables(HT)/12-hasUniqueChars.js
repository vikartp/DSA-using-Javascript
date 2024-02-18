//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function checks if all the characters in a   |
//   |   given string are unique.                          |
//   |                                                     |
//   | Return type: Boolean                                |
//   | - Returns true if all characters are unique.        |
//   | - Returns false otherwise.                          |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use a Set to keep track of seen           |
//   |   characters.                                       |
//   | - If a character is already in the Set, you can     |
//   |   return false immediately.                         |
//   +=====================================================+

// Solution 1
function hasUniqueChars(char) {
    const uniqueCharSet = new Set(char);
    return char.length === uniqueCharSet.size;
}

// Solution 2
// function hasUniqueChars(string) {
//     const charSet = new Set();

//     for (const ch of string) {
//         if (charSet.has(ch)) {
//             return false;
//         }
//         charSet.add(ch);
//     }

//     return true;
// }


// ---------------
// Unique Chars
// ---------------
console.log("Unique Chars:");
console.log("Input: 'abc'");
console.log("Output: ", hasUniqueChars('abc'));
console.log("---------------");

// ---------------
// Duplicate Chars
// ---------------
console.log("Duplicate Chars:");
console.log("Input: 'aabb'");
console.log("Output: ", hasUniqueChars('aabb'));
console.log("---------------");

// ---------------
// Single Char
// ---------------
console.log("Single Char:");
console.log("Input: 'a'");
console.log("Output: ", hasUniqueChars('a'));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", hasUniqueChars(''));
console.log("---------------");

// ---------------
// Case Sensitivity
// ---------------
console.log("Case Sensitivity:");
console.log("Input: 'Aa'");
console.log("Output: ", hasUniqueChars('Aa'));
console.log("---------------");


