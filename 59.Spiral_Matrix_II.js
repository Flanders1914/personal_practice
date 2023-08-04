/*
59. Spiral Matrix II
简单的螺旋矩阵，思路和 54. Spiral Matrix 一样
复杂度更低

注意：
当 n % 2 == 1 时处理中心点
*/
var generateMatrix = function(n) {

    const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    let count = 0;

    for (let layer = 0; layer <= Math.floor(n/2) -1; layer++) {
        for (let j = layer; j <= n - 2 - layer; j++){
            count++;
            matrix[layer][j] = count;
        }
        for (let i = layer; i <= n - 2 - layer; i++) {
            count++;
            matrix[i][n - 1 - layer] = count;
        }
        for (let j = n - 1 - layer; j >= layer + 1; j--) {
            count++;
            matrix[n - 1 - layer][j] = count;
        }
        for (let i = n - 1 - layer; i >= layer + 1; i--) {
            count++;
            matrix[i][layer] = count;
        }
    }

    if (n % 2  == 1) {
        count++; 
        matrix[Math.floor(n/2)][Math.floor(n/2)] = count;
    }

    return matrix;
};


for (row of generateMatrix(9)) console.log(row);