/**
304. Range Sum Query 2D - Immutable
思路：memo[i][j] 存储从[0][0]到[i][j]矩阵的所有值的和
用 memo[i][j]生成答案
 */
var NumMatrix = function(matrix) {
    let n = matrix.length, m = matrix[0].length;
    this.memo = new Array(n).fill().map(() => new Array(m).fill(0));
    this.memo[0][0] = matrix[0][0];
    for (let i = 1; i <= n-1; i++) {
        this.memo[i][0] = this.memo[i-1][0] + matrix[i][0];
    }
    for (let j = 1; j <= m-1; j++) {
        this.memo[0][j] = this.memo[0][j-1] + matrix[0][j];
    }

    for (let i = 1; i <= n-1; i++) {
        for (let j = 1; j <= m-1; j++) {
            this.memo[i][j] = this.memo[i-1][j] + 
            this.memo[i][j-1] + matrix[i][j] - this.memo[i-1][j-1];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let ans = this.memo[row2][col2];
    if (row1 == 0) {
        if (col1 == 0) return ans; // row1 == col1 == 0
        else return ans - this.memo[row2][col1 -1]; // row1 == 0
    } else if (col1 == 0) {
        return ans - this.memo[row1-1][col2]; // col1 == 0
    } else return ans - this.memo[row2][col1-1] - this.memo[row1-1][col2] + this.memo[row1-1][col1-1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */