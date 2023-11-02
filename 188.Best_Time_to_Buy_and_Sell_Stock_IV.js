/**
188. Best Time to Buy and Sell Stock IV
思路：使用123. Best Time to Buy and Sell Stock III相同的方法
profits[i] 表示第i+1次卖出后的利润
moneyAfter[i] 表示第i+1次买出，第i+2次买入后手上的钱
minBuyIn记录当前最低的price
 */
var maxProfit = function(k, prices) {
    let minBuyIn = Number.MAX_VALUE;
    let profits = new Array(k).fill(0);
    let moneyAfter = new Array(k).fill(- prices[0]);
    for (let price of prices) {
        minBuyIn = Math.min(minBuyIn, price);
        profits[0] = Math.max(profits[0], price - minBuyIn);
        moneyAfter[0] = Math.max(moneyAfter[0], profits[0] - price);
        for (let i =  1; i <= k-1; i++) {
            profits[i] = Math.max(profits[i], moneyAfter[i - 1] + price);
            moneyAfter[i] = Math.max(moneyAfter[i], profits[i] - price);
        }
    }
    return profits[k-1];
};
console.log(maxProfit(2, [3,2,6,5,0,3]));