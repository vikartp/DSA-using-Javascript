var isPalindrome = function (s) {
    s = s.toLowerCase();
    const sanitizedStr = s.match(/[a-zA-Z0-9]+/g).join('');
    return sanitizedStr === sanitizedStr.split('').reverse().join('');
};

function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the cleaned string with its reverse
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("race a car"));  // false
console.log(isPalindrome(" "));  // true
console.log(isPalindrome("A"));  // true
