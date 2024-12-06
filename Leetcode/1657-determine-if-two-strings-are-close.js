/**
 * Two strings are considered close if you can attain one from the other using the 
 * following operations:
 * Operation 1: Swap any two existing characters.
 * For example, abcde -> aecdb
 * Operation 2: Transform every occurrence of one existing character into another 
 * existing character, and do the same with the other character.
 * For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
 * You can use the operations on either string as many times as necessary.
 * Given two strings, word1 and word2, return true if word1 and word2 are close, 
 * and false otherwise.
 */

// Hint: To determine if two strings are "close," we need to satisfy two main conditions:

// Same unique characters: Both strings must contain the same set of unique characters.
// For example, "abc" and "bca" share the same unique characters, but "abc" and "abd" do not.

// Same frequency distribution: The frequency of characters (not specific characters, but the counts) must match.
// For example, "aabbcc" and "ccbbaa" have the same frequency distribution {a: 2, b: 2, c: 2}, but "aabbcc" and "aabbcd" do not.


function closeStrings(word1, word2) {
    // If the lengths of the strings are different, they cannot be close
    if (word1.length !== word2.length) return false;

    // Function to get character frequency and unique characters
    const getFrequencyAndSet = (word) => {
        const freq = new Map();
        for (const char of word) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }
        return {
            freqArray: Array.from(freq.values()).sort((a, b) => a - b), // Sorted frequency array
            uniqueChars: new Set(freq.keys()) // Set of unique characters
        };
    };

    // Get frequency and unique characters for both words
    const { freqArray: freq1, uniqueChars: set1 } = getFrequencyAndSet(word1);
    const { freqArray: freq2, uniqueChars: set2 } = getFrequencyAndSet(word2);

    // Check if unique character sets match
    if (set1.size !== set2.size || ![...set1].every(char => set2.has(char))) {
        return false;
    }

    // Check if frequency distributions match
    return freq1.join(',') === freq2.join(',');

    // Another Approach
    // if (word1.length !== word2.length) return false;
    // const hashWord1 = {};
    // for (const c of word1) {
    //     hashWord1[c] = (hashWord1[c] || 0) + 1;
    // }

    // const hashWord2 = {};
    // for (const c of word2) {
    //     hashWord2[c] = (hashWord2[c] || 0) + 1;
    // }

    // const w1 = new Set(Object.keys(hashWord1));
    // const w2 = new Set(Object.keys(hashWord2));
    // if (w1.size !== w2.size) return false;
    // if (![...w1].every(w => w2.has(w))) return false;
    // return Object.values(hashWord1).sort((a,b) => a-b).join(',') === Object.values(hashWord2).sort((a,b) => a-b).join(',');
}

// const word1 = "abc";
// const word2 = "bca";
// console.log(closeStrings(word1, word2)); // Output: true

const word1 = "aabbcc";
const word2 = "ccbbaa";
console.log(closeStrings(word1, word2)); // Output: true

// const word1 = "abc";
// const word2 = "def";
// console.log(closeStrings(word1, word2)); // Output: false

// const word1 = "aabbcc";
// const word2 = "aabbc";
// console.log(closeStrings(word1, word2)); // Output: false
