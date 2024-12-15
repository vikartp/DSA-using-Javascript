/**
 * The problem 374. Guess Number Higher or Lower requires you to guess a number 
 * between 1 and n. You have access to a helper function guess(num) that returns:

-1 if the guessed number is higher than the target,
1 if the guessed number is lower than the target,
0 if the guessed number matches the target.
The goal is to implement a function that uses the fewest guesses to determine the target number.
 */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return               -1 if num is higher than the target
 *                        1 if num is lower than the target
 *                        0 if num is equal to the target
 * var guess = function(num) {}
 */

var guessNumber = function (n) {
    let low = 1;
    let high = n;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const res = guess(mid);

        if (res === 0) {
            return mid; // Found the target number
        } else if (res === -1) {
            high = mid - 1; // Target is smaller
        } else {
            low = mid + 1; // Target is larger
        }
    }

    return -1; // Should never reach here if target exists
};

function guess(num) {
    const target = 6;
    if (num > target) return -1;
    if (num < target) return 1;
    return 0;
}

console.log(guessNumber(10)); // Output: 6

/**
 * Notes: 
 * The solution uses binary search to find the target number.
 * The time complexity is O(log n) and the space complexity is O(1).
 */