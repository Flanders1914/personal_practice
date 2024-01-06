/**
583. Delete Operation for Two Strings
最基本的dp
注意初始条件赋值
 */
var minDistance = function(word1, word2) {
    let n = word1.length;
    let m = word2.length;
    const dp = new Array(n+1).fill().map(() => new Array(m+1).fill(Number.MAX_VALUE));
    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }
    for (let i = 0; i <= m; i++) {
        dp[0][i] = i;
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            }
            dp[i][j] = Math.min(dp[i][j], dp[i][j-1]+1, dp[i-1][j]+1);
        }
    }
    return dp[n][m];
};

let word1 = "sea", word2 = "eat";
console.log(minDistance(word1, word2));