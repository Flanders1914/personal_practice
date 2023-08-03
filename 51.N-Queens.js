/*
51. N-Queens 经典N皇后
思路：
1. 基于递归的DFS，和之前做的解数组类似，复杂度还低一些
2. 由于需要找所有的解，所以不需要去返回一个true/false值去表达
该点能不能走，在调用递归后会需要把修改的值改回来判断接下来的值
3. 每次只要在下一行内找
4. 无难点，程序看就懂
5. 可能就输出答案比较麻烦
*/

function recursion(board, n, row, ans) {
    if (n == 0) {
        ans.push([]);
        board.forEach((item) => {
            ans[ans.length -1].push(item.join(''));
        });
    }

    let len = board.length;

    for (let j = 0; j <= len -1; j++) {
        if (isValid(board, row, j)) {
            board[row][j] = 'Q'
            recursion(board, n -1, row +1, ans)
            board[row][j] = '.';
        }
    }
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


var solveNQueens = function(n) {
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));
    let ans = [];
    recursion(board, n, 0, ans);
    return ans;
};


for (row of solveNQueens(5)) {
    console.log(row);
}