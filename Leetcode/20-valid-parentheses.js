/**
 * Given a string s containing just the characters
 *  '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 */

// First Solution- The current implementation of the isValid function only checks if the counts of opening and closing parentheses match,
// but it doesn't ensure that they are properly nested
function isValidF(s) {
    const parenStore = {
        '(': 0,
        '{': 0,
        '[': 0,
        ')': 0,
        '}': 0,
        ']': 0,
    };
    for(const char of s) {
        parenStore[char]++;
    }
    if (parenStore['('] === parenStore[')'] && parenStore['{'] === parenStore['}'] && parenStore['['] === parenStore[']']) return true;
    return false;
}


// Best Solution - To fix this, we can use a stack to ensure that each opening parenthesis has a corresponding closing parenthesis in the correct order.
// This approach ensures that the parentheses are not only balanced but also properly nested.
function isValid(s) {
    const stack = [];
    const parenMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // console.time('for loop');
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== parenMap[char]) {
                return false;
            }
        }

        // Another approach with O(n) time complexity for comparison(above approach is also O(1) time complexity)
        // if(['(', '[', '{'].includes(char)) {
        //     stack.push(char)
        // } else if ([')', ']', '}'].includes(char)) {
        //     if (stack.length === 0 || stack.pop() !== parenMap[char]) {
        //         return false;
        //     }
        // }
    }
    // console.timeEnd('for loop');

    return stack.length === 0;
}

// Test cases in nested array format
const testCases = [
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["([)]", false],
    ["{[]}", true],
    ["", true],
    ["(((((((())))))))", true],
    ["(((()))", false],
    ["((((((((((((((((((((((((((()))))))", false],
    ["((((((((())", false],
    ["[(]()", false]
];

// Function to iterate through test cases and check results
function runTests() {
    console.time('All tests time taken');
    for (const [input, expected] of testCases) {
        if (isValid(input) !== expected) {
            console.log(`Test failed for input: ${input}`);
            return;
        }
    }
    console.timeEnd('All tests time taken');
    console.log('All Passed');
}

// Run the tests
runTests();