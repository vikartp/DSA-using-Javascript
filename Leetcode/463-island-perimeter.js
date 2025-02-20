/**
 * You are given a 2D grid of 1s (land) and 0s (water), 
 * where 1 represents land and 0 represents water. 
 * The grid represents an island surrounded by water. 
 * The task is to calculate the perimeter of the island. 
 * The island is formed by land cells connected horizontally or vertically, 
 * and water surrounds it.
 */

var islandPerimeter = function (grid) {
    if (grid.length === 0) return 0;
    let perimeter = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                // Check neighbors (up, down, left, right) to avoid double counting shared edges
                if (i > 0 && grid[i - 1][j] === 1) { // check above
                    perimeter -= 2;
                }
                if (j > 0 && grid[i][j - 1] === 1) { // check left
                    perimeter -= 2;
                }
            }
        }
    }
    return perimeter;
};

let grid = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1]
];

console.log(islandPerimeter(grid));  // Output: 16
