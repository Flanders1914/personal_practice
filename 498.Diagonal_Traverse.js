/**
498. Diagonal Traverse
思路：根据轮次的不同，模拟前进的路线，遇到边界根据边界的不同获得下一个起点
 */
var findDiagonalOrder = function(mat) {
    let res = [];
    let i = 0, j = 0;
    let turn = true;
    while ((i != mat.length-1) || (j != mat[0].length-1)) {
        if (turn) {
            res.push(mat[i][j]);
            while (i-1 >= 0 && j+1 <= mat[0].length-1) {
                i--;
                j++;
                res.push(mat[i][j]);
            }
            if (j == mat[0].length-1) i++;
            else j++;
        } else {
            res.push(mat[i][j]);
            while (i+1 <= mat.length-1 && j-1 >= 0) {
                i++;
                j--;
                res.push(mat[i][j]);
            }
            if (i == mat.length-1) j++;
            else i++;
        }
        turn = !turn;
    }
    res.push(mat[i][j]);
    return res;
};
console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));