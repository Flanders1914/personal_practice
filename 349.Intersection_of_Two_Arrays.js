/**
349. Intersection of Two Arrays
思路：使用set
 */
var intersection = function(nums1, nums2) {
    let set = new Set();
    let res = [];
    for (let num of nums1) {
        if (!set.has(num)) set.add(num);
    }
    for (let num of nums2) {
        if (set.has(num)) {
            res.push(num);
            set.delete(num);
        }
    }
    return res;
};