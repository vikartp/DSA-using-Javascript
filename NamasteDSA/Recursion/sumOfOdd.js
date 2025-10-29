/**
 * Sum of all odd numbers in an array using recursion
 */
const randomArr = [50, 2, 0, 3, 6, 7, 5];

function sumOdd(i) {
    const isOdd = randomArr[i] % 2 !== 0;
    if (i === 0) {
        return isOdd ? randomArr[0] : 0;
    }

    return (isOdd ? randomArr[i] : 0) + sumOdd(i - 1);
}

sumOdd(randomArr.length - 1); // Output: 15 (3 + 7 + 5)

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursion stack