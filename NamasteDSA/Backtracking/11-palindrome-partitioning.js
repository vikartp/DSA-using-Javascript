/**
 Given a string s, partition s such that every substring of the partition is a palindrome. 
 Return all possible palindrome partitioning of s.

Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:
Input: s = "a"
Output: [["a"]]
 
Constraints:
1 <= s.length <= 16
s contains only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];

    const isPalindrome = (str) => {
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            if (str[i++] !== str[j--]) {
                return false;
            }
        }
        return true;
    }

    const backtrack = (path, remainingStr) => {
        if (remainingStr.length === 0) {
            result.push([...path]);
            return;
        }

        for (let i = 1; i <= remainingStr.length; i++) {
            // Get the current choice
            const choice = remainingStr.substring(0, i);
            // Only proceed if the choice is a palindrome
            if (!isPalindrome(choice)) continue;

            path.push(choice);
            // Recurse with the remaining string
            backtrack(path, remainingStr.substring(i));
            path.pop();
        }
    }

    backtrack([], s);

    return result;
};

// Example usage:
console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
// Time Complexity: O(N * 2^N) where N is the length of the string s. 
// In the worst case, we can have 2^(N-1) partitions and checking each partition for palindrome takes O(N) time.
// Space Complexity: O(N) for the recursion stack and path storage. The output space can be O(N * 2^N) in the worst case to store all partitions.