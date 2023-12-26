/**
1155. Number of Dice Rolls With Target Sum
二维dp
dp[i][j] 表示 第i次骰子生成target == j 的可能性次数
dp[i][j] = dp[i-1][j-k] + ... + dp[i-1][j-1];
 */
var numRollsToTarget = function(n, k, target) {
    const dp =  new Array(n+1).fill().map(() => new Array(target+1).fill(0));
    for (let i = 1; i <= k; i++) dp[1][i] = 1;
    for (let count = 2; count <= n; count++) {
        for (let i = 1; i <= target; i++) {
            for (let j = 1; (i-j > 0)&&(j <= k); j++) {
                dp[count][i] += dp[count-1][i-j];
            }
            dp[count][i] %= 1_000_000_007;
        }
    }
    return dp[n][target];
};
let n = 30, k = 30, target = 500;
console.log(numRollsToTarget(n,k,target));