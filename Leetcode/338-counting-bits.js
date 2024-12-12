/**
 * The problem 338. Counting Bits requires determining the number of 1s (set bits) 
 * in the binary representation of every number from 0 to n, inclusive. 
 * The result should be an array where the i-th element is the count of 1s 
 * in the binary representation of i.
 */

function countBits(n) {
    const dp = new Array(n + 1).fill(0); // Initialize an array with 0s

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1); // Use the DP relation
    }

    return dp;
}


console.log(countBits(2));  // Output: [0, 1, 1]
console.log(countBits(5));  // Output: [0, 1, 1, 2, 1, 2]
