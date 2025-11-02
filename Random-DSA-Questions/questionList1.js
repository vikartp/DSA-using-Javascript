// 1. Find Second Largest
// 2. Two Sum
// 3. Reverse a string
// 4. Check if palindrome
// 5. Factorial of a Number
// 6. Largest number in an Array
// 7. Remove duplicates
// 8. Count occurrence of a char in string
// 9. Find unique(Non-Repeating) Character
// 10. Flatten a nested Array
// 11. Check if two strings are anagrams

function findSecLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    let largest = -Infinity;
    let secLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secLargest = largest;
            largest = num;
        } else if (num < largest && num > secLargest) {
            secLargest = num;
        }
    }
    return secLargest
}

findSecLargest([2]);

function twoSum(arr, target) {
    const hashMap = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const diff = target - num;
        if (diff in hashMap) {
            return [hashMap[diff], i]
        } else {
            hashMap[num] = i;
        }
    }
}

twoSum([2,7,77,2,5], 9)

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString('hello')

function checkIfPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

checkIfPalindrome('Aba')

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

factorial(4)

function largestNum(arr) {
    let largest = -Infinity;
    for (let num of arr) {
        if (largest < num) {
            largest = num;
        }
    }
    return largest;
}

largestNum([-6,-8,-44,-1])

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

removeDuplicates([3,4,7,7,3,8])

function countChar(str, char) {
    // let count = 0;
    // for (let c of str) {
    //     if (c === char) {
    //         count++;
    //     }
    // }
    // return count;
    return str.split(char).length - 1;
}

countChar('test', 't')

function findFirstUniqChar(str) {
    for (let c of str) {
        if (str.indexOf(c) === str.lastIndexOf(c)) {
            return c;
        }
    }
    return null;
}

findFirstUniqChar('test')

function flattenArr(arr) {
    return arr.flat(Infinity)
}

flattenArr([3,5,[6,7],[8,9,[10]]])

function checkAnagram(a, b) {
    return a.split('').sort().join('') === b.split('').sort().join('');
}

checkAnagram('eat', 'tea')