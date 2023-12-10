/**
867. Transpose Matrix
水题
 */
var transpose = function(matrix) {
    let res = new Array(matrix[0].length).fill().map(() => new Array(matrix.length).fill(0));
    for (let i = 0; i <= matrix.length-1; i++) {
        for (let j = 0; j <= matrix[0].length-1; j++) {
            res[j][i] = matrix[i][j];
        }
    }
    return res;
};