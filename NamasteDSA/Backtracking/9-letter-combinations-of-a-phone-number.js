/**
Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */
var letterCombinations = function(digits) {
    const result = [];
    if (!digits) return result;

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const backtrack = (index, path) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        const letters = phoneMap[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, path + letters[i]);
        }
    };

    backtrack(0, '');
    return result;
};

// Example usage:
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Time Complexity: O(n * 4^n) - The maximum number of combinations is 4^n, where n is the length of the input digits.
// Space Complexity: O(n) - The maximum depth of the recursion tree can go up to n.

/**
 * @param {string} digits
 * @return {string[]}
 * Note: This is another version of the same function with slightly different implementation using array for path.
 */
var letterCombinations2 = function(digits) {
    if (!digits) return [];
    const letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    const result = [];

    const backtrack = (path, index) => {
        // Note: path.length and index would always be same. We can use either of them.
        if (index === digits.length) {
            result.push(path.join(''));
            return;
        }
        const choices = letters[digits[index]];
        for (let i = 0; i < choices.length; i++) {
            path.push(choices[i]);
            backtrack(path, index+1);
            path.pop();
        }
    };

    backtrack([], 0);

    return result;
};