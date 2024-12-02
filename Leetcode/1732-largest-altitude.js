/**
 * There is a biker going on a road trip. 
 * The road trip consists of n + 1 points at different altitudes. 
 * The biker starts his trip on point 0 with altitude equal 0.
 * You are given an integer array gain of length n where gain[i] is 
 * the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). 
 * Return the highest altitude of a point.
 */

function largestAltitude(gain) {
    let max = 0;
    let current = 0;
    for (let i = 0; i < gain.length; i++) {
        current += gain[i];
        max = Math.max(max, current);
    }
    return max;

    // let maxAlt = 0;
    // let sumAlt = 0;
    // for (const alt of gain) {
    //     sumAlt += alt;
    //     maxAlt = Math.max(maxAlt,sumAlt)
    // }
    // return maxAlt;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([1, 2, 3, 4, 5])); // 15