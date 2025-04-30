/**
 * Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj
            .filter(Boolean)
            .map(compactObject);
    } else if (obj !== null && typeof obj === "object") {
        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
            const compacted = compactObject(value);
            if (Boolean(compacted) || (typeof compacted === "object" && compacted !== null && Object.keys(compacted).length > 0)) {
                newObj[key] = compacted;
            }
        }
        return newObj;
    } else {
        return obj;
    }
};
