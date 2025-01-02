/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * An integer is a palindrome when it reads the same forward and backward.

For example, 121 is a palindrome while 123 is not.
 */

// var isPalindrome = function (x) {
//     const str = x.toString();
//     const half = Math.floor(str.length / 2);
//     const lastIndex = str.length - 1;
//     for (let index = 0; index < half; index++) {
//         if (str[index] !== str[lastIndex - index]) return false;
//     }
//     return true;
// };

var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    let original = x;

    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return original === reversed;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false