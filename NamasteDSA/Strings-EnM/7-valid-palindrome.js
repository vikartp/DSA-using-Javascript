/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Approach 1:
    // s = s.toLowerCase();
    // const sanitizedStr = s.match(/[a-zA-Z0-9]+/g)?.join('');
    // return sanitizedStr === sanitizedStr?.split('').reverse().join('');

    // Approach 2:
    // const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // const reversed = cleaned.split('').reverse().join('');

    // return cleaned === reversed;

    // Approach 3:
    // s = s.toLowerCase();
    // let filtered = '';
    // for (const char of s) {
    //     if (char.match(/[a-zA-Z0-9]/g)) {
    //         filtered += char;
    //     }
    // }
    // const reversed = filtered.split('').reverse().join('');
    // return filtered === reversed

    // All three approaches above has Time Complexity of O(n) and Space Complexity of O(n)

    // Use two pointer, Time: O(n), Space(1)
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (!s[left].match(/[a-z0-9]/g)) {
            left++;
            continue;
        }
        if (!s[right].match(/[a-z0-9]/g)) {
            right--;
            continue;
        }
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};