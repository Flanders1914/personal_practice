/**
233. Number of Digit One
思路：拆分数字
dp[i] 为 (0, 10^(i+1)) 所有数的1的数量
dp[0] = 1  1-9有1个
dp[1] = 20 1-99有20个
dp[2] = 300 1-999有300个
....
dp[n] = dp[n-1] *10 + 10^i (原因，不考虑最高位，有 dp[n-1]*10, 最高位有一个1所以要加上10^i)

对于给定的数字n, 如 23199
分割成 20000 + 3000 + 100 + 90 + 9，即为先点20000 再点20001-23000 再点32001-32100
再点32101-32190 再点32191-23199
万位为2 2*dp[3] + 10000(万位为1的个数）+ 3*dp[2] + 1000(千位为1的个数)+ 
dp[1] + 99+1(0-99个)(百位为1的个数) + 9*dp[0] + 10(十位为1) +1(个位为1) 
= 18000 + 1900 + 120 + 9 + 10 +1 = 20040
 */
var countDigitOne = function(n) {
    let dp = new Array(10).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= 9; i++) {
        dp[i] =  dp[i-1]*10 + 10**(i);
    }
    let ans = 0;
    let s = n + '';
    for (let i = 0; i <= s.length -2; i++) {
        if (s[i] !== '0') {
            ans += dp[s.length-i-2] * Number(s[i]);
            if (s[i] == '1') ans += 1+ Number(s.slice(i+1)); //数位为1，该1重复的次数是之后的数位组成的数
            else ans += 10 ** (s.length-i-1); // 数位 >1 那么 该1重复的次数是 10^m m为该位后面的数的个数
        }
    
    }
    if (s.at(-1) != '0') return ans+1;
    else return ans;
};
console.log(countDigitOne(23199));