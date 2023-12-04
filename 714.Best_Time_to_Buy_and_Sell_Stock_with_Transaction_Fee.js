/**
714. Best Time to Buy and Sell Stock with Transaction Fee
思路:dp
dp1指的是 若当前持有stock手上拥有的最多钱
dp2指的是 若当前不持有stock手上拥有的最多钱

所以 dp1 = Max(dp1, dp2-prices[i]) 即要么这轮不买，要么是上一轮不持有股票最好的情况买这一轮
dp2 = max(dp2, dp1+prices[i]-fee) 即要么继续不持有股票，要么是上一轮持有股票的最好情况在这一轮卖
 */
var maxProfit = function(prices, fee) {
    let dp1 = -prices[0]; // has stock
    let dp2 = 0; // not has stock
    for (let i = 1; i <= prices.length-1; i++) {
        dp1 = Math.max(dp1, dp2-prices[i]);
        dp2 = Math.max(dp2, dp1+prices[i]-fee);
    }
    return dp2;
};
let prices = [1,3,2,8,4,9], fee = 2;
console.log(maxProfit(prices, fee));