/**
 * Print from n to 1 using recursion
 * @param {number} n - The starting number
 */
function printReverse(n) {
  if (n < 1) return;
  console.log(n);
  printReverse(n - 1);
}

printReverse(5); // Output: 5 4 3 2 1

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack

/**
 * Print from 1 to n using recursion
 * @param {number} n - The ending number
 */
function printNormal(n) {
  if (n < 1) return;
  printNormal(n - 1);
  console.log(n);
}

printNormal(5); // Output: 1 2 3 4 5

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack


/**
 * Sum of first n natural numbers using recursion
 * @param {number} n - The number up to which to sum
 * @returns {number} - The sum of first n natural numbers
 */
function sumNatural(n) {
  if (n === 1) return 1;
  return n + sumNatural(n - 1);
}

console.log(sumNatural(5)); // Output: 15

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack


/**
 * Sum of all elements in an array using recursion
 * @param {number[]} arr - The array of numbers
 * @param {number} n - The number of elements to consider from the array
 */
function sumArray(arr, n) {
  if (n <= 0) return 0;
  return arr[n - 1] + sumArray(arr, n - 1);
}

console.log(sumArray([1, 2, 3, 4, 5], 5)); // Output: 15

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack

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

/**
 * Sum of all odd numbers in an array using recursion
 */
const randomArr = [50, 2, 0, 3, 6, 7, 5];

function sumOdd(i) {
    const isOdd = randomArr[i] % 2 !== 0;
    if (i === 0) {
        return isOdd ? randomArr[0] : 0;
    }

    return (isOdd ? randomArr[i] : 0) + sumOdd(i - 1);
}

sumOdd(randomArr.length - 1); // Output: 15 (3 + 7 + 5)

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack

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