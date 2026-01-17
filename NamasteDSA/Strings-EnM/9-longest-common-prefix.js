/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // Brute-Force Approach
    // let common = '';
    // const first = strs[0];
    // for(let i = 0; i < first.length; i++) {
    //     if (strs.every(s => s[i] === first[i])) {
    //         common += first[i];
    //     } else { // When we find any character is not available in all elements, we return immediately
    //         return common;
    //     }
    // }
    // return common;
    
    if (!strs.length) return "";

    const first = strs[0];

    for (let i = 0; i < first.length; i++) {
        const char = first[i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return first.slice(0, i);
            }
        }
    }

    return first;
};

// Time: O(N × M)

// N = number of strings

// M = length of the first string

// Space: O(1) extra space
