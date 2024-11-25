/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence,
 *  called the Fibonacci sequence, such that each number is the
 *  sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
A Fibibonacci sequence looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 */

// Fibonacci number using recursion
function fib(n) {
    if (n === 0 || n === 1) return n;
    return fib(n-1) + fib(n-2);
}

console.time('fib');
// console.log(fib(4)); // 3
// console.log(fib(5)); // 5
// console.log(fib(6)); // 8
// console.log(fib(7)); // 13
console.log(fib(30)); // 832040
console.timeEnd('fib');

// Fibonacci number using memoization
function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0 || n === 1) return n;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}

console.time('fibMemo');
// console.log(fibMemo(4)); // 3
// console.log(fibMemo(5)); // 5
// console.log(fibMemo(6)); // 8
// console.log(fibMemo(7)); // 13
console.log(fibMemo(30)); // 832040
console.timeEnd('fibMemo');