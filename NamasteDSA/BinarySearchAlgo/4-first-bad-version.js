// https://leetcode.com/problems/first-bad-version/description/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1;
        let r = n;

        // while (l <= r) {
        while (l < r) {
            const m = l + Math.floor((r - l) / 2);
            const isMidBad = isBadVersion(m);
            // if (isMidBad && !isBadVersion(m - 1)) return m;
            
            if (!isMidBad) {
                l = m + 1
            } else {
                // r = m - 1;
                r = m;
            }
        }

        return r;
    };
};