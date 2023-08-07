/**
64. Minimum Path Sum
简简单单的dp
注意第一行第一列初始化就行了
*/
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    const dp = new Array(m).fill().map(()=>new Array(n).fill(0));

    dp[0][0] = grid[0][0];
    for (let i = 1; i <= m -1; i++) dp[i][0] = dp[i-1][0] + grid[i][0];
    for (let j = 1; j <= n -1; j++) dp[0][j] = dp[0][j-1] + grid[0][j];

    for (let i = 1; i <= m -1; i++) {
        for (let j = 1; j <= n -1; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[m-1][n-1];
};