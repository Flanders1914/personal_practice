/**
dp
we need to sort robot and factory in order
for a factory at x with k capacity
we can break it into k factories at x with 1 capacity
dp[i][j] means the minimum distance for the first i robots and first j factories
dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j-1] + distance(i, j))
 */
var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b)
    let factorys = []
    for (let item of factory) {
        for (let i = 1; i <= item[1]; i++) {
            factorys.push(item[0])
        }
    }
    factorys.sort((a, b) => a-b)
    let distance = (i, j) => {
        return Math.abs(robot[i] - factorys[j])
    }
    let n = robot.length
    let m = factorys.length
    let dp = new Array(n).fill().map(() => new Array(m).fill(0))
    dp[0][0] = distance(0, 0)
    for (let j = 1; j < m; j++) {
        dp[0][j] = Math.min(dp[0][j-1], distance(0, j))
    }

    for (let i = 1; i < n; i++) {
        dp[i][i] = dp[i-1][i-1] + distance(i, i)
        for (let j = i+1; j < m; j++) {
            dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j-1] + distance(i, j))
        }
    }

    let res = dp[n-1][n-1]
    for (let j = n; j < m; j++) res = Math.min(res, dp[n-1][j])
    return res
};

let robot = [9,11,99,101], factory = [[10,1],[7,1],[14,1],[100,1],[96,1],[103,1]]
console.log(minimumTotalDistance(robot, factory))