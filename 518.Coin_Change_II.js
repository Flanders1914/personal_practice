/**
518. Coin Change II
水题
思路：dp
dp[i,j] 表示 利用前i个coin，amount == j 能够change的个数
dp[i,j] = dp[i-1][j] + dp[i][j-coins[i]] 即要么不用当前的coins[i]的结果 + 用当前coins[i] 的结果 
 */
var change = function(amount, coins) {
    let dp = new Array(amount+1).fill(0);
    dp[0] = 1;
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i-coin];
        }
    }
    return dp.at(-1);
};
amount = 5, coins = [1,2,5];
console.log(change(amount, coins));