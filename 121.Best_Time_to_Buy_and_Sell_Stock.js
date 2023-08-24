/**
121. Best Time to Buy and Sell Stock
思路：min_buyIn 是当天之前的最低价格
每天判断当天售出的利润是否大于ans，是，更新ans
每天判断当天的价格是否低于min_buyIn 是，更新 min_buyIn
*/
var maxProfit = function(prices) {
    let min_buyIn = prices[0];
    let ans = 0;
    if (prices.length == 1) return 0; 
    for (let i = 1; i <= prices.length -1; i++) {
        let current = prices[i] - min_buyIn;
        ans = (ans > current)? ans : current;
        min_buyIn = (min_buyIn < prices[i])? min_buyIn : prices[i];
    }
    return ans;
};

console.log(maxProfit([7,6,4,3,1]));