/*
174. Dungeon Game
思路：dp + BFS
dp公式不难总结，简而言之是dp[i][j]代表从[i,j]到终点
英雄在在[i,j]处所需的最少体力值
注意在BFS中需要一个is_visited消除next的重复点否则每一层回比前一层
多一倍的节点
可能有其他更好的做法，比如可以不用BFS而用两层循环
不过BFS可以兼容一些奇怪的地图
*/
var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length;
    let n = dungeon[0].length;
    let dp = new Array(m).fill().map(()=>new Array(n).fill(Number.MAX_VALUE));
    let is_visited = new Array(m).fill().map(()=> new Array(n).fill(false));

    if (dungeon[m-1][n-1] >= 0) dp[m-1][n-1] = 1;
    else dp[m-1][n-1] = 1-dungeon[m-1][n-1];

    let cache = [[m-1, n-1]];
    while (cache.length) {
        let next = [];
        for (let current of cache) {
            let i = current[0];
            let j = current[1];
            if (i >= 1) {
                if (dp[i][j]-dungeon[i-1][j] <= 0) dp[i-1][j] = 1;
                else dp[i-1][j] = Math.min(dp[i-1][j], dp[i][j]-dungeon[i-1][j]);
                if (!is_visited[i-1][j]) {
                    next.push([i-1,j]);
                    is_visited[i-1][j] = true;
                }
            }
            if (j >= 1) {
                if (dp[i][j] - dungeon[i][j-1] <= 0) dp[i][j-1] = 1;
                else dp[i][j-1] = Math.min(dp[i][j-1], dp[i][j]-dungeon[i][j-1]);
                if (!is_visited[i][j-1]) {
                    next.push([i,j-1]);
                    is_visited[i][j-1] = true;
                }
            }
        }
        cache = next;
    }
    return dp[0][0];
};
dungeon =
[[-2,-3,3],[-5,-10,1],[10,30,-5]];
console.log(calculateMinimumHP(dungeon));