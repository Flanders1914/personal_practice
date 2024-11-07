/**
 2684. Maximum Number of Moves in a Grid
 简单的dp
 */
var maxMoves = function(grid) {
    let n = grid.length
    let m = grid[0].length
    let res = 0
    let dp = new Array(n).fill().map(() => new Array(m).fill(0))

    for (let j = 1; j < m; j++) {
        for (let i = 0; i < n; i++) {
            if (i != 0 && grid[i][j] > grid[i-1][j-1]) {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1]+1)
            }
            if (grid[i][j] > grid[i][j-1]) {
                dp[i][j] = Math.max(dp[i][j], dp[i][j-1]+1)
            }
            if (i < n-1 && grid[i][j] > grid[i+1][j-1]) {
                dp[i][j] = Math.max(dp[i][j], dp[i+1][j-1]+1)
            }

            if (dp[i][j] == 1 && j != 1) {
                dp[i][j] = 0
            } else {
                res = Math.max(res, dp[i][j])
            }
        }
    }

    return res

};

console.log(maxMoves([[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]))