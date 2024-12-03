/**
 * Given an array of integers arr, return true if the number of occurrences of each value
 * in the array is unique or false otherwise.
 */

function uniqueOccurrences(arr) {
    const numOccur = {};
    for (const val of arr) {
        if (numOccur[val]) {
            numOccur[val]++;
        } else {
            numOccur[val] = 1;
        }
    }

    const valuesList = Object.values(numOccur);
    return valuesList.length === new Set(valuesList).size;

    // const count = {};
    // for (let i = 0; i < arr.length; i++) {
    //     count[arr[i]] = (count[arr[i]] || 0) + 1;
    // }
    // const values = Object.values(count);
    // return new Set(values).size === values.length;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
console.log(uniqueOccurrences([1, 2, 2, 3, 3, 3])); // true