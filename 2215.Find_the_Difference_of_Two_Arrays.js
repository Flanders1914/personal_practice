/**
2215. Find the Difference of Two Arrays
水题
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let res1 = [];
    for (let num of set1) {
        if (!set2.has(num)) res1.push(num);
    }
    let res2 = [];
    for (let num of set2) {
        if (!set1.has(num)) res2.push(num);
    }
    return [res1, res2];
};