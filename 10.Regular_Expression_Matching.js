/*
思路：动态规划
1. dp[i][j] 为s的前i项与p的前j项是否匹配
2. 初始化 dp[0][0] = true;
3. 对于p的第j项p[j -1] 
若：p[j -1] = s[i -1] 或 p[j -1] = '.' dp[i][j] = dp[i -1][j -1]
若：p[j -1] = '*'
（1）'*'可以用来消除在p中'*'前面的一个 dp[i][j] = dp[i][j -2]
（2）'*'可以用来表示任意重复的数字 dp[i][j] = dp[i -1][j]

注意：
最后一种情况是 dp[i][j] = dp[i -1][j];
不懂就画图
 */
var isMatch = function(s, p) {
    let len_s = s.length;
    let len_p = p.length;
    let dp = new Array(len_s +1).fill().map(() => new Array(len_p +1).fill(false));
    dp[0][0] = true;

    for (let j = 1; j <= len_p; j++) {
        if (p[j -1] == "*") dp[0][j] = dp[0][j -2];
    }

    for (let i = 1; i <= len_s; i++) {
        for (let j = 1; j <= len_p; j++) {

            if(s[i -1] == p[j -1] || p[j -1] == '.') dp[i][j] = dp[i -1][j -1];
            if(p[j -1] == "*") {
                dp [i][j] = dp [i][j -2];
                if (p[j -2] == s[i -1] || p[j -2] == '.') {
                    dp[i][j] = dp[i][j] || dp[i -1][j];
                }
            } 
        
        }
    }

    return dp[len_s][len_p];
};

console.log(isMatch("mississippi","mis*is*p*."))