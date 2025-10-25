// https://leetcode.com/problems/word-search/description/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let result = false;
    const m = board.length;
    const n = board[0].length;

    const backtrack = (x, y, nextIndex) => {
        if (result) return;
        if (nextIndex === word.length) {
            result = true;
        }
        // Mark the cell as visited
        const currChar = board[x][y];
        board[x][y] = '$'
        // Explore neighbors
        if (y > 0 && board[x][y-1] === word[nextIndex]) {
            backtrack(x, y-1, nextIndex + 1);
        }
        if (y < n-1 && board[x][y+1] === word[nextIndex]) {
            backtrack(x, y+1, nextIndex + 1);
        }
        if (x > 0 && board[x-1][y] === word[nextIndex]) {
            backtrack(x-1, y, nextIndex + 1);
        }
        if (x < m-1 && board[x+1][y] === word[nextIndex]) {
            backtrack(x+1, y, nextIndex + 1);
        }
        // Unmark the cell
        board[x][y] = currChar;
    }
    // Start backtracking from each cell that matches the first character of the word
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                // Start backtracking from this cell
                backtrack(i, j, 1);
            }
        }
    }

    return result;
};

// Example usage:
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")); // false

// Time Complexity: O(N * 3^L) where N is the number of cells in the board and L is the length of the word.
// Space Complexity: O(L) for the recursion stack.