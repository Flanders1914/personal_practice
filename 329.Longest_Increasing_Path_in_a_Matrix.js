/**
329. Longest Increasing Path in a Matrix
思路：dp
dp的核心在于无后效性，之后的状态不能影响之前状态产生的dp值
因此这里只能将matrix每一个单元格进行降序排序，从较大值出发 dp[i][j]为从
[i][j]出发能够获得的最长序列，由于之后的值均小于matrix[i][j] 所以之后的值走的路径不会影响
当前的dp[i][j]并且可以由之前的dp[i][j]获得
dp公式 dp[i][j] = Max([i,j]上下左右中大于matrix[i][j]的点的dp值+1)
[i,j]取值对从matrix较大值开始降序取得
 */
var longestIncreasingPath = function(matrix) {
    let dp = new Array(matrix.length).fill().map(() => new Array(matrix[0].length).fill(1));
    let arr = [];

    for (let i = 0; i <= matrix.length-1; i++) {
        for (let j = 0; j <= matrix[0].length-1; j++) {
            arr.push([matrix[i][j], i, j]);
        }
    }
    arr.sort((a, b) => b[0]-a[0]);
    let res = 0;
    for (let [, i, j] of arr) {
        if (i > 0 && matrix[i-1][j] > matrix[i][j]) {
            dp[i][j] = Math.max(dp[i-1][j]+1, dp[i][j]);
        }
        if (i < matrix.length-1 && matrix[i+1][j] > matrix[i][j]) {
            dp[i][j] = Math.max(dp[i+1][j]+1, dp[i][j]);
        }
        if (j > 0 && matrix[i][j-1] > matrix[i][j]) {
            dp[i][j] = Math.max(dp[i][j-1]+1, dp[i][j]);
        }
        if (j < matrix[0].length-1 && matrix[i][j+1] > matrix[i][j]) {
            dp[i][j] = Math.max(dp[i][j+1]+1, dp[i][j]);
        }
        res = Math.max(dp[i][j], res);
    }
    return res;
};
console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]));