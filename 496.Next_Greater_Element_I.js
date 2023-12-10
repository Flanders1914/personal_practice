/**
496. Next Greater Element I
思路 stack 和 hash表结合
 */
var nextGreaterElement = function(nums1, nums2) {
    let right = new Array(nums2.length).fill(-1);
    let res = [];
    let hash = new Map();
    for (let num1 of nums1) {
        hash.set(num1, -1);
    }
    right[right.length-1] = -1;
    let stack = [nums2.at(-1)];
    if (hash.has(nums2.at(-1))) hash.set(nums2.at(-1), nums2.length-1);

    for (let i = nums2.length-2; i >= 0; i--) {
        if (hash.has(nums2[i])) hash.set(nums2[i], i);
        while (stack.length && stack.at(-1) <= nums2[i]) stack.pop();
        if (stack.length) {
            right[i] = stack.at(-1);
            stack.push(nums2[i]);
        } else {
            right[i] = -1;
            stack.push(nums2[i]);
        }
    }
    for (let num1 of nums1) {
        res.push(right[hash.get(num1)]);
    }
    return res;
};
let nums1 = [4,1,2], nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1, nums2));