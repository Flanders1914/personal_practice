/*
139. Word Break
思路：二维dp
dp[i][j] 表示s从i到j的部分可以用wordDict组合

考虑两种可能：
1. s(i-j)在wordDict中
2. s(i-j)可以分成两部分且这两部分都可以用wordDict表示
*/
var wordBreak = function(s, wordDict) {
    const hash = new Map();
    for (let word of wordDict) {
        hash.set(word, true);
    }

    const dp = new Array(s.length).fill().map(()=>new Array(s.length).fill(false));
    
    for (let len = 1; len <= s.length; len++) {
        for (let i = 0; i <= s.length -len; i++) {
            let segment = s.slice(i, i+len);
            if (hash.has(segment)) {
                dp[i][i+len-1] = true;
                continue;
            }
            for (let k = i; k <= i+len-2; k++) {
                if (dp[i][k] && dp[k+1][i+len-1]) {
                    dp[i][i+len-1] = true;
                    break;
                }
            }
        }
    }

    return dp[0][s.length-1];
};

s = "catsandog", wordDict = ["cats","dog","sand","and","cat"];
console.log(wordBreak(s, wordDict));