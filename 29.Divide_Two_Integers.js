/*
29. Divide Two Integers
模拟除法
思路：
1. 用减法模拟除法
2. native的方法是每次减去相同的数，速度会比较慢
3. 高级一点的方法是减数会随着迭代而增长
4. 下面采用的是减数随时间线性增长的方法
注意：在里面那层 while 的条件是(subtrahend + divisor <= dividend)
提前判断增长后的减数是否大于dividend，因为增长在减法之前

可以尝试用指数增长减数的方法 count和subtrahend加自身就行了
也可以增加一个cache储存减数，并在无法增长时，回退至上一个减数
29.Divide_Two_Integers(ultimate) 实现了指数减数增长和减数cache (运行速度击败了95%)
 */
var divide = function(dividend, divisor) {
    let ans = 0;
    let sign;

    if (dividend == 0) return 0;
    if ((dividend > 0 && divisor > 0) ||
    (dividend < 0 && divisor < 0)) sign = true;
    else sign = false;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        let subtrahend = 0;
        let count = 0;
        while (subtrahend + divisor <= dividend) {
            subtrahend += divisor;
            count += 1;
            dividend -= subtrahend;
            ans += count;
        } 
    }

    if (sign) {
        if (String(ans).length == 10 && String(ans) > "2147483647") return 2147483647;
        else return ans;
    } else {
        if (String(ans).length == 10 && String(ans) > "2147483648") return -2147483648;
        else return -ans;
    }
};

console.log(divide(7,3));