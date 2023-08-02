/*
45. Jump Game II
思路：
简单的dp
不过这道题用贪心做会更好
无难点
 */
var jump = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill( n +1);
    dp[0] = 0;

    for (let i = 0; i <= n -1; i++) {
        let step = nums[i];
        for (let j = 0; j <= step; j++) {
            if (j + i <= n -1) dp[j + i] = (dp[i] +1 < dp[i + j])? dp[i] +1 : dp[i + j];
            else break;
        } 
    }

    return dp[n -1];
};

console.log(jump([2,3,0,1,4]));