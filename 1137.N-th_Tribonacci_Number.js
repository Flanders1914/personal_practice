/**
1137. N-th Tribonacci Number
思路：水题
 */
var tribonacci = function(n) {
    let res = 0;
    let t0 = 0;
    let t1 = 1;
    let t2 = 1;
    if (n == 0) return 0;
    if (n <= 2) return 1;
    for (let i = 3; i <= n; i++) {
        res = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = res;
    }
    return res;
};
console.log(tribonacci(25));