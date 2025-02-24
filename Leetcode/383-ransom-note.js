/**
 * Given two strings ransomNote and magazine, 
 * return true if ransomNote can be constructed by using the letters from magazine 
 * and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 */

var canConstruct = function (ransomNote, magazine) {
    const store = {};
    for (const char of magazine) {
        store[char] = (store[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!store[char]) return false;
        store[char]--;
    }
    return true;
};