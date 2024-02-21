/**
 * Determine the factorial of a given number using recursion
 */

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(4)); // 24
console.log(factorial(6)); // 720