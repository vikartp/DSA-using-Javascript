/**
 * Longest Palindromic Substring requires finding the longest substring of a given string 
 * that is a palindrome.
 */

var longestPalindrome = function (s) {
    if (s.length === 0) return "";

    let start = 0, end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Length of the palindrome
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);       // Odd-length palindromes
        const len2 = expandAroundCenter(i, i + 1);   // Even-length palindromes
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.slice(start, end + 1);
};

console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"
console.log(longestPalindrome("a"));     // Output: "a"
console.log(longestPalindrome("ac"));    // Output: "a" or "c"
console.log(longestPalindrome("bb"));    // Output: "bb"