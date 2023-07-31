/*
36. Valid Sudoku
思路：利用哈希表分别进行判断即可
 */

function checksub (n, m, board) {
    let hash = new Map();
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (hash.has(board[n + i][m + j])) return false;
            else {
                if (board[n + i][m + j] != '.') hash.set(board[n + i][m + j], 1);
            }
        }
    }
    return true;
}

var isValidSudoku = function(board) {

    let hash = new Map();
    // check row
    for (let i = 0; i <=8; i++) {
        hash.clear();
        for (let j = 0; j <= 8; j++) {
            if (hash.has(board[i][j])) return false;
            else {
                if (board[i][j] != '.') hash.set(board[i][j], 1);
            }
        }
    }
    // check column
    for (let j = 0; j <=8; j++) {
        hash.clear();
        for (let i = 0; i <= 8; i++) {
            if (hash.has(board[i][j])) return false;
            else {
                if (board[i][j] != '.') hash.set(board[i][j], 1);
            }
        }
    }

    // check sub-boxes
    if (checksub(0,0,board)&&checksub(0,3,board)&&checksub(0,6,board)&&
        checksub(3,0,board)&&checksub(3,3,board)&&checksub(3,6,board)&&
        checksub(6,0,board)&&checksub(6,3,board)&&checksub(6,6,board)) return true;
    else return false;
};

let board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board));