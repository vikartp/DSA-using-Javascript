/**
 * Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2^x.
 */
function isPowerOfTwo(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(18)); // Output: false

// Time Complexity: O(log n)
// Space Complexity: O(log n) due to recursion stack

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // Solution 1:
    // let res = 1;
    // while (true) {
    //     if (res === n) return true;

    //     if (res > n) return false;
    //     res = res * 2
    // }

    // Solution 2:
    if (n === 1) return true;
    else if (n < 1 || n % 2 !== 0) return false;
    return isPowerOfTwo(n/2)
};