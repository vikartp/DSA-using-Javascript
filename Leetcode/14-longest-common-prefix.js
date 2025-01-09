/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

// function longestCommonPrefix(strs) {
//     if (strs.length === 0) return '';
//     let prefix = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.substring(0, prefix.length - 1);
//             if (prefix === '') return '';
//         }
//     }
//     return prefix;
// }

// var longestCommonPrefix = function (strs) {
//     const minLength = Math.min(...strs.map(s => s.length));
//     let commonPrefix = "";
//     let index = 0;
//     while (true) {
//         let tempLetter = "";
//         for (let name of strs) {
//             if (!name) return commonPrefix;
//             if (!tempLetter) {
//                 tempLetter = name[index]
//             } else {
//                 if (tempLetter === name[index]) continue;
//                 else return commonPrefix;
//             }
//         }

//         commonPrefix += tempLetter;
//         index++;
//         if (index === minLength) return commonPrefix;
//     }
// };

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    strs.sort(); // Sort the strings

    const first = strs[0];
    const last = strs[strs.length - 1];

    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["ab", "a"])); // Output: "a"
console.log(longestCommonPrefix(["a", "a", "b"])); // Output: ""
console.log(longestCommonPrefix(["a", "b"])); // Output: ""
console.log(longestCommonPrefix(["a", "a"])); // Output: "a"
console.log(longestCommonPrefix(["a"])); // Output: "a"
console.log(longestCommonPrefix([""])); // Output: ""
console.log(longestCommonPrefix([])); // Output: ""
console.log(longestCommonPrefix(["flower", "flower", "flower"])); // Output: "flower"
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"])); // Output: "flower"