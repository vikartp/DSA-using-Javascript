/**
 * Given an alphanumeric string s, return the second largest numerical digit 
 * that appears in s, or -1 if it does not exist.
 * An alphanumeric string is a string consisting of lowercase English letters and digits.
 */
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    // Solution 1:
    // const sArr = s.match(/[0-9]/g)?.map(c => parseInt(c));
    // const uniqueDigits = [...new Set(sArr)].sort();
    // const secondLargest =  uniqueDigits[uniqueDigits.length - 2];

    // return secondLargest ?? -1;

    // Solution 2:
    let largest = -1;
    let secondLargest = -1;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char >= '0' && char <= '9') {
            const digit = parseInt(char);
            if (digit > largest) {
                secondLargest = largest;
                largest = digit;
            } else if (digit > secondLargest && digit < largest) {
                secondLargest = digit;
            }
        }
    }

    return secondLargest;
};

// Example usage:
const input = "abc12345";
console.log(secondLargestDigit(input)); // Output: 4