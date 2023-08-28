/*
139. Word Break
思路：一维dp
dp[i] 表示s从0到i的部分可以用wordDict组合

如果 s(k-i) 在wordDict中且dp[k-1]是true(或者 k == 0)
那么dp[i] = true;

优化方法：记录最长的word的长度
每次在子字符串后面找word时限制寻找的范围不超过这个长度
*/
var wordBreak = function(s, wordDict) {
    const hash = new Map();
    let max_word_length = 0;

    for (let word of wordDict) {
        hash.set(word, true);
        max_word_length = (max_word_length > word.length)? max_word_length : word.length;
    }

    dp = new Array(s.length).fill(false);

    for (let i = 0; i <= s.length -1; i++) {
        let segment = '';
        for (let k = i; k >= 0 && (i-k+1) <= max_word_length; k--) {
            segment = s[k] + segment;
            if (hash.has(segment) && (!k || dp[k-1])) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length -1];
};

