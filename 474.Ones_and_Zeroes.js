/**
474. Ones and Zeroes
思路：三维dp
dp[i][j][k] 表示 当 m == i n == j 选择范围为1-k项strs时的 最大数量
dp[i][j][k] = Math.max(dp[i-arr[k][0]][j-arr[k][1]][k-1]+1, dp[i][j][k-1]) 当第k项的0，1数量分别小于i，j时
dp[i][j][k] = dp[i][j][k-1] 当第k项的0，1数量存在至少一项大于i，j时
简化思路：
时间复杂度还是O(nmk)
但是可以只用二维数组
 */
/*
var findMaxForm = function(strs, m, n) {
    let arr = [];
    let min_z = Number.MAX_VALUE;
    let min_o = Number.MAX_VALUE;
    
    for (let str of strs) {
        let count1 = 0;
        let count2 = 0;
        for (let c of str) {
            if (c == '1') count1++;
            else count2++;
        }
        min_z = Math.min(min_z, count2);
        min_o = Math.min(min_o, count1);
        arr.push([count2, count1]);
    }
    arr.sort((a,b) => a[0]-b[0]);

    let dp = new Array(m+1).fill().map(
        () => new Array(n+1).fill().map(
        () => new Array(arr.length).fill(0)
    ));
    let res = 0;

    for (let i = 0; i <= m; i++) {
        if (i < min_z) continue;
        for (let j = 0; j <= n; j++) {
            if (j < min_o) continue;
            if (arr[0][0] <= i && arr[0][1] <= j) dp[i][j][0] = 1;
            res = Math.max(res, dp[i][j][0]);
            for (let k = 1; k <= arr.length-1; k++) {
                dp[i][j][k] = dp[i][j][k-1];
                if (arr[k][0] <= i && arr[k][1] <= j) {
                    dp[i][j][k] = Math.max(dp[i-arr[k][0]][j-arr[k][1]][k-1]+1, dp[i][j][k]);
                    res = Math.max(res, dp[i][j][k]);
                }
                if (arr[k][0] > i) break;
            }
        }
    }
    return res;
};
*/
var findMaxForm = function(strs, m, n) {
    let dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0));
    for (let str of strs) {
        let count0 = 0;
        let count1 = 0;
        for (let c of str) {
            if (c == '0') count0++;
            else count1++;
        }
        for (let i = m; i >= count0; i--) { // 注意这里必须从较大的i,j开始往小i,j迭代，避免修改覆盖小i,jdp对大i,jdp的影响
            for (let j = n; j >= count1; j--) { // 因为dp公式内的dp状态要外层循环上一层的dp数组状态
                dp[i][j] = Math.max(dp[i][j], dp[i-count0][j-count1]+1);
            }
        }
    }
    return dp[m][n];
};
console.log(findMaxForm(["10","0","1"], 1, 1));