//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the length of the longest     |
//   |   consecutive sequence of integers in the given     |
//   |   array.                                            |
//   |                                                     |
//   | Return type: number                                 |
//   | - Returns the length of the longest consecutive     |
//   |   sequence.                                         |
//   | - Returns 0 if the array is empty.                  |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use a Set to track unique numbers.        |
//   | - The function iterates through each unique number  |
//   |   and finds streaks of consecutive numbers.         |
//   +=====================================================+


// function longestConsecutiveSequence(nums) {
//     const uniqueNums = new Set(nums);
//     let highestSeq = 0;
//     for(const num of uniqueNums) {
//         let temp = num;
//         let count = 0;
//         while(uniqueNums.has(temp)) {
//             count++;
//             temp++;
//         }
//         if (highestSeq < count) {
//             highestSeq = count;
//         }
//     }
//     return highestSeq;
// }


// Declare the function named "longestConsecutiveSequence"
// It takes an array "nums" as its argument
function longestConsecutiveSequence(nums) {

    // Create an empty Set to store unique numbers from "nums"
    const numSet = new Set();

    // Loop through each number in "nums"
    for (const num of nums) {

        // Add each number to "numSet"
        numSet.add(num);
    }

    // Initialize a variable to keep track of the longest consecutive sequence
    let longestStreak = 0;

    // Loop through each unique number in "numSet"
    for (const num of numSet) {

        // Check if the number just smaller than the current number exists
        // If it does not exist, then this number is the start of a new sequence
        if (!numSet.has(num - 1)) {

            // Initialize variables to keep track of the current number
            // and the length of the sequence starting from this number
            let currentNum = num;
            let currentStreak = 1;

            // Check if the number just greater than the current number exists
            // If it does, extend the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Update "longestStreak" if "currentStreak" is longer
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    // Return the length of the longest consecutive sequence
    return longestStreak;
}

// -------------------
// No Consecutive Sequence
// -------------------
console.log("No Consecutive Sequence:");
console.log("Input: [1, 3, 5]");
console.log("Output: ", longestConsecutiveSequence([1, 3, 5]));
console.log("---------------");

// -------------------
// Single Element
// -------------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", longestConsecutiveSequence([1]));
console.log("---------------");

// -------------------
// Consecutive Sequence
// -------------------
console.log("Consecutive Sequence:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output: ", longestConsecutiveSequence([1, 2, 3, 4, 5]));
console.log("---------------");

// -------------------
// Unordered Input
// -------------------
console.log("Unordered Input:");
console.log("Input: [5, 2, 3, 1, 4]");
console.log("Output: ", longestConsecutiveSequence([5, 2, 3, 1, 4]));
console.log("---------------");

// -------------------
// Empty Array
// -------------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", longestConsecutiveSequence([]));
console.log("---------------");

// -------------------
// Multiple Sequences
// -------------------
console.log("Multiple Sequences:");
console.log("Input: [1, 2, 3, 10, 11, 12]");
console.log("Output: ", longestConsecutiveSequence([1, 2, 3, 10, 11, 12]));
console.log("---------------");


