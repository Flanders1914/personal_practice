/**
376. Wiggle Subsequence
思路：dp 
dp1 储存坐标i之前 规律是上下这种subsequence 的长度
dp2 储存坐标i之前 规律是下上这种subsequence 的长度
当存在差值即方向可能改变
每次的 pre 为最近一个前面的值不同的nums
 */
/*
var wiggleMaxLength = function(nums) {
    if (nums.length == 1) return 1;
    else if (nums.length == 2) {
        if (nums[0] == nums[1]) return 1;
        else return 2;
    }
    let dp1 = new Array(nums.length).fill(0);
    let dp2 = new Array(nums.length).fill(0);
    dp1[0] = 1;
    dp2[0] = 1;
    for (let i = 1; i <= nums.length-1; i++) {
        for (let k = i-1; k >=0; k--) {
            if (nums[i] > nums[k]) dp1[i] = Math.max(dp1[i], dp2[k] +1);
            else if (nums[i] < nums[k]) dp2[i] = Math.max(dp2[i], dp1[k] + 1);
        }
    }
    return Math.max(Math.max(...dp1), Math.max(...dp2));
};
*/
var wiggleMaxLength = function(nums) {
    dp1 = 1;
    dp2 = 1;
    let pre = nums[0];
    for (let i = 1; i <= nums.length-1; i++) {
        if (nums[i] == pre) continue;
        if (nums[i] > pre) dp1 = dp2 +1;
            else if (nums[i] < pre) dp2 = dp1 + 1;
        pre = nums[i];
    }
    return Math.max(dp1, dp2);
};
console.log(wiggleMaxLength([1,7,4,9,2,5]));