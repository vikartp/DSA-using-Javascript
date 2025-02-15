var maximalSquare = function(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;

    let m = matrix.length, n = matrix[0].length;
    let prev = Array(n + 1).fill(0), curr = Array(n + 1).fill(0);
    let maxSide = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] === "1") {
                curr[j] = Math.min(prev[j], curr[j - 1], prev[j - 1]) + 1;
                maxSide = Math.max(maxSide, curr[j]);
            } else {
                curr[j] = 0;
            }
        }
        [prev, curr] = [curr, prev]; // Swap rows
    }

    return maxSide * maxSide;
};

// Time Complexity: O(m * n)
// Space Complexity: O(n)
// Test Cases
console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])); // 4
console.log(maximalSquare([["0", "1"], ["1", "0"]])); // 1
console.log(maximalSquare([["0"]])); // 0