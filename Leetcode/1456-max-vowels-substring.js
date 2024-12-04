/**
 * Given a string s and an integer k, 
 * return the maximum number of vowel letters in any substring of s with length k.
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 */

function maxVowels(s, k) {
    let left = 0;
    let right = 0;
    let max = 0;
    let vowelCount = 0;
    const vowels = { 'a': true, 'e': true, 'i': true, 'o': true, 'u': true };

    while (right < s.length) {
        if (vowels[s[right]]) {
            vowelCount++;
        }

        if (right - left + 1 > k) {
            if (vowels[s[left]]) {
                vowelCount--;
            }
            left++;
        }

        max = Math.max(max, vowelCount);
        right++;
    }

    return max;
}

console.log(maxVowels('abciiidef', 3)); // 3
console.log(maxVowels('aeiou', 2)); // 2
console.log(maxVowels('leetcode', 3)); // 2
console.log(maxVowels('rhythms', 4)); // 0