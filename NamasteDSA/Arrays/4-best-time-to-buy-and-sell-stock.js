/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    * Example 1: Input: prices = [7,1,5,3,6,4] -> Output: 5
    * Example 2: Input: prices = [7,6,4,3,1] -> Output: 0
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let min = prices[0]; // Least price
    // let max = 0; // Max profit
    // for (let i = 1; i < prices.length; i++) {
    //     if (prices[i] < min) {
    //         min = prices[i]
    //     } else {
    //         max = Math.max(max, prices[i] - min)
    //     }
    // }
    // return max;
    let minPrice = prices[0];
    let maxProfit = 0;
    for (const p of prices) {
        const diff = p - minPrice;
        if (p < minPrice) {
            minPrice = p;
        } else {
            maxProfit = Math.max(maxProfit, diff)
        }
    }
    return maxProfit;
};

// Time Complexity: O(n) - We traverse the prices array once.
// Space Complexity: O(1) - We use constant extra space.