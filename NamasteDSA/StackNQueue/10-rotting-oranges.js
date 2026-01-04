// https://leetcode.com/problems/rotting-oranges/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];

    // Find all rotten oranges and put their position in queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }

    let maxTime = 0;
    // Mark all adjacent rotten and keep doing this until the queue is empty
    while (queue.length) {
        const [x, y, level] = queue.shift();
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1])
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1])
        }
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1])
        }
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1])
        }
        maxTime = Math.max(maxTime, level);
    }

    // Check if there is any fresh left
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return maxTime;
};

// Time Complexity: O(m*n)
// Space Complexity: O(m*n) in worst case when all oranges are rotten