/*
29.Divide_Two_Integers 的高速版本
采用了指数减数增长和减数cache
运行速度击败了95%
注意在每一次减法运算前先判断减数是否过大
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

    let count = 1;
    let cache = [divisor];

    while (true) {
        if (dividend < divisor) break;

        if(cache[count -1] <= dividend) {
            dividend -= cache[count -1];
            ans += 2 ** (count -1);
        } else {
            count--;
            continue;
        }

        if (cache[count -1] + cache[count -1] <= dividend) {
            cache.push(cache[count -1] + cache[count -1]);
            count++;
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

console.log(divide(10000,1))