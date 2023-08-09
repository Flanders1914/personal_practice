/**
73. Set Matrix Zeroes
思路：（in-place 修改）
先找到要处理的行和列，用set记录
然后将记录的行和列归零
注意：
不能一边找一边改，因为无法判断值为0的元素是原本为0还是后来改成0
*/
var setZeroes = function(matrix) {
    const zero_rows = new Set(), zero_columns = new Set();

    for (let i = 0 ; i <= matrix.length -1; i++) {
        for (let j = 0; j <= matrix[0].length -1; j++) {
            if (matrix[i][j] == 0) {
                zero_rows.add(i);
                zero_columns.add(j);
            }
        }
    }

    for (let value of zero_rows) {
        for (let j = 0; j <= matrix[0].length -1; j++) matrix[value][j] = 0;
    }

    for (let value of zero_columns) {
        for (let i = 0; i <= matrix.length -1; i++) matrix[i][value] = 0;
    }

    return;
};