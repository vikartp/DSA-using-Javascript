/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
 */

var myPow = function(x, n) {
    // Solution1: Using Math.pow
    // return Math.pow(x,n);

    // Solution2: Using recursion
    // Time Complexity: O(logn)
    // Space Complexity: O(logn)
    if (n === 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    let half = myPow(x, Math.floor(n / 2));
    return n % 2 === 0 ? half * half : half * half * x;

    // Solution3: Using Iteration
    // Time Complexity: O(logn)
    // Space Complexity: O(1)
    // if (n === 0) return 1;
    // if (n < 0) {
    //     x = 1 / x;
    //     n = -n;
    // }

    // let result = 1;
    // while (n > 0) {
    //     if (n % 2 === 1) { // If n is odd
    //         result *= x;
    //     }
    //     x *= x;  // Square the base
    //     n = Math.floor(n / 2);  // Divide n by 2
    // }
    
    // return result;

    // Solution4: Using multiple
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    // if (n === 0) return 1;
    // if (n === 1) return x;
    // const absPower = Math.abs(n);
    // let multipleRes = 1;
    // for(let i = 0; i < absPower/2; i++) {
    //     multipleRes *= x;
    // }
    // multipleRes *= multipleRes;
    // if (n % 2 !== 0) {
    //     multipleRes = multipleRes / x;
    // }
    // return n > 0 ? multipleRes : 1 / multipleRes;
};

console.log(myPow(2.00000, 10)); // 1024.00000
console.log(myPow(2.10000, 3)); // 9.26100
console.log(myPow(2.00000, -2)); // 0.25000
console.log(myPow(2.00000, 0)); // 1.00000
console.log(myPow(2.00000, 1)); // 2.00000
