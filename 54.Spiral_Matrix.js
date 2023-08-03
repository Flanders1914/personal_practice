/*
54. Spiral Matrix
思路：
螺旋形字符矩阵，思路和之前的矩阵旋转一样，分层处理
简单来说就是画图找坐标的规律，比较麻烦但不难

注意点：
1. n和m的大小关系不知道，要按照小的那个来分层
2. 当min(n,m)为奇数时需要对中心部分做处理
 */
var spiralOrder = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let ans =  [];
    let layer_num = Math.floor(Math.min(n,m)/2);

    for (let layer = 0; layer <= layer_num -1; layer++) {
        for(let j = layer; j <= m - 2 - layer; j++) ans.push(matrix[layer][j]);
        for(let i = layer; i <= n - 2 - layer; i++) ans.push(matrix[i][m -1 -layer]);
        for(let j = m - 1 - layer; j >= layer + 1; j--) ans.push(matrix[n -1 - layer][j]);
        for(let i = n - 1 - layer; i >= layer + 1; i--) ans.push(matrix[i][layer]);
    }

    // min(n,m)为奇数时需要对中心部分做处理
    if ( m == n && m % 2 == 1) ans.push(matrix[layer_num][layer_num]);
    else if (n > m && m % 2 == 1) {
        for (let i = layer_num; i <= n - layer_num -1; i++) ans.push(matrix[i][layer_num]);
    } 
    else if (n < m && n % 2 == 1) {
        for (let j = layer_num; j <= m - layer_num -1; j++) ans.push(matrix[layer_num][j]);
    }

    return ans;
};

console.log(spiralOrder([[2,5],[8,4],[0,-1]]));