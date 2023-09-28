/**
200. Number of Islands
思路：DFS
这里用while循环和stack写了dfs
 */
var numIslands = function(grid) {
    let ans = 0;
    for (let i = 0; i <= grid.length-1; i++) {
        for (let j = 0; j <= grid[0].length-1; j++) {
            if (grid[i][j] == 1) {
                ans++;
                grid[i][j] = 0;
                let memo_i = [i], memo_j = [j];
                while (memo_i.length > 0) {
                    let i = memo_i.pop(), j = memo_j.pop();
                    if (i > 0 && grid[i-1][j] == 1) {
                        grid[i-1][j] = 0;
                        memo_i.push(i-1);
                        memo_j.push(j);
                    }
                    if (j > 0 && grid[i][j-1] == 1) {
                        grid[i][j-1] = 0;
                        memo_i.push(i);
                        memo_j.push(j-1);
                    }
                    if (i < grid.length-1 && grid[i+1][j] == 1) {
                        grid[i+1][j] = 0;
                        memo_i.push(i+1);
                        memo_j.push(j);
                    }
                    if (j < grid[0].length-1 && grid[i][j+1] == 1) {
                        grid[i][j+1] = 0;
                        memo_i.push(i);
                        memo_j.push(j+1);
                    }
                }
            }
        }
    }
    return ans;
};