let counter = 0;
function fib(n) {
    let fibSequence = [];
    fibSequence[0] = 0;
    fibSequence[1] = 1;

    for (let i = 2; i <= n; i++) {
        counter++;
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    return fibSequence[n];
}

const finResult = fib(40);
console.log(finResult);
console.log('Number of function calls: ' + counter);

// This is also O(n). However, This doesn't use memoization.
// And hence if we use this function next time,
// it will be again O(n) unlike Memo technique which will be O(1) due to Memo this time