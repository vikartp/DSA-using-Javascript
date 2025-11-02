/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */
function reverse(x) {
    // Soultion 1:
    // const sign = Math.sign(x);
    // const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    // if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) {
    //     return 0;
    // }
    // return reversed;

    // Solution 2:
    // if (x === 0) return 0;

    // let isNegative = x < 0;
    // let absNum = Math.abs(x);
    // let reverseStr = '';
    // while (absNum > 0) {
    //     const rem = absNum % 10;
    //     reverseStr += rem;
    //     absNum = Math.floor(absNum / 10);
    // }
    // if (isNegative) {
    //     reverseStr = '-' + reverseStr;
    // }
    // const finalReversedNum = parseInt(reverseStr);
    // return finalReversedNum > Math.pow(2, 31) - 1 || finalReversedNum < -Math.pow(2, 31) ? 0 : finalReversedNum;

    // Solution 3:
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    
    let result = 0;
    let num = x;
    let isNegative = num < 0;
    
    // Work with positive number
    if (isNegative) {
        num = -num;
    }
    
    while (num > 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        
        // Check for overflow before multiplying by 10
        if (result > Math.floor(INT_MAX / 10)) {
            return 0;
        }
        
        result = result * 10 + digit;
        
        // Check for overflow after adding digit (only needed for INT_MAX case)
        if (result > INT_MAX) {
            return 0;
        }
    }
    
    return isNegative ? -result : result;
}