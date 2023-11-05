/*
350. Intersection of Two Arrays II
思路：使用map做hash表
 */
var intersect = function(nums1, nums2) {
    let hash = new Map();
    for (let num of nums1) {
        if (hash.has(num)) hash.set(num, hash.get(num)+1);
        else hash.set(num, 1);
    }
    let res = [];
    for (let num of nums2) {
        if (hash.get(num) > 0) {
            res.push(num);
            hash.set(num, hash.get(num)-1);
        }
    }
    return res;
};