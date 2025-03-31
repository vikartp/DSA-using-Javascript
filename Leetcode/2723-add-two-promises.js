/**
 * Given two promises promise1 and promise2, return a new promise. 
 * promise1 and promise2 will both resolve with a number. 
 * The returned promise should resolve with the sum of the two numbers.
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Using Promise.all
    // const [res1, res2] = await Promise.all([
    //     promise1,
    //     promise2
    // ]);

    // return new Promise(resolve => resolve(res1 + res2))

    // Using new Promise
    const r1 = await promise1;
    const r2 = await promise2;
    return new Promise(resolve => resolve(r1 + r2));
    // Using simple await
    // return await promise1 + await promise2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */