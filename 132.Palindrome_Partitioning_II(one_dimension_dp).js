/*
132. Palindrome Partitioning II
思路：一维动态规划

常规思路：比二维优越但时间复杂度仍然是O(n^3)
速度打败了57%
动态规划公式：
dp[i] 表示前i个元素划分成回文字组合的次数
dp[i] = min(dp[k] +1) , k>0
dp[i] = 0, k=0
区间[k,i]为回文字

终极思路：时间复杂度O(n^2) 在比较好的数据下接近O(n)
速度打败了98%
思路和常规思路相似
但我们每次循环在点i向两侧扩张，处理以i为中心的所有回文字
注意对回文字的长度奇偶分类讨论
*/
var minCut = function(s) {

    let n = s.length;
    let dp = new Array(n).fill(0);
    for (let i = 0; i <= n-1; i++) {
        dp[i] = i;
    }
    for (let i = 1; i <= n-1; i++) {
        dp[i] = Math.min(dp[i], dp[i-1]+1);
        //从i开始向外扩展回文字
        //回文字长度是odd
        for (let step = 1; step <= i && step <= n-1-i; step++) {
            if (s[i-step] == s[i+step]) {
                if (i-step == 0) dp[i+step] = 0;
                else dp[i+step] = Math.min(dp[i+step], 1+dp[i-step-1]);
            } else break;
        }

        if (s[i-1] !== s[i]) continue;
        //回文字长度是even
        for (let step = 0; step <= i-1 && step <= n-1-i; step++) {
            if (s[i-step-1] == s[i+step]) {
                if (i-step-1 == 0) dp[i+step] = 0;
                else dp[i+step] = Math.min(dp[i+step], 1+dp[i-step-2]);
            } else break;
        }
    }

    return dp[n-1];
};

console.log(minCut("aab"));