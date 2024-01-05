/**
576. Out of Boundary Paths
思路1：三维dp
board[i][j] 表示该点通过k步能够到达边缘的路径次数
res将每次开始点的board[i][j] 累计即可
思路2：优化的dfs搜索
如下所示
 */
/*
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let board = new Array(m).fill().map(() => new Array(n).fill(0));
    let direction = [[1,0], [0,1], [-1,0], [0,-1]];
    let res = 0;

    if (maxMove == 0) return 0;

    for (let i = 0; i <= m-1; i++) {
        board[i][0]++;
        board[i][n-1]++;
    }
    for (let j = 0; j <= n-1; j++) {
        board[0][j]++;
        board[m-1][j]++;
    }
    res = board[startRow][startColumn] % 1_000_000_007;

    for (let k = 2; k <= maxMove; k++) {
        let temp = [];
        for (let i = 0; i <= m-1; i++) {
            for (let j = 0; j <= n-1; j++) {
                let count = 0;
                for (let [a,b] of direction) {
                    if (((a+i) >= 0) && ((a+i) <= m-1) &&
                    ((b+j) >= 0) && ((b+j) <= n-1)) {
                        count += board[a+i][b+j];
                    }
                }
                temp.push((count % 1_000_000_007));
            }
        }
        for (let i = m-1; i >= 0; i--) {
            for (let j = n-1; j >= 0; j--) {
                board[i][j] = temp.pop();
            }
        }
        res += board[startRow][startColumn];
        res %=  1_000_000_007;
    }

    return res;
};
*/

var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const dp = new Array(maxMove + 1).fill().map(() => 
    new Array(m).fill().map(() => new Array(n).fill(undefined)));

    const dfs = function(i, j, k) {
        if (i == -1 || i == m || j == -1 || j == n) return 1;
        if (k == 0) return 0;
        if (dp[k][i][j] != undefined) return dp[k][i][j];
        else {
            dp[k][i][j] = (dfs(i-1, j, k-1) + dfs(i+1, j, k-1) +
            dfs(i, j+1, k-1) + dfs(i, j-1, k-1)) % 1_000_000_007;
            return dp[k][i][j];
        }
    };
    
    return dfs(startRow, startColumn, maxMove);
};

let m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1;
console.log(findPaths(m,n,maxMove,startRow,startColumn));