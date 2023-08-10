/*
79. Word Search
思路：DFS (由于word是有顺序所以不能宽搜)
注意：
word是有顺序的（其实降低了复杂度）
找不到路重置board的状态
另外JS没有字符类型一个字符也是字符串，所以注意要复制副本而非引用
*/
var exist = function(board, word) {

    let n = board.length, m = board[0].length;
    const search = function (i, j, board, word, index) {

        let temp = board[i][j].slice();
        board[i][j] = 0;
        index++;
        if (index == word.length) return true;

        // 向上
        if ( i > 0 && word[index] == board[i -1][j]) {
            if (search(i-1, j, board, word, index)) return true;
        }
        // 向下
        if ( i < n-1 && word[index] == board[i +1][j]) {
            if (search(i +1, j, board, word, index)) return true;
        }
        // 向右
        if ( j < m -1 && word[index] == board[i][j +1]) {
            if (search(i, j +1, board, word, index)) return true;
        }
        // 向左
        if ( j > 0 && word[index] == board[i][j -1]) {
            if (search(i, j -1, board, word, index)) return true;
        }

        // 此路不通，重置board状态
        board[i][j] = temp;
        return false;
    };


    for (let i = 0; i <= n -1; i++) {
        for (let j = 0; j <= m -1; j++) {
            if (word[0] == board[i][j]) {
                if (search(i, j, board, word, 0)) return true;
            }
        }
    }

    return false;
};

let  board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB";
console.log(exist(board, word));