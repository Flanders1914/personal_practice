/**
730. Count Different Palindromic Subsequences
思路：dp
以下解法是优化了空间复杂度的三维dp
第一步：
原本的dp[l][r][k] 代表区间[l,r] 内，以k字符为边界的不同回文字个数
若当前s[l] == s[r] 那么对于对应s[l]的k dp[l][r][k] = sum (dp[l+1][r-1][all the k]) +2（单个字符+两个重复字符）
对于不对应s[l]的k dp[l][r][k] = dp[l+1][r-1][k] 

若当前的s[l] != s[r] 那么 dp[l][r][k] = dp[l+1][r][k] + dp[l][r-1][k] - dp[l+1][r-1][k]
即区间[l+1,r] + 区间[l,r-1] - 重叠部分[l+1, r-1] (由于s[l] != s[r] 所以 不会存在同时用了s[l] 和 s[r] 的回文字)

第二步: 空间复杂度化简
由于原三维dp容易溢出给定的空间，所以我们需要把空间化简
1. 我们生成当前的dp需要用到上一层的dp和上上层的dp
所以我们可以用两个二维dp代替原三维dp

注意：
我们是从n >= 2 开始生成解，需要特殊处理n == 1的情况
 */
var countPalindromicSubsequences = function(s) {
    let n = s.length;
    let dic = {'a' : 0, "b" : 1, 'c' : 2, 'd' : 3};
    let dp1 = new Array(n).fill().map(() => new Array(4).fill(0));
    let dp2 = new Array(n).fill().map(() => new Array(4).fill(0));
    if (n == 1) return 1;
    for (let i = 0; i <= n-1; i++) {
        dp1[i][dic[s[i]]] = 1;
        if (i && (s[i] == s[i-1])) {
            dp2[i-1][dic[s[i]]] = 2;
        } else if (i) {
            dp2[i-1][dic[s[i]]] = 1;
            dp2[i-1][dic[s[i-1]]] = 1;
        }

    }

    for (let k = 3; k <= n; k++) {
        for (let l = 0; l+k <= n; l++) {
            let r = l + k-1;
            if (s[l] == s[r]) {
                for (let c = 0; c <= 3; c++) {
                    let temp = dp2[l][c];
                    if (c == dic[s[l]]) {
                        dp2[l][c] = dp1[l+1][0] + dp1[l+1][1] + 
                        dp1[l+1][2] + dp1[l+1][3] + 2;
                    } else {
                        dp2[l][c] = dp1[l+1][c];
                    }
                    dp1[l][c] = temp;
                    dp2[l][c] = (dp2[l][c] >= 0)? dp2[l][c] % 1000000007 : dp2[l][c] + 1000000007;
                }
            } else {
                for (let c = 0; c <= 3; c++) {
                    let temp = dp2[l][c]
                    dp2[l][c] = dp2[l+1][c] + dp2[l][c] - dp1[l+1][c];
                    dp2[l][c] = (dp2[l][c] >= 0)? dp2[l][c] % 1000000007 : dp2[l][c] + 1000000007;
                    dp1[l][c] = temp;
                }
            }
        }
    }
    return (dp2[0][0]+dp2[0][1]+dp2[0][2]+dp2[0][3])%1000000007;
};
console.log(countPalindromicSubsequences("a"));
