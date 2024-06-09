/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
/*
var superEggDrop = function(k, n) {
    let dp = new Array(k+1).fill().map( () => new Array(n+1).fill(0) );
    for (let i = 1; i <= k; i++) {
        dp[i][1] = 1;
    }
    for (let j = 1; j <= n; j++) {
        dp[1][j] = j;
    }

    for (let i = 2; i <= k; i++) {
        for (let j = 2; j <= n; j++) {
            if (j == 2) {
                dp[i][j] = 2;
                continue;
            }
            let mid = (j >> 1) +1;
            dp[i][j] = Math.max(dp[i-1][mid-1], dp[i][j-mid]) +1;
        }
    }

    return dp[k][n];
};
*/
var superEggDrop = function(k, n) {
    let dp = new Array(k+1).fill().map( () => new Array(n+1).fill(0) );
    let res = 1;
    for (let i = 1; i <= k; i++) {
        dp[i][1] = 1;
    }

    while (dp[k][res] < n) {
        res++;
        dp[1][res] = res;
        for (let i = 2; i <= k; i++) {
            dp[i][res] = dp[i-1][res-1] + dp[i][res-1] + 1;
        }
    }
    return res;
}
console.log(superEggDrop(3, 14));
console.log(superEggDrop(2, 100));