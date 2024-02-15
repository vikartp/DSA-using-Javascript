/**
 * Function that determines if two arrays have any item in common
 * Note: If we simply iterate through first array and then second array(nested loop)
 * then it's going to be O(n^2)
 * So this method shows a better way to solve it through O(n)
 * To Be Exact => O(n) + O(n) => O(2n) => O(n)
 */

function itemInCommon(arr1, arr2) {
    const obj = {};
    for (const item of arr1) {
        obj[item] = true;
    }

    for (const newItem of arr2) {
        if (obj[newItem]) return true;
    }

    return false;
}
const array1 = [1, 12, 16];
const array2 = [12, 5, 6];
console.log(itemInCommon(array1, array2)); 