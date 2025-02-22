/**
 * Given an array of strings strs, group the anagrams together. 
 * You can return the answer in any order.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // Using JS object;
    // const hashMap = {};
    // for (const str of strs) {
    //     const sorted = str.split('').sort().join('');
    //     if (hashMap[sorted]) {
    //         hashMap[sorted].push(str);
    //     } else {
    //         hashMap[sorted] = [str];
    //     }
    // }
    // return Object.values(hashMap);

    // Using Map
    const store = new Map();
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (!store.has(sorted)) {
            store.set(sorted, []);
        }
        store.get(sorted).push(str);
    }
    return Array.from(store.values());
};

// Time complexity: O(n * k * log(k)) where n is the length of strs and k is the maximum length of a string in strs
// Space complexity: O(n * k) where n is the length of strs and k is the maximum length of a string in strs

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
console.log(groupAnagrams(["a", "b"])); // [["a"], ["b"]]
console.log(groupAnagrams(["a", "b", "c"])); // [["a"], ["b"], ["c"]]
console.log(groupAnagrams(["a", "b", "c", "d"])); // [["a"], ["b"], ["c"], ["d"]]
console.log(groupAnagrams(["a", "b", "c", "d", "e"])); // [["a"], ["b"], ["c"], ["d"], ["e"]]