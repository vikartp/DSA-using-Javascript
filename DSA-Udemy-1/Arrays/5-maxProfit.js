//   +===================================================+
//   |               WRITE YOUR CODE HERE                |
//   | Description:                                      |
//   | - This function calculates the maximum profit     |
//   |   that can be made by buying and selling stock    |
//   |   once in the given array `prices`.               |
//   |                                                   |
//   | Output:                                           |
//   | - The function returns the maximum possible       |
//   |   profit.                                         |
//   |                                                   |

//   | Tips:                                             |
//   | - `minPrice` keeps track of the lowest price      |
//   |   encountered so far.                             |
//   | - `maxProfit` stores the highest profit we can    |
//   |   make so far.                                    |
//   +===================================================+


function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) minPrice = price;
        if (price - minPrice > maxProfit) maxProfit = price - minPrice;
    }

    return maxProfit;
}

// Define the function maxProfit with a single parameter: prices
// (an array of stock prices).
function maxProfit1(prices) {

    // Initialize 'minPrice' to the largest possible value in JavaScript.
    // This variable will store the lowest stock price seen so far.
    let minPrice = Number.MAX_VALUE;

    // Initialize 'maxProfit' to 0.
    // This variable will store the highest profit we can make.
    let maxProfit = 0;

    // Start a for loop that iterates through each stock price in the array.
    for (let price of prices) {

        // Update 'minPrice' with the minimum of the current 'minPrice'
        // and the current stock price.
        minPrice = Math.min(minPrice, price);

        // Calculate the profit if we buy at 'minPrice' and sell at the current price.
        let profit = price - minPrice;

        // Update 'maxProfit' with the maximum of the current 'maxProfit'
        // and the calculated profit.
        maxProfit = Math.max(maxProfit, profit);
    }

    // After the loop, 'maxProfit' will contain the highest profit we can make.
    // Return this value.
    return maxProfit;
}

// ------------------------------------
//  Test array with increasing prices
// ------------------------------------
console.log("Increasing prices:");
let increasingPrices = [1, 2, 3, 4, 5];
console.log("Array:", increasingPrices);
console.log("Expected Max Profit: 4");
console.log("Actual Max Profit:", maxProfit(increasingPrices));
console.log("---------------");

// ------------------------------------
//  Test array with decreasing prices
// ------------------------------------
console.log("Decreasing prices:");
let decreasingPrices = [5, 4, 3, 2, 1];
console.log("Array:", decreasingPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(decreasingPrices));
console.log("---------------");

// ------------------------------------
//  Test array with random prices
// ------------------------------------
console.log("Random prices:");
let randomPrices = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Array:", randomPrices);
console.log("Expected Max Profit: 8");
console.log("Actual Max Profit:", maxProfit(randomPrices));
console.log("---------------");

// ------------------------------------
//  Test array with same prices
// ------------------------------------
console.log("Same prices:");
let samePrices = [2, 2, 2, 2, 2];
console.log("Array:", samePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(samePrices));
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
console.log("Empty array:");
let emptyPrices = [];
console.log("Array:", emptyPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(emptyPrices));
console.log("---------------");

// ------------------------------------
//  Test array with negative prices
// ------------------------------------
console.log("Negative prices:");
let negativePrices = [-1, -2, -3, -4];
console.log("Array:", negativePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(negativePrices));
console.log("---------------");

// ------------------------------------
//  Test array with mixed prices
// ------------------------------------
console.log("Mixed prices:");
let mixedPrices = [1, 4, 2, -1, 6];
console.log("Array:", mixedPrices);
console.log("Expected Max Profit: 7");
console.log("Actual Max Profit:", maxProfit(mixedPrices));
console.log("---------------");


