/**
 * Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
 */

var cancellable = function(fn, args, t) {
    // Call the function immediately
    fn(...args);

    // Start setInterval to repeatedly call the function every t ms
    const intervalId = setInterval(() => fn(...args), t);

    // Return a function that cancels the interval
    return () => clearInterval(intervalId);
};

// Example Usage:
const fn = (x) => console.log(x);
const cancelFn = cancellable(fn, [42], 1000); // Calls fn(42) immediately, then every 1s

setTimeout(cancelFn, 5000); // Cancels execution after 5 seconds
