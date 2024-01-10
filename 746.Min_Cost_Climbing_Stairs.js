/**
746. Min Cost Climbing Stairs
思路：dp[i] = Min(dp[i-1] + dp[i-2]) + cost[i];
dp[i] 表示到第i阶梯的总消耗
最后返回 dp[-1] dp[-2]中的较小值
下面的算法优化了空间
 */
var minCostClimbingStairs = function(cost) {
    let dp0 = cost[0];
    let dp1 = cost[1];
    for (let i = 2; i <= cost.length-1; i++) {
        let temp = dp1;
        dp1 = Math.min(dp0, dp1) + cost[i];
        dp0 = temp;
    }
    return Math.min(dp0, dp1);
};