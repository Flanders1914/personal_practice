/**
48. rotate image
思路：
1. 通过画图我们得到下列关系：
对于点[i][j],顺时针旋转一周，每旋转90度，其轨迹为：

[i][j] => [j][n-1-i] => [n-1-i][n-1-j] => [n-1-j][i] => [i][j]

2. 对于n*n的matrix，我们从外层向内层依次处理，一共需要处理n//2层
3. 我们以每一层上方的行（不包含最右侧的点）为出发点，对每个元素进行旋转，并将被替代的元素
也进行相应的旋转，就得到了旋转后的matrix

时间复杂度O(n^2) 空间复杂度O(1)
*/
var rotate = function(matrix) {
    let n = matrix.length;
    for (let k = 0; k <= Math.floor(n/2) -1; k++) {
        //每一层均从上方的行出发,不包括最右侧的点
        for (let j = k; j <= n-2-k; j++) {
            let i = k; //这一行的i坐标都是k
            //每个点对应的四个点进行旋转
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-1-j][i];
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
            matrix[j][n-1-i] = temp;
        }
    }
    return;
};

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix);

for (let row of matrix) {
    console.log(row);
}
