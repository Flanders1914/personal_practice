/*
123. Best Time to Buy and Sell Stock III
思路：贪心法 和121的方法类似，本质上是两个121(该题的基本型)叠加在一起
min_buyIn 是当天之前(包括当天)的最低价格
first_profit 第一次卖出的profit
money 在第一次卖出和第二次买入后手上的钱
second_profit 第二次卖出的profit
*/
var maxProfit = function(prices) {
    let min_buyIn = Number.MAX_VALUE;
    let first_profit = 0;
    let second_profit = 0;
    let money = -prices[0];

    for (let price of prices) {
        //第一次买入卖出
        min_buyIn = Math.min(min_buyIn, price);
        first_profit= Math.max(first_profit, price - min_buyIn);
        //第二次买入卖出
        money = Math.max(money, first_profit - price);
        second_profit = Math.max(second_profit, money + price);
    }

    return second_profit;
};

console.log(maxProfit([3,3,5,0,0,3,1,4]));