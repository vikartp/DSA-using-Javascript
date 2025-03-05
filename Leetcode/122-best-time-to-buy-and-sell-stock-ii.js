/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. 
 * You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let totalProfit = 0;
    let prev = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prev) {
            const diff = prices[i] - prev;
            totalProfit += diff;
        }
        prev = prices[i];
    }

    return totalProfit;
};

console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([7, 6, 4, 3, 1])); // 0