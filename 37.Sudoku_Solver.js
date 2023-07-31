/*
思路：
应用 深度优先搜索 BFS
找到第一个未知格并尝试1-9的candidate
isValid函数判断该candidate是否满足要求
若满足在该点的基础上向下搜索。

注意：70870870987化程度小而且实现起来比较麻烦

另一个思路：利用贪心，找到可能的值最少的点并从那里开始
 */

function isValid(board, n, m, k) {

    for (let j = 0; j <= 8; j++) {
        if (board[n][j] == k) return false;
    }

    for (let i = 0; i <= 8; i++) {
        if (board[i][m] == k) return false;
    }

    let cube_i = Math.floor(n / 3);
    let cube_j = Math.floor(m / 3);
    for (i = cube_i * 3; i <= cube_i * 3 + 2; i++) {
        for (j = cube_j * 3; j<= cube_j * 3 + 2; j++) {
            if (board[i][j] == k) return false;
        }
    }

    return true;
}

function dfs(board, n) {
    for (let i = n; i <= 8; i++) {
        for (let j = 0; j <= 8; j++) {

            if (board[i][j] == '.') {
                for (let k = 1; k <= 9; k++) {
                    let candidate = String(k);
                    if (isValid(board, i, j, candidate)) {
                        board[i][j] = candidate;
                        if (dfs(board, i)) return true;
                    }
                }
                board[i][j] = '.';
                return false;

            } else continue;
        }
    }
    return true;
}
var solveSudoku = function(board) {
    dfs(board, 0);
};

let board = [["5","3",".",".","7",".",".",".","."],
             ["6",".",".","1","9","5",".",".","."],
             [".","9","8",".",".",".",".","6","."],
             ["8",".",".",".","6",".",".",".","3"],
             ["4",".",".","8",".","3",".",".","1"],
             ["7",".",".",".","2",".",".",".","6"],
             [".","6",".",".",".",".","2","8","."],
             [".",".",".","4","1","9",".",".","5"],
             [".",".",".",".","8",".",".","7","9"]];

solveSudoku(board);
for (row of board) console.log(row);