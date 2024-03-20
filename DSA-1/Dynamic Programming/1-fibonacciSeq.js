// Fibonacci Sequence: 0,1,1,2,3,5,8,13,21,34.........
let counter = 0;
function fib(n) {
    counter++;
    if (n === 0 || n === 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const res = fib(25);
console.log(res);
console.log('Number of function calls: ' + counter);


// ? => Try to change the argument of fib function and notice the function calls count
// This uses: top -> down, Recursion
// Note: Simple fibonacci function has O(2^n)