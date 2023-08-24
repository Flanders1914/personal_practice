/**
122. Best Time to Buy and Sell Stock II
思路：本质上这道题就是要找出数组中 所有单调上升的区间 并
将他们的 区间内上升长度 加在一起
两种做法：1. 下面的代码，存储区间的left 注意单调区间持续到末尾时
更简单的做法：2. 计算每一个元素和前一个元素的差值，若差值 >0 加到ans上
*/
var maxProfit = function(prices) {
    let left = prices[0];
    let ans = 0;
    if (prices.length == 1) return 0;

    for (let i = 1; i <= prices.length -1; i++) {
        if (prices[i] >= prices[i -1]) {
            if (i == prices.length -1) {
                ans += prices[i] - left;
                break;
            }
            else continue;
        }
        else {
            ans += (prices[i -1] - left > 0)? prices[i -1] - left : 0;
            left = prices[i];
        }
    }

    return ans;
};

console.log(maxProfit([7,1,5,3,6,4]));