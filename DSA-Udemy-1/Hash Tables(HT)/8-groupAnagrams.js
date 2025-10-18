//   +=====================================================+
//   |                 WRITE YOUR CODE HERE                |
//   | Description:                                        |
//   | - This function groups anagrams from an array       |
//   |   of strings.                                       |
//   |                                                     |
//   | Return type: array                                  |
//   | - Returns an array of arrays where each array       |
//   |   contains anagrams.                                |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to manage   |
//   |   the groups of anagrams.                           |
//   | - Example with Map:                                 |
//   |   anagramGroups.set(canonical, group);              |
//   | - Example with object:                              |
//   |   anagramGroups[canonical] = group;                 |
//   +=====================================================+

// Using Object and inner split-sort-join function
// function groupAnagrams(array) {
//     const anagramGroups = {};
//     const getSortedStr = (str) => str.split('').sort().join('');
//     for(const word of array) {
//         const sorted = getSortedStr(word);
//         if (anagramGroups[sorted]) {
//             anagramGroups[sorted].push(word);
//         } else {
//             anagramGroups[sorted] = [word];
//         }
//     }

//     // const resultArray = [];
//     // for(let key in anagramGroups) {
//     //     resultArray.push(anagramGroups[key])
//     // }
//     // return resultArray;

//     return Object.values(anagramGroups)
// }

// Using Object and Array.from
// function groupAnagrams(strings) {
//     const anagramGroups = {};

//     for (const string of strings) {
//         const chars = Array.from(string);
//         chars.sort();
//         const canonical = chars.join('');

//         if (anagramGroups.hasOwnProperty(canonical)) {
//             anagramGroups[canonical].push(string);
//         } else {
//             anagramGroups[canonical] = [string];
//         }
//     }

//     return Object.values(anagramGroups);
// }

// Using Map
function groupAnagrams(strings) {
    const anagramGroups = new Map();

    for (const string of strings) {
        const chars = Array.from(string);
        chars.sort();
        const canonical = chars.join('');

        if (anagramGroups.has(canonical)) {
            anagramGroups.get(canonical).push(string);
        } else {
            const group = [string];
            anagramGroups.set(canonical, group);
        }
    }

    return Array.from(anagramGroups.values());
}






// ---------------
// Lowercase Anagrams
// ---------------
console.log("Lowercase Anagrams:");
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])));
console.log("---------------");

// ---------------
// Mixed Case Anagrams
// ---------------
console.log("Mixed Case Anagrams:");
console.log("Input: ['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat'])));
console.log("---------------");

// ---------------
// No Anagrams
// ---------------
console.log("No Anagrams:");
console.log("Input: ['hello', 'world', 'test']");
console.log("Output: ", JSON.stringify(groupAnagrams(['hello', 'world', 'test'])));
console.log("---------------");

// ---------------
// Empty Strings
// ---------------
console.log("Empty Strings:");
console.log("Input: ['', '', '']");
console.log("Output: ", JSON.stringify(groupAnagrams(['', '', ''])));
console.log("---------------");

// ---------------
// Single Characters
// ---------------
console.log("Single Characters:");
console.log("Input: ['a', 'b', 'a']");
console.log("Output: ", JSON.stringify(groupAnagrams(['a', 'b', 'a'])));
console.log("---------------");



