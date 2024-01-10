/**
674. Longest Continuous Increasing Subsequence
欺骗感情不是经典递归题
 */
var findLengthOfLCIS = function(nums) {
    let res = 1;
    let len = 1;
    for (let i = 1; i <= nums.length-1; i++) {
        if (nums[i] > nums[i-1]) {
            len++;
        } else {
            res = Math.max(res, len);
            len = 1;
        }
    }
    return Math.max(len, res);
};