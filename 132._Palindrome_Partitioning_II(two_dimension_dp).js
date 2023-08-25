/*
132. Palindrome Partitioning II
思路：动态规划
下面的题解使用了二维动态规划，时间复杂度O(n^3)
动态规划公式：
dp[i][j] 代表区间[i,j]分割为回文字组合的次数
dp[i][j] = 0 区间[i,j]为回文字([i+1,j-1]为回文字且s[i] = s[j])
dp[i][j] = min(dp[i][k] + dp[k+1][j] +1 ,i<=k<=j-1)
写递归时注意外层迭代是要表示区间的长度的增加

存在更优越的一维动态规划解，时间复杂度O(n^2)
*/
var minCut = function(s) {

    let n = s.length;
    const dp = new Array(n).fill().map(() => new Array(n).fill(n));
    for (let i = 0; i <= n-1; i++) {
        dp[i][i] = 0;
    }

    for (let step = 1; step <= n-1; step++) {
        for (let i = 0; i <= n-1-step; i++) {
            if (s[i] == s[i+step] &&
                (i+1 == i+step ||
                dp[i+1][i+step-1] == 0)) {
                    dp[i][i+step] = 0;
                    continue;
            }

            let min = step+1;
            for (let cut_i = i; cut_i <= i+step-1; cut_i++) {
                min = Math.min(min, dp[i][cut_i] + dp[cut_i+1][i+step]+1);
            }
            dp[i][i+step] = min;
        }
    }
    //for (let row of dp) console.log(row);
    return dp[0][n-1];
};

console.log(minCut("aabaa"));