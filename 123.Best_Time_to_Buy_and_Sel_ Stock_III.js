/*
123. Best Time to Buy and Sell Stock III
思路：寻找区间法
先找出数组中的所有单调增加区间，记录其上下界
然后我们寻找目标的两次购买，
用left_min 记录 在 i和i之前所有区间的最低下界
用right_most 记录在 i和iz之后所有区间的最高上界
双重循环寻找答案，固定两个区间，为两次购买的结束区间和开始区间，
利润为 upper_bounds[i] - left_min[i] + right_most[j] - lower_bounds[j];

时间复杂度O(n^2) 主流做法应该更快
*/

var maxProfit = function(prices) {
    let lower_bounds = [];
    let upper_bounds = [];
    let left = prices[0];

    for (let i = 1; i <= prices.length -1; i++) {
        if (prices[i] >= prices[i-1]) {
            if (i == prices.length -1) {
                lower_bounds.push(left);
                upper_bounds.push(prices[i]);
                break;
            }
            else continue;
        }
        else {
            let profit = prices[i -1] - left;
            if (profit > 0) {
                lower_bounds.push(left);
                upper_bounds.push(prices[i -1]);
            }
            left = prices[i];
        }
    }
    

    if (lower_bounds.length == 0) return 0;
    if (lower_bounds.length == 1) return (upper_bounds[0] - lower_bounds[0]);
    
    let right_most = new Array(upper_bounds.length).fill(0);
    right_most[upper_bounds.length -1] = upper_bounds.at(-1);
    let left_min = new Array(lower_bounds.length).fill(0);
    left_min[0] = lower_bounds[0];

    for (let i = 1; i <= left_min.length -1; i++) {
        if (lower_bounds[i] > left_min[i -1]) left_min[i] = left_min[i -1];
        else left_min[i] = lower_bounds[i];
    }
    for (let i = right_most.length -2; i >= 0; i--) {
        if (upper_bounds[i] > right_most[i +1]) right_most[i] = upper_bounds[i];
        else right_most[i] = right_most[i+1];
    }

    let ans = 0;

    for (let i = 0; i <= lower_bounds.length -2; i++) {
        for (let j = i +1; j <= lower_bounds.length -1; j++) {
            let profit = upper_bounds[i] - left_min[i] + right_most[j] - lower_bounds[j];
            ans = (ans > profit)? ans : profit;
        }
    }

    return ans;
};

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]));