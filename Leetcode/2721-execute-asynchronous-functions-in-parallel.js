/**
 * Given an array of asynchronous functions functions, 
 * return a new promise promise. 
 * Each function in the array accepts no arguments and returns a promise. 
 * All the promises should be executed in parallel.

promise resolves:
When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

promise rejects:
When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
 */

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
      const results = new Array(functions.length);
      let completed = 0;
  
      if (functions.length === 0) {
        return resolve([]);
      }
  
      functions.forEach((fn, index) => {
      //   try {
          fn()
            .then(res => {
              results[index] = res;
              completed++;
  
              if (completed === functions.length) {
                resolve(results);
              }
            })
            .catch(err => reject(err));
      //   } catch (err) {
          // reject(err); // if fn() itself throws synchronously
      //   }
      });
    });
  };
  
  /**
   * const promise = promiseAll([() => new Promise(res => res(42))])
   * promise.then(console.log); // [42]
   */

  promiseAll([
    () => new Promise(res => setTimeout(() => res(1), 3000)),
    () => new Promise(res => setTimeout(() => res(2), 2000)),
    () => new Promise(res => setTimeout(() => res(3), 1000))
  ]).then(console.log).catch(console.error);
  
  // Output after ~300ms: [1, 2, 3]
  