/*
44. Wildcard Matching
是10.regular expression的简化版
整体思路一致，难点在于p[j -1] == '*' 的情况
需要同时继承 dp[i][j-1] 和 dp[i-1][j]的状态，不能只继承dp[i-1][j]
示例的输入数据就是一个反例。为什么leetcode10中不需要继承，我不知道呀
需要进一步研究
 */
var isMatch = function(s, p) {
    let len_s = s.length;
    let len_p = p.length;
    let dp = new Array(len_s +1).fill().map(() => new Array(len_p +1).fill(false));

    dp[0][0] = true;

    for (let i = 1; i <= len_p; i++) {
        if (p[i -1] == '*') dp[0][i] = dp[0][i -1];
    }

    for (let i = 1; i <= len_s; i++) {
        for (let j = 1; j <= len_p; j++) {
            if (s[i -1] === p[j -1] || p[j -1] == '?') dp[i][j] = dp[i -1][j -1];
            if (p[j -1] == '*') dp[i][j] = dp[i][j] || dp[i -1][j]|| dp[i][j -1];
        }
    }

    return dp[len_s][len_p];
};

console.log(isMatch("adceb", "*a*b"));