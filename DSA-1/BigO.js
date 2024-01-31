/**
 * Any scenario of data operation will have three representation cases:
 * Omega(Ω): Best case
 * Theta(Θ): Average case
 * Omicron(O-> Big O): Worst case (We focus most on this)
 */

/**
 * Time complexity: How much time a particular code takes to run (More focus on this only)
 * Space complexity: How much space a particular code takes to run (Important to keep in mind). This is almost same for all data structures.
 */

/**
 * Big O: O(n)=> Time taken by code is proportional to the n
 */
// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// logItems(10)

/**
 * Big O: Drop constant=> If you see the below code it takes O(2n), but we remove the constant to analyze and consider it O(n)
 * 2n is just an example, it can be 20n, 30n etc.
 */
// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }

//     for (let j = 0; j < n; j++) {
//         console.log(j)
//     }
// }

// logItems(3)

/**
 * Big O: O(n^2)=>
 */
// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i, j)
//         }
//     }
// }

// logItems(10)

// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             for (let k = 0; k < n; k++) {
//                 console.log(i, j, k)
//             }
//         }
//     }
// }

// logItems(10)

/**
 * Big O: Drop Non-Dominants => O(n^2) + O(n) => O(n^2 + n) => O(n^2)
 * Notes: 'n' is not significant as compared to n^2 operation
 */
// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i, j)
//         }
//     }

//     for (let k = 0; k < n; k++) {
//         console.log(k)
//     }
// }

// logItems(10)

/**
 * Big O: O(1) => This is also known as constant number of operation irrespective of arguments to the function.
 * This doesn't mean only one operation. This is simplified as constant number of operation.
 * This is the best Big O operation. It's most efficient.
 */
// function add(n) {
//     return n + n + n
// }

// console.log(add(85))
// console.log(add(185))
// console.log(add(81115))

/**
 * O(log n): Second most efficient operation
 * It is based on "Divide and Conquer"
 * Example: If an array contains 8(1 to 8) elements and we have to find 1 then we start dividing it. In 3 operation we find 1.
 * Similarly, It takes only 31 operation if that array contains 2147483648 elements
 */

/**
 * O(nlogn): Most efficient sorting algorithm
 */

/**
 * Big O: Different terms for input => O(a+b), O(a*b)
 * If a function operates on two different inputs like a and b, we define Big O like above.
 * ? Since we don't know which one is bigger between a and b.
 * ! They are not O(n) and O(n^2)
 */

// function logItems(a,b) {
//     for (let i = 0; i < a; i++) {
//         console.log(i)
//     }

//     for (let j = 0; j < b; j++) {
//         console.log(j)
//     }
// }

// function logItems(a,b) {
//     for (let i = 0; i < a; i++) {
//         for (let j = 0; j < b; j++) {
//             console.log(i, j)
//         }
//     }
// }

/**
 * Big O: Arrays
 * Notes: push & pop are O(1), shift & unshift are O(n). Adding/Removing items in between array is also O(n)
 * ! If adding/removing at the start or in between is frequent operation then array shouldn't be used
 */

// const numbers = [13, 45, 23, 45]

// numbers.push(300); // O(1)
// numbers.pop(); // O(1)

// numbers.shift(); // O(n): Since it's going to re-index whole array
// numbers.unshift(56); // O(n)

// numbers.splice(1, 0, 5634); // O(n): because of re-indexing
// numbers.splice(1, 1); // O(n)

// console.log(numbers);

/**
 * Important terms:
 * O(n^2): loop within a loop
 * O(n): proportional
 * O(logn): divide and conquer
 * O(1): constant
 */