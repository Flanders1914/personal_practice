/**
2706. Buy Two Chocolates
水题
 */
var buyChoco = function(prices, money) {
    let min = prices[0];
    let index = 0;
    let res = money;
    for (let i = 1; i <= prices.length-1; i++) {
        if (prices[i] < min) {
            min = prices[i];
            index = i;
        }
    }
    res -= min;
    [prices[prices.length-1], prices[index]] = [prices[index], prices[prices.length-1]];
    prices.pop();
    min = prices[0];
    for (let i = 1; i <= prices.length-1; i++) {
        min = Math.min(min, prices[i]);
    }
    res -= min;
    if (res < 0) return money;
    else return res;
};