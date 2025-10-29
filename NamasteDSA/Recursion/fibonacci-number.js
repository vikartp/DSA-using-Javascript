/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
 */

// Without memoization
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8

// Time Complexity: O(2^n)
// Space Complexity: O(n) due to recursion stack

// With memoization
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(6)); // Output: 8

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack

// Keeping the memoization outside the function
const memo = {};
function fibonacciMemoExternal(n) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  memo[n] = fibonacciMemoExternal(n - 1) + fibonacciMemoExternal(n - 2);
  return memo[n];
}

console.log(fibonacciMemoExternal(6)); // Output: 8

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack