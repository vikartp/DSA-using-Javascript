/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function (s, t) {
//     const mapping = {};
//     const usedVal = [];
//     for (let i = 0; i < s.length; i++) {
//         const sChar = s[i];
//         const tChar = t[i];
//         if (!mapping[sChar]) {
//             if (usedVal.includes(tChar)) return false;
//             mapping[sChar] = tChar;
//             usedVal.push(tChar);
//         } else if (mapping[sChar] !== tChar){
//             return false;
//         }
//     }
//     return true;
// };

var isIsomorphic = function (s, t) {
    // Check if the lengths of both strings are different
    if (s.length !== t.length) {
        return false;
    }

    // Create two maps to track the character mappings
    let mapS = new Map();
    let mapT = new Map();

    // Iterate over both strings
    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // Check if there's a conflict in the mapping from s to t
        if (mapS.has(charS)) {
            if (mapS.get(charS) !== charT) {
                return false;
            }
        } else {
            mapS.set(charS, charT);
        }

        // Check if there's a conflict in the mapping from t to s
        if (mapT.has(charT)) {
            if (mapT.get(charT) !== charS) {
                return false;
            }
        } else {
            mapT.set(charT, charS);
        }
    }

    // If no conflicts were found, return true
    return true;
};

isIsomorphic("egg", "add"); // returns true
isIsomorphic("foo", "bar"); // returns false
isIsomorphic("paper", "title"); // returns true

