/**
313. Super Ugly Number
思路：任何ugly数可以分解成一个之前的ugly数与一个因数的乘积
indexs[i]储存与当前因数primes[i]相乘的数在dp中的坐标
若该乘积成为下一个ugly数，indexs[i]++；
注意：必须更新所有乘积等于当前ugly数的indexs坐标
因为一个ugly数可以分解成不同的ugly数和因数乘积
如3*5 = 5*3 5和3可以都是因数
这里3和5的index都需要更新
 */
var nthSuperUglyNumber = function(n, primes) {
    let indexs = new Array(primes.length).fill(0);
    let dp = new Array(n).fill(Number.MAX_VALUE);
    dp[0] = 1;

    for (let i = 1; i <= n-1; i++) {
        for (let j = 0; j <= primes.length-1; j++) {
            let current = dp[indexs[j]] * primes[j];
            if (dp[i] > current) {
                dp[i] = current;
            }
        }
        for (let j = 0; j <= primes.length-1; j++) {
            if (dp[indexs[j]]*primes[j] == dp[i]) indexs[j]++;
        }
    }
    return dp[n-1];
};
let  n = 15, primes = [3,5,7,11,19,23,29,41,43,47];
console.log(nthSuperUglyNumber(n, primes));