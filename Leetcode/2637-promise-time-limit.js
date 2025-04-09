/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// var timeLimit = function (fn, t) {

//     return async function (...args) {
//         const promise = [
//             new Promise(resolve => resolve(fn(...args))), // Promise that resolves with the result of executing fn(...args)
//             new Promise((resolve, reject) => setTimeout(() => reject('Time Limit Exceeded'), t)) //Promise that rejects with 'Time Limit Exceeded' after t milliseconds
//         ]
//         // Return a new promise that resolves or rejects as soon as one of the promises in the array settles
//         return Promise.race(promise);
//     }
// };

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

 /**
 * @param {Function} fn
 * @param {number} t - time limit in ms
 * @return {Function}
 */
 var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((res) => {
                    clearTimeout(timer);
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timer);
                    reject(err);
                });
        });
    };
};

const limited = timeLimit(async (n) => {
    await new Promise(res => setTimeout(res, n));
    return "Completed";
}, 100);

limited(150).catch(console.log); // Output: "Time Limit Exceeded"
limited(50).then(console.log);   // Output: "Completed"
