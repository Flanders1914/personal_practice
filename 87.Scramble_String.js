/**
87. Scramble String
参考https://zhuanlan.zhihu.com/p/158969043
思路：三维动态规划
dp[i,j,k] 代表i开始len=k的区间S 和j开始 len=k 的区间T是否满足要求
遍历第一个区间每个可能的分割点，把第一个区间分成S1[i,k] S2[k+1,i+len-1]
第二个区间分成T1[j,j+k-i]或者[j,j+i+len-k-2] T2[j+k-i+1,j+len-1]或者[j+i+len-k-1,j+len-1]
考虑两种情况：第一种情况S1与T1匹配 S2与T2匹配 第二种情况S1与T2匹配 S2与T1匹配
 */
var isScramble = function(s1, s2) {
    let n = s1.length;
    const dp = new Array(n+1).fill().map(() => new Array(n+1).fill().map(() => new Array(n+1).fill(false)));
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j<= n; j++) {
            if (s1[i-1] == s2[j-1]) dp[1][i][j] = true;
        }
    }

    for (let len = 2; len <= n; len ++) {
        for (let i = 1; i <= n - len +1; i++) {
            for (let j = 1; j <= n - len +1; j++) {
                for (let k = i; k <= i + len -2; k++) {
                    //第一种情况没有对调
                    if (dp[k-i+1][i][j] && dp[i+len-k-1][k+1][j+k-i+1]) {
                        dp[len][i][j] = true;
                        break;
                    }
                    //第二种情况对调
                    if (dp[k-i+1][i][j+i+len-k-1] && dp[i+len-k-1][k+1][j]) {
                        dp[len][i][j] = true;
                        break;
                    }
                }
            }
        }
    }

    return(dp[n][1][1]);
};

console.log(isScramble("great","rgeat"));