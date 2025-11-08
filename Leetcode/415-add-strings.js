/**
 * Given two non-negative integers num1 and num2 represented as strings, return the sum of num1 and num2 as a string. 
 * You must solve the problem without using any built-in library for handling large integers (no BigInt).
 */

var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        // const digit1 = i >= 0 ? num1.charCodeAt(i) - 48 : 0; // '0' is 48 in ASCII
        // const digit2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0;
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

        const sum = digit1 + digit2 + carry;
        result.push((sum % 10).toString());
        carry = Math.floor(sum / 10);
        
        i--;
        j--;
    }
    return result.reverse().join('');
};


// Example usage:
console.log(addStrings("11", "123")); // Output: "134"
console.log(addStrings("456", "77")); // Output: "533"
console.log(addStrings("0", "0")); // Output: "0"

// Time Complexity: O(max(n, m)) where n and m are the lengths of num1 and num2
// Space Complexity: O(max(n, m)) for the result storage