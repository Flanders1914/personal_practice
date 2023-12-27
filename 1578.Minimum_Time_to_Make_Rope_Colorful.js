/**
1578. Minimum Time to Make Rope Colorful
思路：简单的greedy
找到连续的气球并找到cost最大的那个并只保留那个气球
我们可以维护一个气球组的cost和total和当前气球组最大cost current来实现
注意不要漏掉最后一组
 */
var minCost = function(colors, neededTime) {
    let cost = 0;
    let current = neededTime[0];
    let total = neededTime[0];
    let pre = colors[0];
    for (let i = 1; i <= colors.length-1; i++) {
        if (colors[i] != pre) {
            cost += total - current;
            total = neededTime[i];
            current = neededTime[i]; 
            pre = colors[i];
            continue;
        } else {
            total += neededTime[i];
            current = Math.max(current, neededTime[i]);
        }
    }
    return cost + total - current;
};
let colors = "bbbaaa", neededTime = [4,9,3,8,8,9];
console.log(minCost(colors, neededTime));