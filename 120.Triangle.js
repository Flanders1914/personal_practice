/**
120. Triangle
思路：dp
注意坐标即可
*/
var minimumTotal = function(triangle) {
let dp = [];
dp.push(triangle[0]);
for (let i = 1; i <= triangle.length -1; i++) {
    dp.push([]);
    dp[i].push(dp[i-1][0] + triangle[i][0]);
    for (let j = 0; j <= i -2; j++) {
        dp[i].push(Math.min(dp[i-1][j], dp[i-1][j+1]) + triangle[i][j+1]);
    }
    dp[i].push(dp[i-1][i-1] + triangle[i][i]);
}
let ans = Math.min(...dp[triangle.length -1]);
return ans;
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));