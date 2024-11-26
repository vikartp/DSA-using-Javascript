/**
 * For two strings s and t, we say "t divides s" if and only if 
 * s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times). 
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 */

function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return str1.slice(0, gcd(str1.length, str2.length));
}

console.log(gcdOfStrings('ABCABC', 'ABC')); // ABC

console.log(gcdOfStrings('ABABAB', 'ABAB')); // AB

console.log(gcdOfStrings('LEET', 'CODE')); // ''

console.log(gcdOfStrings('ABCDEF', 'ABC')); // ''

console.log(gcdOfStrings('ABCDEF', 'ABCDEF')); // ABCDEF

console.log(gcdOfStrings('ABCDEF', 'ABCDEFABCDEF')); // ABCDEF

console.log(gcdOfStrings('ABCDEFABCDEF', 'ABCDEF')); // ABCDEF