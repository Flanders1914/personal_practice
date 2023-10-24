/**
300. Longest Increasing Subsequence
思路：dp
dp[i]表示以nums[i]结尾的increasing subsequence 的长度
dp[i] = max(dp[j]) j < i 且 nums[j] < nums[i]
最后返回dp中最大的值
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    for (let i = 1; i <= nums.length-1; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j]+1);
        }
    }
    return Math.max(...dp);
};
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));