/**
529. Minesweeper
使用了两个函数
一个函数用于计算周围的地雷个数
另一个用于递归搜索
注意必须先计算个数再搜索
因为当周围有地雷时就要停止继续搜索
 */
function count_mine(i, j, board) {
    let res = 0;
    const directions = [[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
    for (let [a, b] of directions) {
        if ((a + i >= 0) && (a + i <= board.length-1) &&
        (b + j >= 0) && (b + j <= board[0].length-1) && (board[i+a][j+b] == 'M')) {
            res++;
        }
    }
    return res;
}

function search(i, j, board) {
    const directions = [[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
    let count = count_mine(i,j, board);
    if (count == 0) {
        board[i][j] = "B";
        for (let [a, b] of directions) {
            if ((a + i >= 0) && (a + i <= board.length-1) &&
            (b + j >= 0) && (b + j <= board[0].length-1) && (board[i+a][j+b] == 'E')) {
                search(i+a, j+b, board);
            }
        }
    }
    else board[i][j] = "" + count;

}
var updateBoard = function(board, click) {
    if (board[click[0]][click[1]] == "M") {
        board[click[0]][click[1]] = 'X';
        return board;
    }
    search(click[0], click[1], board);
    return board;
};
let board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], click = [1,2];
for (let row of updateBoard(board, click)) console.log(row);