/**
 *  You are given two strings word1 and word2. 
 *  Merge the strings by adding letters in alternating order,
 *  starting with word1. If a string is longer than the other,
 *  append the additional letters onto the end of the merged string.
 *  Return the merged string.
 */

// Using while loop
function mergeAlternately(word1, word2) {
    let result = '';
    let i = 0;
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            result += word1[i];
        }
        if (i < word2.length) {
            result += word2[i];
        }
        i++;
    }
    return result;

    // More Simplified
    //   let merged = '';
    //     let i = 0; // 1st pointer for word1
    //     let j = 0; // 2nd pointer for word2

    //     while (i < word1.length && j < word2.length) {
    //         merged += word1.charAt(i);
    //         merged += word2.charAt(j);
    //         i++;
    //         j++;
    //     }

    //     while (i < word1.length) {
    //         merged += word1.charAt(i);
    //         i++;
    //     }

    //     while (j < word2.length) {
    //         merged += word2.charAt(j);
    //         j++;
    //     }

    //     return merged;
}

// Using for loop
function mergeStrings(word1, word2) {
    let merged = '';
    const maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            merged += word1[i];
        }
        if (i < word2.length) {
            merged += word2[i];
        }
    }

    return merged;
}

// Example Usage
const word1 = "abc";
const word2 = "defghi";
const result = mergeStrings(word1, word2);
console.log(result); // Output: "adbecfghi"

