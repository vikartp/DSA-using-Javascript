/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};
    for(const item of this) {
        const key = fn(item);
        if (result[key]) {
            result[key].push(item);
        } else {
            result[key] = [item];
        }
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// Example usage:
const arr = [1, 2, 3, 4, 5];
const grouped = arr.groupBy((x) => x % 2 === 0 ? 'even' : 'odd');
console.log(grouped); // { odd: [ 1, 3, 5 ], even: [ 2, 4 ] }
