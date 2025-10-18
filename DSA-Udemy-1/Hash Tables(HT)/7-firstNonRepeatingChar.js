//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the first non-repeating       |
//   |   character in a string.                            |
//   |                                                     |
//   | Return type: string/null                            |
//   | - Returns the first non-repeating character if      |
//   |   found, otherwise returns null.                    |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to count    |
//   |   the occurrences of each character.                |
//   | - Example with Map:                                 |
//   |   charCounts.set(c, (charCounts.get(c) || 0) + 1);  |
//   | - Example with object:                              |
//   |   charCounts[c] = (charCounts[c] || 0) + 1;         |
//   +=====================================================+

/**
 * The goal is to find and return the first character in the string 
 * that does not repeat. If every character in the string repeats,
 *  or if the string is empty, the function should return null
 */
// Using Object
function firstNonRepeatingChar(char) {
    const charCounts = {};

    for (const c of char) {
        charCounts[c] = (charCounts[c] || 0) + 1;
    }

    for (let key in charCounts) {
        if (charCounts[key] === 1) return key;
    }
    return null;
}

// Using Map
// function firstNonRepeatingChar(string) {
//     const charCounts = new Map();

//     for (let i = 0; i < string.length; i++) {
//         const c = string.charAt(i);
//         charCounts.set(c, (charCounts.get(c) || 0) + 1);
//     }

//     for (let i = 0; i < string.length; i++) {
//         const c = string.charAt(i);
//         if (charCounts.get(c) === 1) {
//             return c;
//         }
//     }

//     return null;
// }


// ---------------
// All Unique
// ---------------
console.log("All Unique:");
console.log("Input: 'abcde'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcde')));
console.log("---------------");

// ---------------
// Some Duplicates
// ---------------
console.log("Some Duplicates:");
console.log("Input: 'aabbccdef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbccdef')));
console.log("---------------");

// ---------------
// All Duplicates
// ---------------
console.log("All Duplicates:");
console.log("Input: 'aabbcc'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbcc')));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('')));
console.log("---------------");

// ---------------
// Single Character
// ---------------
console.log("Single Character:");
console.log("Input: 'a'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('a')));
console.log("---------------");

// ---------------
// Multiple Non-Repeating Chars
// ---------------
console.log("Multiple Non-Repeating Chars:");
console.log("Input: 'abcdaef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcdaef')));
console.log("---------------");


