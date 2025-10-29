/**
 * Sum of array keeping array outside the function
 */
const arr = [1, 2, 3, 4, 5];

function sumArrayExternal(i) {
  if (i === 0) return arr[0];
  return arr[i] + sumArrayExternal(i - 1);
}

console.log(sumArrayExternal(arr.length - 1)); // Output: 15

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack