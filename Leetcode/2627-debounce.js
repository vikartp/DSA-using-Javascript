/**
 * Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.
 */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, t)
    }
};

// Example usage:
const debouncedFn = debounce((message) => {
    console.log(message);
}, 1000);

debouncedFn("Hello, World!"); // This will be logged after 1 second if no other calls are made within that time.
debouncedFn("Hello again!"); // This will cancel the previous call and reset the timer