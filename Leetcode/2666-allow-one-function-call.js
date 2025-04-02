/**
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    // Using counter and apply()
    // let counter = 0;
    // return function(...args){
    //     counter++;
    //     if (counter < 2) {
    //         return fn.apply(this, args)
    //     } else  {
    //         return undefined;
    //     }
    // }

    // Using boolean flag and normal function call
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
