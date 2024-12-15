/**
 * The Tribonacci sequence Tn is defined as follows: 
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 */

// var tribonacci = function (n, memo = {}) {
//     if (n === 0) return 0;
//     if (n === 1 || n === 2) return 1;

//     if (memo[n] !== undefined) return memo[n];

//     memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
//     return memo[n];
// };

const store = {};
var tribonacci = function (n) {
    if (store[n]) return store[n];
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    store[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    return store[n];
};

console.log(tribonacci(4));  // Output: 4
console.log(tribonacci(25)); // Output: 1389537

/**
 * Notes:
 * This is solved by Recursive Approach (with Memoization):
 * The solution uses memoization to store the values of the Tribonacci sequence.
 * The time complexity is O(n) and the space complexity is O(n).
 */