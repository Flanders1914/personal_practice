/**
1143. Longest Common Subsequence
思路：二维dp
设dp[i][j] 表示text1前i个字符和text2前j个字符匹配的个数
dp[i][j] == dp[i-1][j-1] +1 若 text1[i-1] == text2[j-1]
dp[i][j] == Max(dp[i][j-1], dp[i-1][j]) 若 text1[i-1] != text2[j-1]
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = new Array(text1.length+1).fill().map(() => new Array(text2.length+1).fill(0));
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i-1] == text2[j-1]) dp[i][j] = dp[i-1][j-1]+1;
            else dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
        }
    }
    return dp.at(-1).at(-1);
};
let text1 = "abcde", text2 = "ace" ;
console.log(longestCommonSubsequence(text1, text2));