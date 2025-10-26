/**
 * https://leetcode.com/problems/n-queens/
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard 
 * such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle. 
 * You may return the answer in any order.
 * Each solution contains a distinct board configuration of the n-queens’ placement, 
 * where 'Q' and '.' both indicate a queen and an empty space, respectively.
 * 
Example 1:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

Example 2:
Input: n = 1
Output: [["Q"]]

Constraints:
1 <= n <= 9
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    // Initialize the chess board
    const board = Array.from({length:n}, () => Array(n).fill('.'));
    // Helper function to transform the board into the required format
    const transform = (arr) => {
        const formatted = [];
        for(const a of arr) {
            formatted.push(a.join(''));
        }
        return formatted;
    }

    const backtrack = (board, row, columnSet, diaSet, antiDiaSet) => {
        // Base case: If all queens are placed
        if (row === n) {
            result.push(transform(board));
        }
        for (let col = 0; col < n; col++) {
            // Skip if the column or diagonals are already occupied
            if ( columnSet.has(col) || diaSet.has(row-col) || antiDiaSet.has(row+col)) continue;
            // Place the queen and mark the sets
            board[row][col] = 'Q';
            columnSet.add(col);
            diaSet.add(row-col);
            antiDiaSet.add(row+col);
            // Move to the next row
            backtrack(board, row+1, columnSet, diaSet, antiDiaSet);
            // Backtrack: Remove the queen and unmark the sets
            board[row][col] = '.';
            columnSet.delete(col);
            diaSet.delete(row-col);
            antiDiaSet.delete(row+col);
        }
    };

    backtrack(board, 0, new Set(), new Set(), new Set());
    return result;
};

// Example usage:
console.log(solveNQueens(4)); 
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

// Time Complexity: O(N!) where N is the number of queens (or the size of the board).
// Space Complexity: O(N^2) for the chess board representation.