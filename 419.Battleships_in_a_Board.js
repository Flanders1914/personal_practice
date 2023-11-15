/**
419. Battleships in a Board
思路：水题
 */
var countBattleships = function(board) {
    let res = 0;
    let fill = function(i, j, board) {
        board[i][j] = '.';
        for (let index = i-1; index >= 0; index--) {
            if (board[index][j] == 'X') board[index][j] = '.';
            else break;
        }
        for (let index = i+1; index <= board.length-1; index++) {
            if (board[index][j] == 'X') board[index][j] = '.';
            else break;
        }
        for (let index = j-1; index >= 0; index--) {
            if (board[i][index] == 'X') board[i][index] = '.';
            else break;
        }
        for (let index = j+1; index <= board[0].length-1; index++) {
            if (board[i][index] == 'X') board[i][index] = '.';
            else break;
        }
    };
    for (let i = 0; i <= board.length -1; i++) {
        for (let j = 0; j <= board[0].length -1; j++) {
            if (board[i][j] == 'X') {
                res++;
                fill(i, j, board);
            }
        }
    }
    return res;
};
console.log(countBattleships([["X","X","X"]]));