/**
673. Number of Longest Increasing Subsequence
思路1：二维dp 时间复杂度Onlogn
描述子问题：先求前i个num中以nums[i]为结尾的最长字串的个数
len[i] 标记以nums[i]为结尾的最长字串的长度
第二个循环从i-1 到 0
若当前len[j] + 1 == len[i] 更新 dp[i] += dp[j]
若当前len[j] + 1 > len[i] 
同时更新 dp[i] = dp[j] len[i] = len[j] +1

最后我们找出最长字串的长度并统计个数
 */
var findNumberOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);
    const len = new Array(nums.length).fill(1);
    for (let i = 1; i <= nums.length-1; i++) {
        for (let k = i-1; k >= 0; k--) {
            if (nums[i] > nums[k]) {
                if (len[i] == (len[k]+1)) {
                    dp[i] += dp[k];
                } else if (len[i] < (len[k]+1)) {
                    dp[i] = dp[k];
                    len[i] = len[k] +1;
                }
            }
        }
    }

    let max = 0;
    for (let n of len) {
        max = Math.max(max, n);
    }
    let res = 0;
    for (let i = 0; i <= len.length-1; i++) {
        if (len[i] == max) res += dp[i];
    }
    return res;
};
console.log(findNumberOfLIS([1,2,4,3,5,4,7,2]));