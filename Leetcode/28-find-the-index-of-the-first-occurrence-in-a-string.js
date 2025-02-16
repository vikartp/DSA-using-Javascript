var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

// Function to find the first occurrence of a substring using sliding window
function findSubstringIndex(str, sub) {
    let n = str.length;
    let m = sub.length;

    // Edge case: if the substring is longer than the string, return -1
    if (m > n) return -1;

    // Sliding window
    for (let i = 0; i <= n - m; i++) {
        let matchFound = true;

        // Compare the substring with the current window
        for (let j = 0; j < m; j++) {
            if (str[i + j] !== sub[j]) {
                matchFound = false;
                break;
            }
        }

        // If a match is found, return the current index
        if (matchFound) {
            return i;
        }
    }

    // If no match is found, return -1
    return -1;
}

// Example usage
let text = "Hello, welcome to the world of JavaScript.";
let substring = "welcome";
let index = findSubstringIndex(text, substring);

console.log("The index of the first occurrence of the substring is:", index);
