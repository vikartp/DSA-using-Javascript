/**
 * You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

// var sortPeople = function (names, heights) {
//     const hashMap = {};
//     for (let i = 0; i < heights.length; i++) {
//         hashMap[heights[i]] = names[i];
//     }
//     heights.sort((a, b) => b - a);
//     return heights.map(h => hashMap[h]);
// };

var sortPeople = function (names, heights) {
    return names
        .map((name, index) => ({ name, height: heights[index] })) // Pair names with heights
        .sort((a, b) => b.height - a.height) // Sort in descending order of height
        .map(person => person.name); // Extract sorted names
};