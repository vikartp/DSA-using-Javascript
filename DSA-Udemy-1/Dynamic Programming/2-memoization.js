let counter = 0;
let memo = [];
function fib(n) {
    counter++;
    if (memo[n] !== undefined) return memo[n];

    if (n === 0 || n === 1) {
        return n;
    }
    // Store the result in memo before returning
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

const res = fib(40);
console.log(res);
console.log('Number of function calls: ' + counter);

// ? => Try to change the argument of fib function and notice the function calls count
// This uses: top -> down, Recursion
// Note: The Big O with memoization has now reduced to O(n). It stays in memory and takes space.