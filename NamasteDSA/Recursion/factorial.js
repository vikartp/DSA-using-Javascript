
/**
 * Factorial of a number using recursion
 * @param {number} n - The number to calculate factorial for
 * @returns {number} - The factorial of n
 */
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack