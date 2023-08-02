/**
48. rotate image
思路：
画图找到对应点的关系
这里使用了一个matrix的reference数组，简化了代码
但增加了空间复杂度，也不太符合原题的精神
*/

var rotate = function(matrix) {
    let n = matrix.length;
    let reference = [];

    matrix.forEach(
        function (item) {
            reference.push(item.slice());
        }
    );
    
    for (let i = 0; i <= n -1; i++) {
        for (let j = 0; j <= n -1; j++) {
            matrix[i][j] = reference[n-1-j][i];
        }
    }

    return;
};

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix);

for (let row of matrix) {
    console.log(row);
}
