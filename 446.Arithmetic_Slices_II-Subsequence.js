/**
446. Arithmetic Slices II - Subsequence
思路：dp
dp[i] 存储一个hash表，表示以nums[i]结尾，间距为hash值，个数2个及以上 arithmetic subsequences的个数
若 dp[j].has(diff) diff == dp[i] - dp[j]
那么ans += dp[j].get(diff) 同时更新i自身的hash值 hash[i].get(diff) += hash[j].get(diff) +1
其意义是加上最后两项为nums[j] nums[j] diff = nums[j] - nums[i] 的arithmetic subsequences的个数
注意如果 dp[j]没有diff项，dp[i]也要让其 hash值 dp[i].get(diff) += 1;
 */
var numberOfArithmeticSlices = function(nums) {
    let res = 0;
    let dp = new Array(nums.length).fill().map(() => new Map());
    for (let i = 1; i <= nums.length-1; i++) {
        for (let j = 0; j <= i-1; j++) {
            let diff = nums[i] - nums[j];
            if (dp[j].has(diff)) {
                let temp = dp[j].get(diff);
                res += temp;
                dp[i].set(diff, (dp[i].get(diff)??0) + temp+1);
            } else dp[i].set(diff, (dp[i].get(diff)??0)+1);
        }
    }
    return res;
};
console.log(numberOfArithmeticSlices([2,2,3,4]));