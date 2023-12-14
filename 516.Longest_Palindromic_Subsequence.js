/**
516. Longest Palindromic Subsequence
思路：dp
dp[i][j] 表示区间 s[i,j]的 Longest Palindromic Subsequence
所以 dp[i][j] = Max{dp[i+1][j], dp[i][j-1], dp[i+1][j-1]+2（当s[i] == s[j]）}
注意对长为2的区间初始化
注意初始所有dp赋值成1
 */
var longestPalindromeSubseq = function(s) {
   let n = s.length;
   const dp = new Array(n).fill().map(() => new Array(n).fill(1));
   for (let i = 0; i < n-1; i++) {
    if (s[i] == s[i+1]) dp[i][i+1] = 2;
   }
   for(let k = 3; k <= n; k++) {
    for (let l = 0; l <= n-k; l++) {
        let r = l+k-1;
        dp[l][r] = Math.max(dp[l+1][r], dp[l][r-1]);
        if (s[l] == s[r]) dp[l][r] = Math.max(dp[l+1][r-1]+2, dp[l][r]);
    }
   } 
   return dp[0][n-1];
};
console.log(longestPalindromeSubseq("abc"));