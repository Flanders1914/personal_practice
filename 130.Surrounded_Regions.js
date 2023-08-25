/*
130. Surrounded Regions
思路：DFS
先将边缘的情况填上另外一种符号，再对内部进行DFS,最后恢复边缘情况
不知道为什么这道题BFS做会内存溢出
*/
var solve = function(board) {

    for (let i = 0; i <= board.length -1; i++) {
        if (board[i][0] == 'O') dfs(i, 0, board, 'V');
    }
    for (let j = 0; j <= board[0].length -1; j++) {
        if (board[0][j] == 'O') dfs(0, j, board, 'V');
    }
    for (let i = 0; i <= board.length -1; i++) {
        if (board[i][board[0].length-1] == 'O') dfs(i, board[0].length-1, board, 'V');
    }
    for (let j = 0; j <= board[0].length -1; j++) {
        if (board[board.length-1][j] == 'O') dfs(board.length-1, j, board, 'V');
    }

    for (let i = 1; i <= board.length -2; i++) {
        for (let j = 1; j <= board[0].length -2; j++) {
            if (board[i][j] == 'O') {
                dfs(i, j, board, 'X');
            }
        }
    }

    for (let i = 0; i <= board.length -1; i++) {
        for (let j = 0; j <= board[0].length -1; j++) {
            if (board[i][j] == 'V') {
                board[i][j] = 'O';
            }
        }
    }

    function dfs(i, j, board, char) {
        board[i][j] = char.slice();
        if (i <= board.length-2 && board[i+1][j] == 'O') dfs(i+1, j, board, char);
        if (i >= 1 && board[i-1][j] == 'O') dfs(i-1, j, board, char);
        if (j <= board[0].length-2 && board[i][j+1] == 'O') dfs(i, j+1, board, char);
        if (j >= 1 && board[i][j-1] == 'O') dfs(i, j-1, board, char);
    }
};

let board = [["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O"],["O","X","O","O","O","O","X","O","O","O","O","O","O","O","O","O","O","O","X","X"],["O","O","O","O","O","O","O","O","X","O","O","O","O","O","O","O","O","O","O","X"],["O","O","X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X","O"],["O","O","O","O","O","X","O","O","O","O","X","O","O","O","O","O","X","O","O","X"],["X","O","O","O","X","O","O","O","O","O","X","O","X","O","X","O","X","O","X","O"],["O","O","O","O","X","O","O","X","O","O","O","O","O","X","O","O","X","O","O","O"],["X","O","O","O","X","X","X","O","X","O","O","O","O","X","X","O","X","O","O","O"],["O","O","O","O","O","X","X","X","X","O","O","O","O","X","O","O","X","O","O","O"],["X","O","O","O","O","X","O","O","O","O","O","O","X","X","O","O","X","O","O","X"],["O","O","O","O","O","O","O","O","O","O","X","O","O","X","O","O","O","X","O","X"],["O","O","O","O","X","O","X","O","O","X","X","O","O","O","O","O","X","O","O","O"],["X","X","O","O","O","O","O","X","O","O","O","O","O","O","O","O","O","O","O","O"],["O","X","O","X","O","O","O","X","O","X","O","O","O","X","O","X","O","X","O","O"],["O","O","X","O","O","O","O","O","O","O","X","O","O","O","O","O","X","O","X","O"],["X","X","O","O","O","O","O","O","O","O","X","O","X","X","O","O","O","X","O","O"],["O","O","X","O","O","O","O","O","O","O","X","O","O","X","O","X","O","X","O","O"],["O","O","O","X","O","O","O","O","O","X","X","X","O","O","X","O","O","O","X","O"],["O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O"],["X","O","O","O","O","X","O","O","O","X","X","O","O","X","O","X","O","X","O","O"]];
for(let item of board) console.log(item);
console.log('_____')
solve(board);
for(let item of board) console.log(item);