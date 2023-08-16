/**
96. Unique Binary Search Trees
思路：动态规划
dp[i]代表有i个元素的BST树的数量 注意dp[0] = 1;
dp[i] = 遍历所有元素作为root dp[root-1](左子树的数量)*dp[i-root](右子树的数量) 的总和
*/
var numTrees = function(n) {
    const dp = new Array(n+1);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        let trees_num = 0;
        for (let root = 1; root <= i; root++) {
            trees_num += dp[root -1] * dp[i - root];
        }
        dp[i] = trees_num;
    }
    return dp[n];
};