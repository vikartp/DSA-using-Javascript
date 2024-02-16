/**
 * The goal of the function is to determine whether the two arrays have at least one element in common.
 * Note: If we simply iterate through first array and then second array(nested loop)
 * then it's going to be O(n^2)
 * So this method shows a better way to solve it through O(n)
 * To Be Exact => O(n) + O(n) => O(2n) => O(n)
 */

// Function using object
function itemInCommon(arr1, arr2) {
    const obj = {};
    for (const item of arr1) {
        obj[item] = true;
    }

    for (const itemNext of arr2) {
        if (obj[itemNext]) return true;
    }

    return false;
}


// Function using Map
// function itemInCommon(arr1, arr2) {
//     const myMap = new Map();

//     for(const item of arr1) {
//         myMap.set(item, true);
//     }

//     for(const itemNext of arr2) {
//         if (myMap.has(itemNext)) return true
//     }

//     return false;
// }





// ---------------
// One Common Item
// ---------------
console.log("One Common Item:");
console.log("Input: [1, 3, 5], [2, 4, 5]");
console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 5]));
console.log("---------------");

// ---------------
// No Common Items
// ---------------
console.log("No Common Items:");
console.log("Input: [1, 3, 5], [2, 4, 6]");
console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 6]));
console.log("---------------");

// ---------------
// Multiple Common Items
// ---------------
console.log("Multiple Common Items:");
console.log("Input: [1, 2, 3], [2, 3, 4]");
console.log("Output: ", itemInCommon([1, 2, 3], [2, 3, 4]));
console.log("---------------");

// ---------------
// Empty Arrays
// ---------------
console.log("Empty Arrays:");
console.log("Input: [], []");
console.log("Output: ", itemInCommon([], []));
console.log("---------------");

// ---------------
// One Empty Array
// ---------------
console.log("One Empty Array:");
console.log("Input: [1, 2, 3], []");
console.log("Output: ", itemInCommon([1, 2, 3], []));
console.log("---------------");


