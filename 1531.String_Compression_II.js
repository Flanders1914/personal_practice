/**
1531. String Compression II
思路：dp
dp[i][j] 表示 前i个字母可以删去j个字母后compression的长度
dp[i][j] = dp[i-1][j-1]（删掉当前字母）或者
从i开始往前遍历，删除0...j个与s[i]不同的字符，将相同的字符组合
 */
var getLengthOfOptimalCompression = function(s, k) {
    const dp = new Array(s.length).fill().map(() => new Array(k+1).fill(Number.MAX_VALUE));
    for (let i = 0; i <= s.length-1; i++) {
        for (let t = 0; t <= (i+1) && t <= k; t++) {
            if (i && t) dp[i][t] = dp[i-1][t-1];
            else if (i) dp[i][0] = i+1;
            else if (t) dp[0][t] = 0;
            else dp[0][0] = 1;
            let del_count = 0;
            let count = 0;
            for (let j = i; j >= 0; j--) {
                if (s[j] == s[i]) count++;
                else del_count++;
                if (del_count > t) break;
                if (count == 1) dp[i][t] = Math.min(dp[i][t], (j > 0)? dp[j-1][t-del_count]+1 : 1);
                else if (count <= 9) dp[i][t] = Math.min(dp[i][t], (j > 0)? dp[j-1][t-del_count]+2 : 2);
                else if (count <= 99) dp[i][t] = Math.min(dp[i][t], (j > 0)? dp[j-1][t-del_count]+3 : 3);
                else dp[i][t] = Math.min(dp[i][t], (j > 0)? dp[j-1][t-del_count]+4 : 4);
            }
        }
    }
    return dp[s.length-1][k];
};
let s = "abc", k = 2;

console.log(getLengthOfOptimalCompression(s, k));