//   +======================================================+
//   |                WRITE YOUR CODE HERE                  |
//   | Description:                                         |
//   | - This function finds duplicate numbers in an array. |
//   |                                                      |
//   | Return type: array                                   |
//   | - Returns an array containing the duplicate numbers. |
//   |                                                      |
//   | Tips:                                                |
//   | - You can use either a Map or an object for          |
//   |   counting occurrences of each number.               |
//   | - Example with Map:                                  |
//   |   numCounts.set(num, (numCounts.get(num) || 0) + 1); |
//   | - Example with object:                               |
//   |   numCounts[num] = (numCounts[num] || 0) + 1;        |
//   +======================================================+

// Using Object and Object.entries
function findDuplicates(array) {
    const numCounts = {};
    let resultArray = [];
    for (const num of array) {
        numCounts[num] = (numCounts[num] || 0) + 1;
    }

    for (const [key, value] of Object.entries(numCounts)) {
        if (value > 1) resultArray.push(Number(key))
    }

    return resultArray;
}

// Using Object and for-in
// function findDuplicates(nums) {
//     const numCounts = {};
//     for (let num of nums) {
//         numCounts[num] = (numCounts[num] || 0) + 1;
//     }
//     const duplicates = [];
//     for (let key in numCounts) {
//         if (numCounts[key] > 1) {
//             duplicates.push(Number(key));
//         }
//     }
//     return duplicates;
// }

// using Map
// function findDuplicates(nums) {
//     const numCounts = new Map();
//     for (let num of nums) {
//         numCounts.set(num, (numCounts.get(num) || 0) + 1);
//     }
//     const duplicates = [];
//     for (let [key, value] of numCounts.entries()) {
//         if (value > 1) {
//             duplicates.push(key);
//         }
//     }
//     return duplicates;
// }


// ---------------
// No Duplicates
// ---------------
console.log("No Duplicates:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 3, 4, 5])));
console.log("---------------");

// ---------------
// Single Duplicate
// ---------------
console.log("Single Duplicate:");
console.log("Input: [1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Multiple Duplicates
// ---------------
console.log("Multiple Duplicates:");
console.log("Input: [1, 1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Repeating Duplicates
// ---------------
console.log("Repeating Duplicates:");
console.log("Input: [1, 1, 1, 2, 2, 2, 3]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 1, 2, 2, 2, 3])));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", JSON.stringify(findDuplicates([])));
console.log("---------------");

// ---------------
// Single Element
// ---------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", JSON.stringify(findDuplicates([1])));
console.log("---------------");


