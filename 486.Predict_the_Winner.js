/**
 486. Predict the Winner
 思路：二维dp
 对于dp[i][j] 表示对于nums坐标区间[i,j] 第一个选数的人能够获得的最大的数字选择和
因此 若 i == j dp[i][j] = nums[i];
若 i < j dp[i][j] = max(nums[i]+nums从i+1到j的总和-dp[i+1,j], nums[j]+nums从i到j-1的总和-dp[i][j-1])
即挑选左或右端点，由于主动权交换，剩下的区间能选到的数字和为另外一位玩家选择最大和剩下的数字和
用一个span数组方便取得任意区间的nums和
 */
var predictTheWinner = function(nums) {
    let span  = new Array(nums.length+1).fill(0);
    let total = 0;
    for (let i = 0; i <= nums.length-1; i++) {
        span[i+1] = nums[i] + span[i];
        total += nums[i];
    }
    let dp = new Array(nums.length).fill().map(() => new Array(nums.length).fill(0));
    for (let k = 0; k <= nums.length-1; k++) {
        for (let i = 0; i+k <= nums.length-1; i++) {
            if (k == 0) dp[i][i+k] = nums[i];
            else dp[i][i+k] = Math.max(nums[i] + span[i+k+1]-span[i+1] - dp[i+1][i+k],
                nums[i+k] + span[i+k]-span[i] - dp[i][i+k-1]);
        }
    }
    if (dp[0][nums.length-1] >= total - dp[0][nums.length-1]) return true;
    else return false;
};
console.log(predictTheWinner([1,5,233,7]));