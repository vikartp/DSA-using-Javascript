/**
 * There are n kids with candies. You are given an integer array candies,
 * where each candies[i] represents the number of candies the ith kid has, 
 * and an integer extraCandies, denoting the number of extra candies that you have.
 * Return a boolean array result of length n, where result[i] is true if,
 * after giving the ith kid all the extraCandies,
 * they will have the greatest number of candies among all the kids,
 * or false otherwise.
 * Note that multiple kids can have the greatest number of candies.
 */

function kidsWithCandies(candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max);
}

function kidsWithCandiesMethod2(candies, extraCandies) {
    const max = Math.max(...candies);
    const result = [];
    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= max);
    }
    return result;
}

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies)); // [true, true, true, false, true]
console.log(kidsWithCandiesMethod2(candies, extraCandies)); // [true, true, true, false, true]

// Time Complexity: O(n)    
// Space Complexity: O(n)

// Leetcode: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/