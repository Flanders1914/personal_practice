/**
322. Coin Change
思路：简单的dp
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1);
    dp[0] = [0];
    for (let i = 1; i <= amount; i++) {
        dp[i] = amount + 1;
        for (let coin of coins) {
            if (i >= coin) dp[i] = Math.min(dp[i], dp[i - coin]+1);
        }
    }
    if (dp[amount] == amount +1) return -1;
    else return dp[amount];
};