/**
1716. Calculate Money in Leetcode Bank
水题
 */
var totalMoney = function(n) {
    let k = Math.floor(n/7);
    let res = (((k-1)*k)/2)*7 + 28*k;
    for (let i = 1; i <= n % 7; i++) {
        res += i + k;
    }
    return res;
};
console.log(totalMoney(20));