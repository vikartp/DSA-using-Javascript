/**
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
 * Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    const jewelSet = new Set(jewels);
    let count = 0;
    for (const s of stones) {
        // Time: O(n) -> Brute force
        // if (jewels.includes(s)) {
        //     count++;
        // }
        // Time: O(1) -> Using Set
        if (jewelSet.has(s)) {
            count++;
        }
    }

    return count;
};

// Using Set
// Time Complexity: O(n)
// Space complexity: O(1)

// Using Brute force approach
// Time Complexity: O(m*n)
// Space complexity: O(1)