/**
467. Unique Substrings in Wraparound String
思路：dp
dp[i]储存以s[i]为结尾，符合条件的substr个数
若s[i-1] 恰好是 s[i] 前一个字符，dp[i] = dp[i-1] +1
否则 dp[i] = 1
为了避免重复，我们只要取每一个字母不同坐标i的最大dp值 max(dp[i])
如果s[i] ==  s[j] 但 dp[i] > dp[j] 由于 拥有相同的尾部字符且只能逐个增加，所以所有的dp[j]
都包含在dp[i]中，我们取dp[i]即可

上面的是sub-seq的解，利用一个hash表map不同字母在s最左侧的坐标
 */
/*
var findSubstringInWraproundString = function(s) {
    const code_a = "a".charCodeAt(0);
    const hash = new Array(26).fill(-1);
    let dp = new Array(s.length).fill(0);
    for (let i = 0; i <= s.length-1; i++) {
        let current = s[i].charCodeAt(0) - code_a;
        let pre = (current + 25) % 26;
        if (hash[pre] == -1) {
            dp[i] = 1;
        } else dp[i] = dp[hash[pre]]+1;
        hash[current] = i;
    }
    let res = 0;
    for (let i = 0; i <= 25; i++) {
        if (hash[i] != -1) res += dp[hash[i]];
    }
    return res;
};
*/
var findSubstringInWraproundString = function(s) {
    let res = 0;
    const code_a = "a".charCodeAt(0);
    let dp = new Array(s.length).fill(0);
    for (let i = 0; i <= s.length-1; i++) {
        let current = s.charCodeAt(i) - code_a;
        let pre = (current + 25) % 26;
        if (i && (s.charCodeAt(i-1) == pre + code_a)) {
            dp[i] = dp[i-1] +1;
        } else dp[i] = 1;
    }
    let hash = new Map();
    for (let i = 0; i <= s.length-1; i++) {
        if (hash.has(s[i])) hash.set(s[i], Math.max(dp[i], hash.get(s[i])));
        else hash.set(s[i], dp[i]);
    }
    for (let value of hash.values()) res += value;
    return res;
};
console.log(findSubstringInWraproundString("yhxtdobyly"));