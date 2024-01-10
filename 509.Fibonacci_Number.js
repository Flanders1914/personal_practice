/**
509. Fibonacci Number
思路：斐波拉契数列
 */
var fib = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let dp0 = 0, dp1 = 1;
    for (let i = 2; i <= n; i++) {
        let temp = dp1;
        dp1 += dp0;
        dp0 = temp;
    }
    return dp1;
};