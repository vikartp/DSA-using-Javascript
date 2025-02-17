/**
 * Given a string s consisting of words and spaces, 
 * return the length of the last word in the string.
 */

var lengthOfLastWord = function (s) {
    const wordList = s.trim().split(' ');
    return wordList[wordList.length - 1].length;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("   ")); // 0
console.log(lengthOfLastWord("singleWord")); // 10