// https://leetcode.com/problems/coin-change/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//     // Solution 1: top down- recursive solution
//     const dp = {};
//     // const dp = new Map();

//     const fn = (rem) => {
//         if (dp[rem])  return dp[rem];
//         // if (dp.has(rem)) {
//         //     return dp.get(rem);
//         // }
//         if (rem === 0) return 0;
//         if (rem < 0) return -1;

//         let minCoins = Infinity;
//         for (const c of coins) {
//             const res = fn(rem - c);
//             if (res !== -1) {
//                 minCoins = Math.min(minCoins, 1 + res);
//             }
//         }

//         dp[rem] = minCoins !== Infinity ? minCoins: -1;
//         // dp.set(rem, minCoins !== Infinity ? minCoins: -1)
//         return dp[rem];
//         // return dp.get(rem);
//     }

//     return fn(amount);
// };

var coinChange = function (coins, amount) {
    // Solution 2: bottom up - iterative solution - Tabulation
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let rem = 1; rem <= amount; rem++) {
        for (const c of coins) {
            const remainingAmount = rem - c;
            if (remainingAmount >= 0) {
                dp[rem] = Math.min(dp[rem], 1 + dp[remainingAmount]);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};