/**
63. Unique Paths II
必须要用dp做，使用递归DFS会超时
比较简单的dp
需要注意一点：
如果初始条件设置为dp[1][1] = 1，主循环要从dp[1][1]之后开始，否则初始的dp[1][1]会被覆盖
要么用取巧的方法，设置dp[1][0] = 1 或者 dp[0][1] = 1
*/

var uniquePathsWithObstacles = function(obstacleGrid){
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    const dp = new Array(m+1).fill().map(()=>new Array(n+1).fill(0));

    if (obstacleGrid[0][0] == 1) return 0;
    dp[0][1] = 1;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (obstacleGrid[i-1][j-1] == 1) dp[i][j] = 0;
            else {
                dp[i][j] = dp[i -1][j] + dp[i][j -1];
            }
        }
    }
    
    return dp[m][n];
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));