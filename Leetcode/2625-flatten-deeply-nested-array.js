/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // Brute-Force Approach
    // const flattenHelper = (array) => {
    //     const flattened = [];
    //     for (let element of array) {
    //         if (Array.isArray(element)) {
    //             flattened.push(...element)
    //         } else {
    //             flattened.push(element);
    //         }
    //     }
    //     return flattened;
    // }
    
    // let final = arr;
    // let depth = 0;

    // while (depth < n) {
    //     final = flattenHelper(final);
    //     depth++;
    // }

    // return final;

    // Better Approach:
    const result = [];

    const flatten = (currentArray, depth) => {
        for (const elem of currentArray) {
            if (Array.isArray(elem) && depth < n) {
                flatten(elem, depth + 1)
            } else {
                result.push(elem);
            }
        }
    }

    flatten(arr, 0);
    return result;
};

console.log(flat([1, [2, 3], [4, [5, 6]]]));       
// Output: [1, 2, 3, 4, 5, 6]

console.log(flat([1, [2, [3, [4]]]], 2));         
// Output: [1, 2, 3, [4]]

console.log(flat([1, [], [[2]], [[[3]]]]));       
// Output: [1, 2, 3]
