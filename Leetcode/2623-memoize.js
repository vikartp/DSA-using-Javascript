/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

let callCount = 0;
const memoizedFn = memoize(function(a, b) {
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(2, 3)); // 5, callCount = 1
console.log(memoizedFn(2, 3)); // 5, callCount still = 1 (cached)
console.log(memoizedFn(3, 4)); // 7, callCount = 2
