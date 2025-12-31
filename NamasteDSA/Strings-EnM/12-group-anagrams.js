/**
 * Given an array of strings strs, group the anagrams together. 
 * You can return the answer in any order.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Solution 1: Using Sorted key
    // Time Complexity: O(n*mlogm), Space Complexity: O(n*m)
    // Where n is number of strings, m is max strings length
    // const store = {};
    // for (const c of strs) {
    //     const sorted = c.split('').sort().join(''); // Time: O(mlogm)
    //     if (!store[sorted]) {
    //         store[sorted] = [];
    //     };
    //     store[sorted].push(c);
    // }

    // return Object.values(store);

    // Solution 2: Using Hashed key
    // Time: O(n*m) , Space: O(n*m)
    // Where n is the length of strings array and m is the max string length
    const getHashedKey = s => {
        const arr = new Array(26).fill(0);
        for (const char of s) {
            arr[char.charCodeAt() - 97]++; // Increase the count for specific letter occurrence at letter index
        }

        return arr.join('#');
    }
    const map = new Map();
    for (const str of strs) {
        const key = getHashedKey(str); // O(m)
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
};