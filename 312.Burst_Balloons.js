/**
312. Burst Balloons
二维dp
设 dp[i][j] 为 burst从i到j所有气球后得到的最大值（设i-1 和 j+1 都没有burst)
dp[i][j] = Math.max(dp[i][k-1]+dp[k+1][j] + nums[k]*nums[i-1][j+1])
即设k为最后一个burst的气球 i<=k<=j, k的左右为nums[i-1] 与 nums[i+1]
由于k最后一个burst所以它分割的两个气球段不受外界因素影响
 */
var maxCoins = function(nums) {
    let dp = new Array(nums.length).fill().map(()=>new Array(nums.length).fill(0));
    let n = nums.length;
    for (let i = 0; i <= n-1; i++) {
        let left = (i > 0)? nums[i-1] : 1;
        let right = (i < n-1)? nums[i+1] : 1;
        dp[i][i] = nums[i] * left * right;
    }
    for (let k = 1; k <= n-1; k++) {
        for (let i = 0; i <= n-1-k; i++) {
            let left = (i > 0)? nums[i-1] : 1;
            let right = (i+k < n-1)? nums[i+k+1] : 1;
            dp[i][i+k] = Math.max(dp[i+1][i+k] + nums[i]*left*right, 
                dp[i][i+k-1] + nums[i+k]*left*right);
            for (let j = i+1; j <= i+k-1; j++) {
                dp[i][i+k] = Math.max(dp[i][i+k], dp[i][j-1] + nums[j]*left*right + dp[j+1][i+k]);
            }
        }
    }
    return dp[0][n-1];
};
console.log(maxCoins([35,16,83,87,84,59,48,41]));