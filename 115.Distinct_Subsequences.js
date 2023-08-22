/*
115. Distinct Subsequences
动态规划
dp[i][j] 表示前j个s中的前i个t的数量
dp[i][j] 要继承 dp[i][j-1]的数量
若 t[i] == s[j] dp[i][j] 要加上 dp[i-1][j-1]的数量
返回 dp[t.length -1][s.length -1]
注意事项：需要初始化第一行
*/
var numDistinct = function(s, t) {
    const dp = new Array(t.length).fill().map(() =>new Array(s.length).fill(0));

    if (s[0] == t[0]) dp[0][0] = 1;

    for (let j = 1; j <= s.length -1; j++) {
        dp[0][j] = dp[0][j -1];
        if(t[0] == s[j]) {
            dp[0][j]++;
        }
    }

    for (let i = 1;  i <= t.length -1; i++) {
        for (let j = 1; j <= s.length -1; j++) {
            dp[i][j] = dp[i][j-1];
            if (t[i] == s[j]) dp[i][j] += dp[i-1][j-1];
        }
    }
    return dp[t.length -1][s.length -1];
};
