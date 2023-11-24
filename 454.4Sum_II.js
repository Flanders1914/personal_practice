/**
454. 4Sum II
思路：空间换时间
将num1-num4 分为两部分
num1 + num2 = -num3 - num4
用hash表存储左边的取值集合
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let hash = new Map();
    let res = 0;
    for (let num1 of nums1) {
        for (let num2 of nums2) {
            if (hash.has(num1+num2)) hash.set(num1+num2, hash.get(num1+num2)+1);
            else hash.set(num1+num2, 1);
        }
    }
    for (let num3 of nums3) {
        for (let num4 of nums4) {
            let target = -(num3 + num4);
            if (hash.has(target)) res += hash.get(target);
        }
    }
    return res;
};