/**
1335. Minimum Difficulty of a Job Schedule
思路：
dp
dp[i][j] 表示用j天完成前i个任务的总难度值
对于dp[i][j] 我们只需考虑当前这一天完成了多少任务
这一天我们可以完成最少第i个任务，最多完成j，j+1, j+2...i-1, i 这些任务
因为我们要预留前j-1个任务给前j-1天做
计算所有这些情况，选取最小的总难度和，为dp[i][j]
 */
var minDifficulty = function(jobDifficulty, d) {
    const dp = new Array(jobDifficulty.length+1).fill().map(() => new Array(d+1).fill(0));
    if (jobDifficulty.length < d) return -1;
    for (let i = 1; i <= jobDifficulty.length; i++) {
        dp[i][1] = Math.max(dp[i-1][1], jobDifficulty[i-1]);
        for (let j = 2; (j <= d) && (j <= i); j++) {
            dp[i][j] = dp[i-1][j-1] + jobDifficulty[i-1]
            let max = jobDifficulty[i-1];
            for (let k = i-1; k > j-1; k--) {
                max = Math.max(max, jobDifficulty[k-1]);
                dp[i][j] = Math.min(dp[i][j], dp[k-1][j-1] + max);
            }
        }
    }
    return dp[jobDifficulty.length][d];
};
let jobDifficulty = [6,5,4,3,2,1], d = 2;
console.log(minDifficulty(jobDifficulty, d));