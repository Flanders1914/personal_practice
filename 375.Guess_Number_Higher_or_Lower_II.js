/**
375. Guess Number Higher or Lower II
思路：
这道题意思就是生成一个二叉搜索树，使得到叶节点的加权路径和最小（不包括叶节点)
dp
dp[i][j] 为 区间 [i,j] 的最小满足路径上节点和
dp[i][j] =  min {max{dp[i][t-1], dp[t+1][j]}+t}
意思：令t为子树的根节点 区间[i,j] 的 最小路径和是所有取值t中 t + 左右子树各自最小加权路径和的较大值
最小的那个
 */
var getMoneyAmount = function(n) {
    let dp = new Array(n+1).fill().map(() => new Array(n+1).fill(0));
    for (let k = 1; k <= n-1; k++) {
        for (let i = 1; i <= n-k; i++) {
            dp[i][i+k] = Math.min(dp[i+1][k+i]+i, dp[i][k+i-1]+k+i);
            for (let t = i+1; t <= i+k-1; t++) {
                dp[i][i+k] = Math.min(dp[i][i+k], Math.max(dp[i][t-1], dp[t+1][i+k])+t);
            }
        }
    }
    return dp[1][n];
};
console.log(getMoneyAmount(10));