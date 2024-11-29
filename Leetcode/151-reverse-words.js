/**
 * Given an input string s, reverse the order of the words. 
 * A word is defined as a sequence of non-space characters. 
 * The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * Note that s may contain leading or trailing spaces or multiple spaces between two words.
 * The returned string should only have a single space separating the words.
 * Do not include any extra spaces.
 */

function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}

// Time complexity: O(n)
// Space complexity: O(n)


// Using brute force
function reverseWordsBf(s) {
    let sanitized = '';
    for (let i = 0; i < s.length; i++) {
        if (!sanitized.length && s[i] === ' ') continue;
        if (s[i] === ' ' && sanitized[sanitized.length-1] === ' ') continue;
        sanitized += s[i]
    }
    if (sanitized[sanitized.length-1] === ' ') {
        sanitized = sanitized.slice(0, sanitized.length - 1);
    }

    return sanitized.split(' ').reverse().join(' ');
}

// Time complexity: O(n)
// Space complexity: O(n)

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"
console.log(reverseWords("  Bob    Loves  Alice   ")); // "Alice Loves Bob"
console.log(reverseWords("Alice does not even like bob")); // "bob like even not does Alice"
console.log(reverseWords("  walks  udp package   into  bar a")); // "a bar into package udp walks"