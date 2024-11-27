/**
 * Given a string s, reverse only all the vowels in the string and return it. 
 * The vowels are 'a', 'e', 'i', 'o', and 'u',
 * and they can appear in both lower and upper cases, more than once.
 */

function reverseVowels(s) {
    let vowels = 'aeiouAEIOU';
    let sArr = s.split('');
    let i = 0;
    let j = sArr.length - 1;
    while (i < j) {
        if (vowels.includes(sArr[i]) && vowels.includes(sArr[j])) {
            [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
            i++;
            j--;
        } else if (!vowels.includes(sArr[i])) {
            i++;
        } else {
            j--;
        }
    }
    return sArr.join('');
}

// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseVowelsMethod2(s) {
    const vowelsAvailable = [];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (const char of s) {
        if (vowels.includes(char)) {
            vowelsAvailable.push(char);
        }
    }

    let result = '';
    for (const char of s) {
        if (vowels.includes(char)) {
            result += vowelsAvailable.pop(char);
        } else {
            result += char;
        }
    }

    return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Example 1:
let s = "hello";
console.log(reverseVowels(s)); // "holle"

// Example 2:
s = "leetcode";
console.log(reverseVowels(s)); // "leotcede"

// Example 3:
s = "aA";
console.log(reverseVowels(s)); // "Aa"

// Example 4:
s = "IceCreAm";
console.log(reverseVowels(s)); // "AceCreIm"