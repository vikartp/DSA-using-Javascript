/**
 * Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Two Pointer Approach
    arr1.sort((a,b)=> a.id - b.id);
    arr2.sort((a,b)=> a.id - b.id);

    let index1 = 0;
    let index2 = 0;
    let result = [];

    while (index1 < arr1.length && index2 < arr2.length) {
        const item1 = arr1[index1];
        const item2 = arr2[index2];

        if (item1.id < item2.id) {
            result.push(item1);
            index1++;
        } else if (item1.id > item2.id) {
            result.push(item2);
            index2++;
        } else { // Same id
            result.push({...item1, ...item2});
            index1++;
            index2++;
        }
    }

    while (index1 < arr1.length) {
        const item1 = arr1[index1];
        result.push(item1);
        index1++;
    }

    while (index2 < arr2.length) {
        const item2 = arr2[index2];
        result.push(item2);
        index2++;
    }

    return result;

    // Brute-Force Approach
    // let res = [];
    // const finder = id => {
    //     const index = arr2.findIndex(e => e.id === id);
    //     if(index === -1) return {};

    //     const item = arr2.find(e => e.id === id);
    //     arr2.splice(index, 1);
    //     return item;
    // }

    // for(const item1 of arr1) {
    //     const item2 = finder(item1.id);
    //     const finalItem = {...item1, ...item2};
    //     res.push(finalItem);
    // }

    // res = [...res, ...arr2];
    // return res.sort((a, b) => a.id - b.id);
};