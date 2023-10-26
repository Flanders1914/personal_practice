/**
279. Perfect Squares
思路：dp
dp[i] 为组成 i 所需的PS数量
dp[i] = min(1 + dp[i-k]) k为<i的PS
 */
var numSquares = function(n) {
    let dp = new Array(n+1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) dp[i*i] = 1;
    if (dp[n] == 1) return 1;
    for (let i = 1; i <= n; i++) {
        if (dp[i] == 1) continue;
        for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
            dp[i] = Math.min(dp[i], dp[j*j]+dp[i-j*j]);
        }
    }
    return dp[n];
};
console.log(numSquares(9999));