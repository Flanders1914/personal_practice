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
 * 278. First Bad Version
思路：变形的二分查找
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0, r = n;
        while (l <= r) {
            let mid = Math.floor((l+r)/2);
            if (mid == l || mid == r) {
                if (isBadVersion(mid)) {
                    if (isBadVersion(l)) return l;
                    else return mid;
                }
                else return r;
            }
            if (isBadVersion(mid)) r = mid;
            else l = mid+1;
        }
    };
};