/**
221. Maximal Square
思路1：三维dp dp[i][j][k] 表示[i][j]为左上角，边长为k的矩形存在
思路2：二维dp dp[i][j] 表示以[i][j] 为左下角的矩形的边长
若matrix[i][j] == '1'
dp[i][j] = min{dp[i-1][j-1], dp[i][j-1], dp[i-1][j]} +1;
 */
/**
var maximalSquare = function(matrix) {
    let n = matrix.length, m = matrix[0].length;
    let k = Math.min(n, m);
    let dp = new Array(n).fill().map(() => new Array(m).fill(false));
    let ans = 0;
    for (let i = 0; i <= n-1; i++) {
        for (let j = 0; j <= m-1; j++) {
            if (matrix[i][j] == "1") {
                dp[i][j] = true;
                ans = 1;
            }
        }
    }

    for (let l = 1; l <= k-1; l++) {
        for (let i = 0; i <= n-1-l; i++) {
            for (let j = 0; j <= m-1-l; j++) {
                if (dp[i][j]) {
                    for (let q = 0; q <= l; q++) {
                        if ((matrix[i+q][j+l] == '1') && 
                            (matrix[i+l][j+q] == '1')) {
                            continue;
                        } else {
                            dp[i][j] = false;
                            break;
                        }
                    }
                    if (dp[i][j]) ans = (l+1) **2;
                }
            }
        }
    }

    return ans;
};
*/
var maximalSquare = function(matrix) {
    let n = matrix.length, m = matrix[0].length;
    let dp = new Array(n).fill().map(() => new Array(m).fill(0));
    let ans = 0;
    for (let i = 0; i <= n-1; i++) {
        if (matrix[i][0] == '1') {
            dp[i][0] = 1;
            ans = 1;
        }
    }
    for (let j = 0; j <= m-1; j++) {
        if (matrix[0][j] == '1') {
            dp[0][j] = 1;
            ans = 1;
        }
    }

    for (let i = 1; i <= n-1; i++) {
        for (let j = 1; j <= m-1; j++) {
            if (matrix[i][j] == '0') continue;
            dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])+1
            ans = Math.max(ans, dp[i][j]);
        }
    }

    return ans ** 2;
};
let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalSquare(matrix));