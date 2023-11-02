/**
309. Best Time to Buy and Sell Stock with Cooldown
思路1：O(n^2) dp[i] 表示 在i卖出股票的情况下的最大利润
dp[i] = max(dp[j-2] + prices[i] - min(prices[i->j]))
思路2：O(n) 对三种情况都设置一个dp数组
unhold[i] max profit if we unhold the stock on day i
hold[i] max profit if we hold the stock on day i
cooldown[i] max profit if we are in cooldown on day i
 */
/*
var maxProfit = function(prices) {
    if (prices.length == 1) return 0;
    let dp = new Array(prices.length).fill(0);
    for (let i = 1; i <= prices.length-1; i++) {
        let min = prices[i];
        for (let j = i-2; j >= 0; j--) {
            dp[i] = Math.max(dp[i], dp[j] + prices[i] - min);
            min = Math.min(min, prices[j+1]);
        }
        min = Math.min(min, prices[0]);
        dp[i] = Math.max(dp[i], prices[i] - min);
    }
    console.log(dp);
    return Math.max(...dp);
};
*/
var maxProfit = function(prices) {
    let n = prices.length;
    if (n == 1) return 0;
    let cooldown = new Array(n).fill(0);
    let hold = new Array(n).fill(0);
    let unhold = new Array(n).fill(0);
    hold[0] = -prices[0];
    for (let i = 1; i <= n -1; i++) {
        hold[i] = Math.max(hold[i-1], unhold[i-1]-prices[i]);
        unhold[i] = Math.max(unhold[i-1], cooldown[i-1]);
        cooldown[i] = hold[i-1] + prices[i];
    }
    return Math.max(unhold[n-1], cooldown[n-1]);
};
let prices = [6,1,3,2,4,7];
console.log(maxProfit(prices));
