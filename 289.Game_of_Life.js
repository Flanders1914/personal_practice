/**
289. Game of Life
复制一个 reference的参考board
存在不复制board的in-place做法
 */
var gameOfLife = function(board) {
    let n = board.length, m = board[0].length;
    let reference = new Array(n).fill().map(() => new Array(m).fill(0));
    for (let i = 0; i <= n-1; i++) {
        for (let j = 0; j <= m-1; j++) {
            if (board[i][j]) reference[i][j] = 1;
        }
    }
    for (let i = 0; i <= n-1; i++) {
        for (let j = 0; j <= m-1; j++) {
            let count = 0;
            if (i >= 1 && reference[i-1][j]) count++;
            if (i <= n-2 && reference[i+1][j]) count++;
            if (j >= 1 && reference[i][j-1]) count++;
            if (j <= m-2 && reference[i][j+1]) count++;
            if (i >= 1 && j >= 1 && reference[i-1][j-1]) count++;
            if (i <= n-2 && j >= 1 && reference[i+1][j-1]) count++;
            if (i >= 1 && j <= m-2 && reference[i-1][j+1]) count++;
            if (i <= n-2 && j <= m-2 && reference[i+1][j+1]) count++;
            if (count > 3 || count < 2) board[i][j] = 0;
            if (count == 3) board[i][j] = 1;
        }
    }
};