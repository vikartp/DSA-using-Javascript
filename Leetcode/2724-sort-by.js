/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a) - fn(b));
};


// Example usage:
const arr = [3, 1, 4, 2];
const sorted = sortBy(arr, (x) => x); // Sort by the identity function
console.log(sorted); // [1, 2, 3, 4]

console.log(sortBy([3, 1, 2], x => x)); 
// Output: [1, 2, 3]

console.log(sortBy(["apple", "banana", "kiwi"], word => word.length));
// Output: ["kiwi", "apple", "banana"] — since lengths are 4, 5, 6

console.log(sortBy([{x: 3}, {x: 1}, {x: 2}], obj => obj.x));
// Output: [{x: 1}, {x: 2}, {x: 3}]
