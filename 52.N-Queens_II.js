/*
52. N-Queens II
思路：
N-Queens的改版，输出的是解的数量
1. 在递归函数迭代前声明一个ans变量
2. 在迭代中收集解的数量
3. 在迭代后上上返回解的数量
*/

function recursion(board, n, row) {
    if (n == 0) return 1;

    let len = board.length, ans = 0;


    for (let j = 0; j <= len -1; j++) {
        if (isValid(board, row, j)) {
            board[row][j] = 'Q'
            ans += recursion(board, n -1, row +1, ans)
            board[row][j] = '.';
        }
    }

    return ans;
}


function isValid(board, n, m) {
    let len = board.length;
    for (let i = 0; i <= len -1; i++) {
        if (board[i][m] == 'Q') return false;
    }

    for (let j = 0; j <= len -1; j++) {
        if (board[n][j] == 'Q') return false;
    }

    let n1 = n + 1, m1 = m + 1;
    while (n1 <= len -1 && m1 <= len -1) {
        if (board[n1][m1] == 'Q') return false;
        n1++;
        m1++;
    }

    n1 = n - 1, m1 = m + 1;
    while (n1 >= 0 && m1 <= len -1) {
        if (board[n1][m1] == 'Q') return false;
        n1--;
        m1++;
    }

    n1 = n - 1, m1 = m - 1;
    while (n1 >= 0 && m1 >= 0) {
        if (board[n1][m1] == 'Q') return false;
        n1--;
        m1--;
    }

    n1 = n + 1, m1 = m - 1;
    while (n1 <= len -1 && m1 >= 0) {
        if (board[n1][m1] == 'Q') return false;
        n1++;
        m1--;
    }

    return true;
}


var totalNQueens = function(n) {
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));
    let ans = recursion(board, n, 0);
    return ans;
};


console.log(totalNQueens(9));