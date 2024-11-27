/**
 * You have a long flowerbed in which some of the plots are planted,
 * and some are not. However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's, 
 * where 0 means empty and 1 means not empty, and an integer n, 
 * return true if n new flowers can be planted in the flowerbed 
 * without violating the no-adjacent-flowers rule 
 * and false otherwise.
 */

function canPlaceFlowers(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (n === 0) return true;
        if (flowerbed[i] === 0 && flowerbed[i+1] !== 1 && flowerbed[i-1] !== 1) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n === 0;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n)); // true

// More Examples:
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1)); // true
console.log(canPlaceFlowers([0, 0, 0, 0, 0], 3)); // true
console.log(canPlaceFlowers([0, 0, 0, 0, 0], 4)); // false
console.log(canPlaceFlowers([0, 0, 0, 0, 0], 0)); // true
