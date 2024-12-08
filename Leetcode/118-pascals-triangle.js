/**
 * Pascal's Triangle is a triangular array where each number is the 
 * sum of the two numbers directly above it in the previous row.
 * 
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 */

function generatePascalTriangle(numRows) {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1); // Create a row with 1's

        for (let j = 1; j < i; j++) {
            // Each element is the sum of the two numbers above it
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row); // Add the row to the triangle
    }

    return triangle;

    // Time complexity: O(n^2)
    // Space complexity: O(n^2)

    // Another approach(beats 100% of submissions):
    // let triangle = [[1]];
    // let prevRowCount = 1;
    // while (prevRowCount < numRows) {
    //     let prevRow = triangle[prevRowCount-1];
    //     let newRow = Array.from({length: prevRowCount+1});
    //     newRow[0]=1;
    //     newRow[prevRowCount]=1;
    //     for (let i = 1; i < newRow.length -1; i++) {
    //         newRow[i] = prevRow[i-1] + prevRow[i];
    //     }
    //     triangle.push(newRow);
    //     prevRowCount++;
    // }
    // return triangle;
}

// Example usage:
const numRows = 5;
console.log(generatePascalTriangle(numRows));
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]  