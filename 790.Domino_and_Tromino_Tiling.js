/**
790. Domino and Tromino Tiling
思路：
没有看上去那么简单，注意tromino 可以组合为
———— ———— ————      ———— ———— | 
| ———— ————  |      | ———— ————
这两种形式 长度分别为 3+2k 4+2k k为自然数
dp[i] = dp[i-1](末尾放|) + dp[i-2](末尾放=) + 2*(dp[i-3]+dp[i-4]+...+dp[0])(末尾为tromino)
dp[i] = dp[i-1] + dp[i-2] + 2Si-3
dp[i+1] = dp[i] + dp[i-1] + 2Si-2
两者相减化简得
dp[i+1] = 2dp[i] + dp[i-2];
 */
var numTilings = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1]*2 + dp[i-3];
        if (dp[i] > 1000000007) dp[i] %= 1000000007;
    }
    return dp[n];
};
console.log(numTilings(5));