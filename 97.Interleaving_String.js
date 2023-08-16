/**
97. Interleaving String
思路：二维dp
dp[i][j] 表示 s1前i个和s2前j个字符能否组成s3前i+j个字符
这道题能用一维dp做
*/
var isInterleave = function(s1, s2, s3) {
    let len1 = s1.length;
    let len2 = s2.length;
    let len3 = s3.length;

    if (len1 + len2 !== len3) return false;

    const dp = new Array(len1+1).fill().map(()=> new Array(len2+1).fill(false));
    dp[0][0] = true;
    for (let i = 1; i <= len1; i++) {
        if (s1[i-1] == s3[i-1]) dp[i][0] = true;
        else break;
    }
    for (let j = 1; j <= len2; j++) {
        if (s2[j-1] == s3[j-1]) dp[0][j] = true;
        else break;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (s1[i -1] == s3[i+j-1] && dp[i-1][j]) dp[i][j] = true;
            if (s2[j -1] == s3[i+j-1] && dp[i][j-1]) dp[i][j] = true;
        }
    }
    return dp[len1][len2];
};

let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc";
console.log(isInterleave(s1,s2,s3));