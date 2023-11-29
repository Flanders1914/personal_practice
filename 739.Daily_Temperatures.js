/**
739. Daily Temperatures
思路：单调递减堆 monotonic stack
关键在于从右往左将温度入栈，若当前t[i]小于栈顶，直接入栈，当前需要等1天
若t[i] >= 栈顶，出栈直到栈顶 > t[i] 需要等待栈顶温度的日期-当前日期
最后将t[i]以及其日期入栈 
 */
var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [[temperatures.at(-1), temperatures.length-1]];
    for (let i = temperatures.length-2; i >= 0; i--) {
        if (temperatures[i] < stack.at(-1)[0]) {
            res[i] = 1;
            stack.push([temperatures[i], i]);
        } else {
            while (stack.length && stack.at(-1)[0] <= temperatures[i]) stack.pop();
            if (stack.length == 0) res[i] = 0;
            else res[i] = stack.at(-1)[1] - i;
            stack.push([temperatures[i], i]);
        }
    }
    return res;
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));