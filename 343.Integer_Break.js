/**
343. Integer Break
思路：dp
dp[i]表示和为i的最大乘积 i > 3
注意：虽然dp[2]应该为1 dp[3] 应该为2 为了之后的计算简便，我们将dp[2] = 2; dp[3] = 3;
因为这两个值是唯一 dp[i] < i 的情况，不如不分割作为整体参与运算
 */
var integerBreak = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    if (n == 1) return 1;
    else if (n == 2) return 1;
    else if (n == 3) return 2;
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i-1];
        for (let m = 2; m <= Math.floor(i/2); m++) {
            dp[i] = Math.max(dp[i], dp[i-m]*dp[m]);
        }
    }
    return dp[n];
};
console.log(integerBreak(11));