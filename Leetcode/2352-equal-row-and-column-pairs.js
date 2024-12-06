/**
 * Given a 0-indexed n x n integer matrix grid, 
 * return the number of pairs (ri, cj) such that row ri and column cj are equal.
 * A row and column pair is considered equal if they contain the same elements
 * in the same order (i.e., an equal array).
 */

function equalPairs(grid) {
    const n = grid.length;

    // Map to store the frequency of rows
    const rowMap = new Map();

    // Convert rows into strings and count their frequencies
    for (let row of grid) {
        const rowKey = row.join(','); // Convert row to a string (e.g., "3,2,1")
        rowMap.set(rowKey, (rowMap.get(rowKey) || 0) + 1);
    }

    let count = 0;

    // Iterate through each column
    for (let col = 0; col < n; col++) {
        let colKey = [];
        for (let row = 0; row < n; row++) {
            colKey.push(grid[row][col]); // Collect column values
        }
        colKey = colKey.join(','); // Convert column to a string (e.g., "3,1,2")

        // Check if the column matches any row in the map
        if (rowMap.has(colKey)) {
            count += rowMap.get(colKey); // Add the frequency of the matching row
        }
    }

    return count;

    // Time Complexity: O(n^2)
    // Space Complexity: O(n^2) in the worst case

    // Alternate approach:
    // const row = {};
    // const column = {};

    // const gridSize = grid.length;
    // for (let index = 0; index < gridSize; index++) {
    //     row[index] = grid[index].join('-');
    // }

    // for (let index = 0; index < gridSize; index++) {
    //     let vChar = '';
    //     let j = 0;
    //     while (j < gridSize) {
    //         vChar += grid[j][index];
    //         vChar += '-';
    //         j++;
    //     }
    //     column[index] = vChar.slice(0,vChar.length - 1)
    // }

    // let count = 0;
    // for (let r of Object.values(row)) {
    //     for (let c of Object.values(column)) {
    //         if (r === c) count++;
    //     }
    // }
    // return count;
}

const grid = [
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7]
];
console.log(equalPairs(grid)); // Output: 1
